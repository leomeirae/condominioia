"use client"

import { useState } from "react"
import { ChatInterface } from "./chat-interface"
import { UserRegistration } from "./user-registration"

export type UserInfo = {
  name: string
  email: string
}

export default function ChatApp() {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null)

  const handleStartChat = (info: UserInfo) => {
    setUserInfo(info)
  }

  return (
    <div className="h-screen bg-[#1a1c2e]">
      {!userInfo ? <UserRegistration onStartChat={handleStartChat} /> : <ChatInterface userInfo={userInfo} />}
    </div>
  )
}

