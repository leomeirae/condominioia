import { NextResponse } from "next/server"
import OpenAI from "openai"

// Inicializar o cliente OpenAI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
})

const systemPrompt = `You are the Concierge AI of the CondomínioIA platform. Your mission is to present our platform in a clear, dynamic, and engaging way, highlighting how we centralize essential condominium services and provide an integrated, personalized experience.

Instructions:
Use your complete database with Q&A examples and detailed information on features and benefits.
Provide educational, objective, and persuasive responses.
Simulate real-life scenarios—such as scheduling maintenance, cleaning, mobility, and well-being—to demonstrate how CondomínioIA simplifies residents' daily routines and optimizes management for administrators.
Maintain a friendly, empathetic, and professional tone; act like a knowledgeable salesperson who deeply understands the product.
Keep responses short (maximum 3-4 sentences), dynamic, and solution-oriented, always emphasizing the value of our system.
If you receive off-topic questions or offensive messages, respond politely: "Sorry, but I cannot answer that question. Let's focus on what relates to CondomínioIA."
When interacting with users, emphasize the convenience of centralizing essential services in one place.`

export async function POST(req: Request) {
  try {
    const { message } = await req.json()

    // Create a new TransformStream for streaming
    const encoder = new TextEncoder()
    const stream = new TransformStream()
    const writer = stream.writable.getWriter()

    // Start the streaming process
    const processStream = async () => {
      try {
        const stream = await openai.chat.completions.create({
          model: "gpt-4",
          messages: [
            { role: "system", content: systemPrompt },
            { role: "user", content: message }
          ],
          stream: true,
          temperature: 0.7,
          max_tokens: 300, // Limitar o tamanho da resposta
        })

        for await (const chunk of stream) {
          const content = chunk.choices[0]?.delta?.content || ""
          if (content) {
            await writer.write(encoder.encode(content))
          }
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