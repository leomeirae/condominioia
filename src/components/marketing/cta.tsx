"use client";

import { motion } from "framer-motion";
import Container from "../global/container";
import { Button } from "../ui/button";
import Particles from "../ui/particles";
import { useState } from 'react';

const CTA = () => {
    const [showForm, setShowForm] = useState(false);
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [mensagem, setMensagem] = useState("");
    const [status, setStatus] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const res = await fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nome, email, mensagem })
        });
        if (res.ok) {
            setStatus('Mensagem enviada com sucesso!');
            setNome('');
            setEmail('');
            setMensagem('');
            setShowForm(false);
        } else {
            setStatus('Erro ao enviar mensagem');
        }
    };

    return (
        <div id="contact" className="relative flex flex-col items-center justify-center w-full py-20">
            <Container className="py-20 max-w-6xl mx-auto">
                <div className="relative flex flex-col items-center justify-center py-12 lg:py-20 px-0 rounded-2xl lg:rounded-3xl bg-background/20 text-center border border-foreground/20 overflow-hidden">
                    <Particles
                        refresh
                        ease={80}
                        quantity={80}
                        color="#d4d4d4"
                        className="hidden lg:block absolute inset-0 z-0"
                    />
                    <Particles
                        refresh
                        ease={80}
                        quantity={35}
                        color="#d4d4d4"
                        className="block lg:hidden absolute inset-0 z-0"
                    />

                    <motion.div
                        className="absolute -bottom-1/8 left-1/3 -translate-x-1/2 w-44 h-32 lg:h-52 lg:w-1/3 rounded-full blur-[5rem] lg:blur-[10rem] -z-10"
                        style={{
                            background: 'conic-gradient(from 0deg at 50% 50%, #a855f7 0deg, #3b82f6 180deg, #06b6d4 360deg)',
                        }}
                        animate={{
                            rotate: 360
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    />
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-medium !leading-snug">
                        Vai continuar a gerir condominios as cegas?<br /> <span className="font-subheading italic"></span>
                    </h2>
                    <p className="text-sm md:text-lg text-center text-accent-foreground/80 max-w-2xl mx-auto mt-4">
                        Transforme a gestão de condomínios com automação inteligente. Crie campanhas mais rápidas, gere conteúdo melhor e decida em minutos.
                    </p>
                    <div className="mt-8 w-full max-w-md">
                        {status && <p className="mb-4 text-center text-lg text-green-500">{status}</p>}
                        {showForm ? (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <input
                                    type="text"
                                    name="nome"
                                    placeholder="Seu nome"
                                    value={nome}
                                    onChange={(e) => setNome(e.target.value)}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    aria-label="Seu nome"
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Seu email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    aria-label="Seu email"
                                />
                                <textarea
                                    name="mensagem"
                                    placeholder="Sua mensagem"
                                    value={mensagem}
                                    onChange={(e) => setMensagem(e.target.value)}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    aria-label="Sua mensagem"
                                ></textarea>
                                <Button type="submit" size="lg">
                                    Enviar
                                </Button>
                            </form>
                        ) : (
                            <Button onClick={() => setShowForm(true)} size="lg">
                                Quero saber mais?
                            </Button>
                        )}
                    </div>
                </div>
            </Container>
        </div>
    )
};

export default CTA
