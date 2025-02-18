import { NextResponse } from "next/server"
import OpenAI from "openai"

// Inicializar o cliente OpenAI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
})

// ID do assistente na OpenAI
const ASSISTANT_ID = "asst_0vmJtiMOtQBYn0mea7BQQLXW"

export async function POST(req: Request) {
  try {
    const { message, userInfo, threadId } = await req.json()

    // Usar thread existente ou criar novo
    const currentThreadId = threadId || (await openai.beta.threads.create()).id

    // Adicionar a mensagem do usuário ao Thread
    await openai.beta.threads.messages.create(currentThreadId, {
      role: "user",
      content: message,
      metadata: {
        userName: userInfo.name,
        userEmail: userInfo.email
      }
    })

    // Executar o assistente
    const run = await openai.beta.threads.runs.create(currentThreadId, {
      assistant_id: ASSISTANT_ID
    })

    // Create a new TransformStream for streaming
    const encoder = new TextEncoder()
    const stream = new TransformStream()
    const writer = stream.writable.getWriter()

    // Start the streaming process
    const processStream = async () => {
      try {
        let runStatus = await openai.beta.threads.runs.retrieve(currentThreadId, run.id)
        let attempts = 0
        const maxAttempts = 30

        while (runStatus.status === "queued" || runStatus.status === "in_progress") {
          if (attempts >= maxAttempts) {
            throw new Error("Tempo limite excedido")
          }

          await new Promise(resolve => setTimeout(resolve, 1000))
          runStatus = await openai.beta.threads.runs.retrieve(currentThreadId, run.id)
          attempts++
        }

        if (runStatus.status === "completed") {
          const messages = await openai.beta.threads.messages.list(currentThreadId)
          const lastMessage = messages.data[0]
          
          if (lastMessage.content[0].type === 'text') {
            const response = lastMessage.content[0].text.value
            const chunks = response.split(" ")
            
            // Stream each word with a small delay
            for (const chunk of chunks) {
              await writer.write(encoder.encode(chunk + " "))
              await new Promise(resolve => setTimeout(resolve, 50))
            }

            // Send the threadId as the last chunk
            await writer.write(encoder.encode(`\n[THREAD_ID]${currentThreadId}[/THREAD_ID]`))
          }
        } else {
          throw new Error(`Run failed with status: ${runStatus.status}`)
        }
      } catch (error) {
        console.error("Streaming error:", error)
        await writer.write(encoder.encode("Erro ao processar sua mensagem. Por favor, tente novamente."))
      } finally {
        await writer.close()
      }
    }

    processStream()

    return new Response(stream.readable, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
      },
    })
  } catch (error) {
    console.error("Chat error:", error)
    return NextResponse.json(
      { error: "Erro ao processar sua mensagem" },
      { status: 500 }
    )
  }
} 