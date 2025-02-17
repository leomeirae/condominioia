import { NextResponse } from "next/server"

// Endpoint correto para execução de pipes no Langbase
const LANGBASE_API_URL = "https://api.langbase.com/v1"

export async function POST(req: Request) {
  try {
    const { message, userInfo } = await req.json()

    // Executar o pipe no Langbase
    const response = await fetch(`${LANGBASE_API_URL}/pipes/execute`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.LANGBASE_API_KEY}`
      },
      body: JSON.stringify({
        pipe_id: process.env.LANGBASE_PIPE_ID,
        input: {
          messages: [{
            role: "user",
            content: message
          }],
          metadata: {
            userName: userInfo.name,
            userEmail: userInfo.email
          }
        }
      })
    })

    const data = await response.json()

    if (!response.ok) {
      console.error("Langbase API Error:", {
        status: response.status,
        statusText: response.statusText,
        data
      })
      throw new Error(data.error?.message || "Erro na chamada da API")
    }

    // Extrair a resposta do formato correto da API do Langbase
    const aiResponse = data.response || "Desculpe, não consegui processar sua mensagem."

    return NextResponse.json({ 
      response: aiResponse
    })
  } catch (error) {
    console.error("Chat error:", error)
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Erro ao processar sua mensagem" },
      { status: 500 }
    )
  }
} 