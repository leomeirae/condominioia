import PipeRunExample from '@/components/pipe-run';

export default function Page() {
    return (
        <div className="w-full max-w-md">
            <h1 className="text-2xl font-light text-gray-800 mb-1 text-center">
                ⌘ Condomínio IA Agent
            </h1>

            <p className="text-muted-foreground text-base font-light mb-20 text-center">
                Seu assistente virtual para gestão de condomínios
            </p>

            <PipeRunExample />
        </div>
    );
} 