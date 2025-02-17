"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import type { UserInfo } from "./chat-app"

interface UserRegistrationProps {
  onStartChat: (userInfo: UserInfo) => void
}

export function UserRegistration({ onStartChat }: UserRegistrationProps) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!name.trim() || !email.trim()) {
      setError("Por favor, preencha todos os campos")
      return
    }

    if (!email.includes("@")) {
      setError("Por favor, insira um e-mail válido")
      return
    }

    onStartChat({ name, email })
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%20(1)%20(1)-ZH88H94XnQGrMPXUTElLfRiCUGa25e.png"
            alt="Concierge AI"
            className="w-32 h-32 mx-auto object-contain"
          />
          <h2 className="mt-6 text-3xl font-bold text-white">Concierge AI</h2>
          <p className="mt-2 text-sm text-gray-400">Seu assistente virtual para administração de condomínios</p>
        </div>

        <div className="mt-8 bg-[#2b2d42] rounded-lg p-6 shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-white">
                Nome
              </Label>
              <Input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-[#1a1c2e] border-gray-700 text-white"
                placeholder="Digite seu nome"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-white">
                E-mail
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-[#1a1c2e] border-gray-700 text-white"
                placeholder="Digite seu e-mail"
              />
            </div>

            {error && <p className="text-sm text-red-500 mt-2">{error}</p>}

            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-lg">
              Fale Agora
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

