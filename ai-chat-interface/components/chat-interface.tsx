"use client"

import { useState } from "react"
import { Send, SmilePlus } from "lucide-react"
import { Button } from "@/components/ui/button"
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

  const predefinedQuestions = [
    "Quer saber como eu posso te ajudar a melhorar a sua administração?",
    "Qual a importância de saber mais sobre meus Condôminos?",
    "Você é um software de administração de condomínios?",
  ]

  const handleSendMessage = async (message: string) => {
    if (!message.trim() || isLoading) return

    // Add user message
    setMessages((prev) => [...prev, { id: Date.now(), text: message, sender: "user" }])
    setInputMessage("")
    setIsLoading(true)

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message,
          userInfo,
          threadId
        }),
      })

      if (!response.ok) {
        throw new Error("Erro ao enviar mensagem")
      }

      const data = await response.json()

      if (data.threadId) {
        setThreadId(data.threadId)
      }

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          text: data.response,
          sender: "ai",
        },
      ])
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
    }
  }

  const handleQuestionClick = (question: string) => {
    handleSendMessage(question)
  }

  return (
    <div className="flex flex-col h-[600px] max-h-[80vh] bg-[#1a1c2e] text-white">
      {/* Header with Avatar */}
      <div className="p-3 text-center border-b border-gray-800">
        <div className="w-16 h-16 mx-auto mb-1">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%20(1)%20(1)-ZH88H94XnQGrMPXUTElLfRiCUGa25e.png"
            alt="Concierge AI Avatar"
            className="w-full h-full object-contain"
          />
        </div>
        <h1 className="text-lg font-bold">Concierge AI</h1>
        <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
          <div className="w-2 h-2 bg-blue-500 rounded-full" />
          <span>Condômino - • {userInfo.name}</span>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-3 space-y-3">
        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-[80%] rounded-2xl px-3 py-2 ${
                message.sender === "user" ? "bg-[#2666eb]" : "bg-[#2b2d42]"
              }`}
            >
              <p className="text-sm leading-relaxed">{message.text}</p>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="max-w-[80%] rounded-2xl px-3 py-2 bg-[#2b2d42]">
              <p className="text-sm leading-relaxed">Digitando...</p>
            </div>
          </div>
        )}
      </div>

      {/* Input Area with Predefined Questions */}
      <div className="p-3 space-y-2 border-t border-gray-800">
        {/* Predefined Questions */}
        <div className="space-y-1.5">
          {predefinedQuestions.map((question, index) => (
            <button
              key={index}
              onClick={() => handleQuestionClick(question)}
              className="w-full text-left p-2 rounded-lg bg-[#2b2d42] hover:bg-[#363856] transition-colors text-white text-sm"
            >
              {question}
            </button>
          ))}
        </div>

        {/* Message Input */}
        <div className="flex items-center space-x-2 bg-[#2b2d42] rounded-lg p-2">
          <SmilePlus className="w-5 h-5 text-gray-400 ml-2" />
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                handleSendMessage(inputMessage)
              }
            }}
            placeholder="Digite sua mensagem..."
            className="flex-1 bg-transparent outline-none text-sm"
            disabled={isLoading}
          />
          <Button
            size="icon"
            variant="ghost"
            className="text-blue-400 hover:text-blue-300 hover:bg-blue-900/20"
            onClick={() => handleSendMessage(inputMessage)}
            disabled={isLoading}
          >
            <Send className="w-5 h-5" />
            <span className="sr-only">Enviar mensagem</span>
          </Button>
        </div>
      </div>
    </div>
  )
}