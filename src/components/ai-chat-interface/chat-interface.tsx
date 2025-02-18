"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { SmilePlus, Send } from "lucide-react"
import Image from "next/image"
import type { UserInfo } from "./chat-app"

interface Message {
  id: number;
  text: string;
  sender: "user" | "ai";
}

interface ChatInterfaceProps {
  userInfo: UserInfo;
}

export function ChatInterface({ userInfo }: ChatInterfaceProps) {
  const [messages, setMessages] = useState<Message[]>([])
  const [inputMessage, setInputMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [threadId, setThreadId] = useState<string | null>(null)
  const [currentStreamedMessage, setCurrentStreamedMessage] = useState("")

  const predefinedQuestions = [
    "Como o CondomínioIA pode facilitar a minha rotina como morador?",
    "Quais serviços essenciais posso centralizar na plataforma?",
    "De que maneira o CondomínioIA ajuda na gestão eficiente do meu condomínio?",
  ]

  // Função para formatar o texto da resposta
  const formatAIResponse = (text: string) => {
    // Remove marcadores markdown de números (1., 2., etc)
    let formatted = text.replace(/^\d+\.\s+/gm, '• ');
    
    // Remove asteriscos duplos (bold no markdown)
    formatted = formatted.replace(/\*\*/g, '');
    
    // Substitui múltiplos espaços por um único espaço
    formatted = formatted.replace(/\s+/g, ' ');
    
    // Adiciona quebra de linha após pontos que terminam frases
    formatted = formatted.replace(/\.\s+/g, '.\n');
    
    // Remove quebras de linha extras
    formatted = formatted.replace(/\n{3,}/g, '\n\n');
    
    // Trata listas com hífen ou asterisco
    formatted = formatted.replace(/^[-*]\s+/gm, '• ');

    return formatted.trim();
  }

  const handleSendMessage = async (message: string) => {
    if (!message.trim() || isLoading) return

    setMessages((prev) => [...prev, { id: Date.now(), text: message, sender: "user" }])
    setInputMessage("")
    setIsLoading(true)
    setCurrentStreamedMessage("")

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message, userInfo, threadId }),
      })

      if (!response.ok) throw new Error("Erro ao enviar mensagem")

      const reader = response.body?.getReader()
      if (!reader) throw new Error("Não foi possível ler a resposta")

      let accumulatedMessage = ""
      
      while (true) {
        const { done, value } = await reader.read()
        if (done) break

        // Decode the chunk and update the streamed message
        const chunk = new TextDecoder().decode(value)
        
        // Check if the chunk contains the threadId
        if (chunk.includes("[THREAD_ID]")) {
          const threadIdMatch = chunk.match(/\[THREAD_ID\](.*?)\[\/THREAD_ID\]/)
          if (threadIdMatch) {
            setThreadId(threadIdMatch[1])
            // Remove the threadId from the message
            accumulatedMessage = accumulatedMessage.replace(/\n\[THREAD_ID\].*?\[\/THREAD_ID\]/, "")
          }
        } else {
          accumulatedMessage += chunk
          setCurrentStreamedMessage(formatAIResponse(accumulatedMessage))
        }
      }

      // Add the complete message to the messages array
      setMessages((prev) => [...prev, { 
        id: Date.now() + 1, 
        text: formatAIResponse(accumulatedMessage.trim()), 
        sender: "ai" 
      }])
      
    } catch (error) {
      console.error("Chat error:", error)
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          text: "Desculpe, tive um problema ao processar sua mensagem. Por favor, tente novamente.",
          sender: "ai",
        },
      ])
    } finally {
      setIsLoading(false)
      setCurrentStreamedMessage("")
    }
  }

  return (
    <Card className="w-full bg-[#14151A] border-0 text-white shadow-2xl">
      <CardContent className="p-0 flex flex-col h-[500px]">
        {/* Profile Section */}
        <div className="bg-[#3B82F6] p-4">
          <div className="flex items-center">
            <div className="flex items-center gap-3">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%20(1)%20(1)-ZH88H94XnQGrMPXUTElLfRiCUGa25e.png"
                alt="Concierge AI"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <h2 className="text-xl font-semibold">Concierge AI</h2>
                <p className="text-sm text-blue-100">Seu assistente virtual • {userInfo.name}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Chat Content */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
          {messages.length === 0 ? (
            <div className="space-y-4">
              {predefinedQuestions.map((question, index) => (
                <div
                  key={index}
                  onClick={() => handleSendMessage(question)}
                  className="p-4 bg-[#1E1F25] rounded-lg cursor-pointer hover:bg-[#2A2B32] transition-colors"
                >
                  <p className="text-white">{question}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`${
                      message.sender === "user"
                        ? "bg-[#3B82F6]"
                        : "bg-[#1E1F25]"
                    } p-4 rounded-lg max-w-[85%]`}
                  >
                    <p className="text-white">{message.text}</p>
                  </div>
                </div>
              ))}
              {/* Streaming message */}
              {currentStreamedMessage && (
                <div className="flex justify-start">
                  <div className="bg-[#1E1F25] p-4 rounded-lg max-w-[85%]">
                    <p className="text-white">{currentStreamedMessage}</p>
                  </div>
                </div>
              )}
              {/* Loading indicator */}
              {isLoading && !currentStreamedMessage && (
                <div className="flex justify-start">
                  <div className="bg-[#1E1F25] p-4 rounded-lg max-w-[85%]">
                    <p className="text-white">Digitando...</p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Input Section */}
        <div className="p-4 border-t border-gray-800">
          <div className="relative">
            <Input
              placeholder="Digite sua mensagem..."
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  handleSendMessage(inputMessage)
                }
              }}
              className="bg-[#2A2B32] border-0 text-white pr-24 pl-4 py-6"
              disabled={isLoading}
            />
            <div className="absolute right-2 top-1/2 -translate-y-1/2 flex gap-2">
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <SmilePlus className="h-5 w-5" />
              </Button>
              <Button
                size="icon"
                className="bg-[#3B82F6] hover:bg-blue-600"
                onClick={() => handleSendMessage(inputMessage)}
                disabled={isLoading}
              >
                <Send className="h-5 w-5" />
              </Button>
            </div>
          </div>
          <div className="text-center mt-4 text-sm text-gray-500">POWERED BY CONDOMÍNIO IA</div>
        </div>
      </CardContent>
    </Card>
  )
}

