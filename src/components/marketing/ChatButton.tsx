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
        className="group relative flex items-center gap-2 px-6 py-3 bg-[#2666eb] hover:bg-blue-700 text-white rounded-lg font-medium shadow-lg transition-all duration-300 hover:shadow-blue-500/20 hover:shadow-2xl hover:-translate-y-0.5 overflow-hidden"
      >
        {/* Animated ring effect */}
        <div className="absolute inset-0 border border-white/20 rounded-lg animate-pulse-ring" />
        
        {/* Animated glow effect */}
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/0 via-blue-500/50 to-blue-500/0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl" />
        
        {/* Icon with bounce animation */}
        <div className="relative animate-bounce-subtle">
          <MessageSquare className="w-5 h-5" />
        </div>
        
        {/* Text with shine effect */}
        <span className="relative overflow-hidden">
          <span className="relative z-10">Converse com o Concierge IA</span>
          <div className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[150%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out" />
        </span>
      </button>
      <ChatPopup isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </div>
  )
} 