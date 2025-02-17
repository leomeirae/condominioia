import { NextResponse } from "next/server"

// Endpoint correto para execução de pipes no Langbase
const LANGBASE_API_URL = "https://api.langbase.com/v1"

export async function POST(req: Request) {
  try {
    // Verificar variáveis de ambiente
    if (!process.env.LANGBASE_API_KEY) {
      console.error("LANGBASE_API_KEY não configurada")
      throw new Error("Configuração do servidor incompleta")
    }

    if (!process.env.LANGBASE_PIPE_ID) {
      console.error("LANGBASE_PIPE_ID não configurado")
      throw new Error("Configuração do servidor incompleta")
    }

    const { message, userInfo } = await req.json()

    // Log da requisição
    console.log("Enviando requisição para Langbase:", {
      pipe_id: process.env.LANGBASE_PIPE_ID,
      message,
      userInfo: {
        name: userInfo.name,
        email: userInfo.email
      }
    })

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

    // Log da resposta
    console.log("Resposta do Langbase:", {
      status: response.status,
      statusText: response.statusText,
      data
    })

    if (!response.ok) {
      console.error("Langbase API Error:", {
        status: response.status,
        statusText: response.statusText,
        data,
        url: `${LANGBASE_API_URL}/pipes/execute`,
        pipe_id: process.env.LANGBASE_PIPE_ID
      })
      throw new Error(data.error?.message || "Erro na chamada da API")
    }

    // Extrair a resposta do formato correto da API do Langbase
    const aiResponse = data.response || data.output || data.choices?.[0]?.message?.content || "Desculpe, não consegui processar sua mensagem."

    return NextResponse.json({ 
      response: aiResponse
    })
  } catch (error) {
    console.error("Chat error:", error instanceof Error ? error.message : error)
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Erro ao processar sua mensagem" },
      { status: 500 }
    )
  }
} 