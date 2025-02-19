"use client"

import { useState } from "react"
import { X, Minus, MessageSquare } from "lucide-react"
import { ChatInterface } from "./chat-interface"

const DEFAULT_USER = {
  name: "Visitante",
  email: "visitante@example.com"
}

interface ChatPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ChatPopup({ isOpen, onClose }: ChatPopupProps) {
  const [isMinimized, setIsMinimized] = useState(false)

  if (!isOpen) return null

  if (isMinimized) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={() => setIsMinimized(false)}
          className="bg-[#3B82F6] hover:bg-blue-600 text-white p-4 rounded-full shadow-lg transition-colors"
        >
          <MessageSquare className="h-6 w-6" />
        </button>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 sm:inset-auto sm:right-4 sm:bottom-4 sm:w-[420px] z-50 m-0 sm:m-4">
      <div className="bg-[#14151A] rounded-lg shadow-2xl h-[100dvh] sm:h-[600px] max-h-[80vh] flex flex-col">
        {/* Header com controles - Fixo no topo */}
        <div className="bg-[#14151A] px-4 py-3 flex items-center justify-between rounded-t-lg border-b border-gray-800 sticky top-0 z-[60]">
          {/* Logo e título */}
          <div className="flex items-center gap-2">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%20(1)%20(1)-ZH88H94XnQGrMPXUTElLfRiCUGa25e.png"
              alt="Concierge AI"
              className="w-8 h-8 object-contain"
            />
            <span className="font-medium text-white">Concierge AI</span>
          </div>
          
          {/* Botões de controle */}
          <div className="flex gap-2 relative">
            <button
              onClick={() => setIsMinimized(true)}
              className="p-2 text-gray-400 hover:text-white transition-colors rounded-full hover:bg-gray-800 bg-[#14151A]"
              aria-label="Minimizar chat"
            >
              <Minus className="h-5 w-5" />
            </button>
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-white transition-colors rounded-full hover:bg-gray-800 bg-[#14151A]"
              aria-label="Fechar chat"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Chat Interface */}
        <div className="flex-1 overflow-hidden">
          <ChatInterface userInfo={DEFAULT_USER} onClose={onClose} />
        </div>
      </div>
    </div>
  )
} 