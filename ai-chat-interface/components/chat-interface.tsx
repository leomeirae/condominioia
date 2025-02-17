"use client"

import { useState } from "react"
import { Send, SmilePlus } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { UserInfo } from "./chat-app"

interface ChatInterfaceProps {
  userInfo: UserInfo
}

export function ChatInterface({ userInfo }: ChatInterfaceProps) {
  const [messages, setMessages] = useState([])
  const [inputMessage, setInputMessage] = useState("")

  const predefinedQuestions = [
    "Quer saber como eu posso te ajudar a melhorar a sua administração?",
    "Qual a importância de saber mais sobre meus Condôminos?",
    "Você é um software de administração de condomínios?",
  ]

  const handleSendMessage = (message: string) => {
    if (!message.trim()) return

    // Add user message
    setMessages((prev) => [...prev, { id: Date.now(), text: message, sender: "user" }])

    // Add AI response after user message
    if (messages.length === 0) {
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now() + 1,
            text: `Olá ${userInfo.name}! Eu sou o Concierge AI, seu assistente virtual para administração de condomínios. Como posso ajudar você hoje?`,
            sender: "ai",
          },
        ])
      }, 500)
    }

    setInputMessage("")
  }

  const handleQuestionClick = (question: string) => {
    handleSendMessage(question)
  }

  return (
    <div className="flex h-screen bg-[#1a1c2e] text-white">
      {/* Left Sidebar */}
      <div className="w-96 border-r border-gray-800 flex flex-col p-6">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">Concierge AI</h1>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full" />
            <span className="text-sm text-gray-300">Seu assistente virtual</span>
          </div>
          <div className="text-sm text-gray-400">Usuário: {userInfo.name}</div>
        </div>

        <div className="relative mt-8 flex-1">
          <div className="relative h-[calc(100%-100px)]">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%20(1)%20(1)-ZH88H94XnQGrMPXUTElLfRiCUGa25e.png"
              alt="Concierge AI Avatar"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Chat Content Area */}
        <div className="flex-1 overflow-y-auto p-6">
          {/* Predefined Questions */}
          <div className="space-y-3 mb-6">
            {predefinedQuestions.map((question, index) => (
              <button
                key={index}
                onClick={() => handleQuestionClick(question)}
                className="w-full text-left p-4 rounded-lg bg-[#2b2d42] hover:bg-[#363856] transition-colors text-white text-sm"
              >
                {question}
              </button>
            ))}
          </div>

          {/* Messages */}
          <div className="space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                    message.sender === "user" ? "bg-blue-600" : "bg-[#2b2d42]"
                  }`}
                >
                  <p className="text-sm md:text-base leading-relaxed">{message.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Message Input */}
        <div className="p-4 border-t border-gray-800">
          <div className="flex items-center space-x-2 bg-[#2b2d42] rounded-lg p-2">
            <SmilePlus className="w-6 h-6 text-gray-400 ml-2" />
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
            />
            <Button
              size="icon"
              variant="ghost"
              className="text-blue-400 hover:text-blue-300 hover:bg-blue-900/20"
              onClick={() => handleSendMessage(inputMessage)}
            >
              <Send className="w-5 h-5" />
              <span className="sr-only">Enviar mensagem</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

