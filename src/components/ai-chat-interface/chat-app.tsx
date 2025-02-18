"use client"

import { ChatInterface } from "./chat-interface"

export type UserInfo = {
  name: string
  email: string
}

const DEFAULT_USER: UserInfo = {
  name: "Visitante",
  email: "visitante@example.com"
}

export default function ChatApp() {
  return (
    <div className="h-screen bg-slate-950">
      <ChatInterface userInfo={DEFAULT_USER} />
    </div>
  )
}

