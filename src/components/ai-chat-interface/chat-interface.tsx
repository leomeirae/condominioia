"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { SmilePlus, Send } from "lucide-react"
import type { UserInfo } from "./chat-app"

interface Message {
  id: number;
  text: string;
  sender: "user" | "ai";
}

interface ChatInterfaceProps {
  userInfo: UserInfo;
  onClose?: () => void;
}

export function ChatInterface({ userInfo, onClose }: ChatInterfaceProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputMessage, setInputMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [currentStreamedMessage, setCurrentStreamedMessage] = useState("")

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  // Scroll to bottom when messages change or streaming updates
  useEffect(() => {
    scrollToBottom()
  }, [messages, currentStreamedMessage])

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
        body: JSON.stringify({ message, userInfo }),
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
        accumulatedMessage += chunk
        setCurrentStreamedMessage(formatAIResponse(accumulatedMessage))
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
    <div className="flex flex-col h-full bg-[#1a1c2e] text-white">
      {/* Header with Avatar */}
      <div className="p-3 text-center border-b border-gray-800">
        <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-1">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%20(1)%20(1)-ZH88H94XnQGrMPXUTElLfRiCUGa25e.png"
            alt="Concierge AI Avatar"
            className="w-full h-full object-contain"
          />
        </div>
        <h1 className="text-lg font-bold">Concierge AI</h1>
        <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
          <div className="w-2 h-2 bg-blue-500 rounded-full" />
          <span className="truncate">Condômino - • {userInfo.name}</span>
        </div>
        {/* Botão de Finalizar Chat */}
        <button
          onClick={onClose}
          className="mt-2 px-4 py-1.5 bg-red-600 hover:bg-red-700 text-white text-sm rounded-full transition-colors"
        >
          Finalizar Chat
        </button>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-3 space-y-3">
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
          {/* Invisible element to scroll to */}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Area with Predefined Questions */}
      <div className="p-3 space-y-2 border-t border-gray-800 bg-[#14151A] sticky bottom-0">
        {/* Predefined Questions */}
        <div className={`space-y-1.5 ${messages.length > 0 ? 'hidden' : ''} max-h-[30vh] sm:max-h-[200px] overflow-y-auto`}>
          {predefinedQuestions.map((question, index) => (
            <button
              key={index}
              onClick={() => handleSendMessage(question)}
              className="w-full text-left p-2 rounded-lg bg-[#2b2d42] hover:bg-[#363856] transition-colors text-white text-sm"
            >
              {question}
            </button>
          ))}
        </div>

        {/* Message Input */}
        <div className="relative flex items-center space-x-2 bg-[#2b2d42] rounded-lg p-2">
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
      </div>
    </div>
  )
}

