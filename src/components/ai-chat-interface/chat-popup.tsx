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
      <div className="bg-[#14151A] rounded-lg shadow-2xl h-full sm:h-auto">
        {/* Header com controles */}
        <div className="bg-[#14151A] px-4 py-2 flex items-center justify-end rounded-t-lg border-b border-gray-800">
          <div className="flex gap-2">
            <button
              onClick={() => setIsMinimized(true)}
              className="p-2 text-gray-400 hover:text-white transition-colors rounded-full hover:bg-gray-800"
            >
              <Minus className="h-4 w-4" />
            </button>
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-white transition-colors rounded-full hover:bg-gray-800"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Chat Interface */}
        <ChatInterface userInfo={DEFAULT_USER} />
      </div>
    </div>
  )
} 