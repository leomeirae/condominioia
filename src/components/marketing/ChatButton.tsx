"use client"

import { useState } from "react"
import { MessageSquare } from "lucide-react"
import { ChatPopup } from "../ai-chat-interface/chat-popup"

export default function ChatButton() {
  const [isChatOpen, setIsChatOpen] = useState(false)

  return (
    <div className="w-full flex justify-center py-16">
      <button
        onClick={() => setIsChatOpen(true)}
        className="flex items-center gap-2 px-6 py-3 bg-[#2666eb] hover:bg-blue-700 text-white rounded-lg font-medium shadow-lg transition-colors"
      >
        <MessageSquare className="w-5 h-5" />
        Fale com o Concierge AI
      </button>
      <ChatPopup isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </div>
  )
} 