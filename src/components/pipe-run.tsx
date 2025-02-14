"use client";

import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';

const PipeRunExample = () => {
    const [input, setInput] = useState('');
    const [response, setResponse] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch('/api/langbase/pipes/run', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    messages: [
                        {
                            role: 'user',
                            content: input,
                        },
                    ],
                }),
            });

            const data = await res.json();
            setResponse(data.content);
        } catch (error) {
            console.error('Error:', error);
            setResponse('Error occurred while processing your request.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full max-w-md mx-auto space-y-4">
            <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Digite sua mensagem..."
                    className="w-full"
                />
                <Button 
                    type="submit" 
                    disabled={loading}
                    className="w-full"
                >
                    {loading ? 'Processando...' : 'Enviar'}
                </Button>
            </form>

            {response && (
                <div className="mt-4 p-4 bg-gray-100 rounded-lg">
                    <p className="whitespace-pre-wrap">{response}</p>
                </div>
            )}
        </div>
    );
};

export default PipeRunExample; 