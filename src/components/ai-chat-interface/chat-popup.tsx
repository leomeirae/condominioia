"use client"

import { useState } from "react"
import { X } from "lucide-react"
import ChatApp from "./chat-app"

interface ChatPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ChatPopup({ isOpen, onClose }: ChatPopupProps) {
  const [isMinimized, setIsMinimized] = useState(false)

  if (!isOpen) return null

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isMinimized ? (
        <button
          onClick={() => setIsMinimized(false)}
          className="bg-[#2666eb] hover:bg-blue-700 text-white p-4 rounded-full shadow-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        </button>
      ) : (
        <div className="bg-[#1a1c2e] rounded-lg shadow-2xl w-[420px] max-h-[90vh] flex flex-col animate-in slide-in-from-bottom duration-300">
          <div className="flex justify-between items-center p-4 border-b border-gray-800">
            <h2 className="text-white font-semibold">Concierge AI</h2>
            <div className="flex gap-2">
              <button
                onClick={() => setIsMinimized(true)}
                className="text-gray-400 hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </button>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-white"
              >
                <X size={20} />
              </button>
            </div>
          </div>
          <div className="flex-1 overflow-y-auto">
            <ChatApp />
          </div>
        </div>
      )}
    </div>
  )
} 