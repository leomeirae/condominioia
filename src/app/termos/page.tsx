"use client";

import Container from "@/components/global/container";
import Wrapper from "@/components/global/wrapper";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";

const TermsOfUse = () => {
    return (
        <Wrapper>
            <Container className="py-20">
                <div className="max-w-4xl mx-auto space-y-8">
                    <div className="mb-8">
                        <Link href="/">
                            <Button variant="ghost" className="group">
                                <ArrowLeftIcon className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                                Voltar
                            </Button>
                        </Link>
                    </div>

                    <h1 className="text-4xl font-bold mb-8">Termos de Uso do Condomínio IA</h1>
                    
                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold">1. Aceitação dos Termos</h2>
                        <p className="text-muted-foreground">
                            Ao acessar e utilizar o Condomínio IA, você concorda com estes Termos de Uso e com a nossa Política de Privacidade. 
                            Caso não concorde, por favor, não utilize a plataforma.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold">2. Objeto</h2>
                        <p className="text-muted-foreground">
                            O Condomínio IA é uma plataforma de inteligência artificial que se integra aos sistemas de gestão condominial já existentes, 
                            transformando dados em insights estratégicos e automatizando processos para otimizar a administração.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold">3. Uso da Plataforma</h2>
                        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                            <li>Você concorda em fornecer informações precisas e atualizadas ao utilizar a plataforma.</li>
                            <li>O uso deve ser feito de forma ética e em conformidade com a legislação aplicável, incluindo a LGPD.</li>
                            <li>É proibido utilizar a plataforma para qualquer atividade ilícita ou que possa comprometer a segurança dos dados.</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold">4. Propriedade Intelectual</h2>
                        <p className="text-muted-foreground">
                            Todo o conteúdo, design, software e marcas relacionados ao Condomínio IA são de nossa propriedade ou de nossos licenciadores. 
                            O uso indevido desses elementos é estritamente proibido.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold">5. Limitação de Responsabilidade</h2>
                        <p className="text-muted-foreground">
                            A plataforma é fornecida &ldquo;no estado em que se encontra&rdquo; e não garantimos que ela estará livre de erros ou interrupções. 
                            O Condomínio IA não se responsabiliza por danos diretos, indiretos ou incidentais decorrentes do uso ou incapacidade 
                            de uso da plataforma.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold">6. Alterações nos Termos de Uso</h2>
                        <p className="text-muted-foreground">
                            Podemos atualizar estes termos periodicamente. As alterações serão publicadas na plataforma e entrarão em vigor 
                            imediatamente após a publicação. É responsabilidade do usuário acompanhar as atualizações.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold">7. Legislação Aplicável</h2>
                        <p className="text-muted-foreground">
                            Estes termos são regidos pela legislação brasileira, em especial a LGPD e demais normas relacionadas à proteção de dados.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold">8. Contato</h2>
                        <p className="text-muted-foreground">
                            Para esclarecimentos, dúvidas ou informações adicionais, entre em contato conosco pelo e-mail: 
                            contato@condominioia.com.br
                        </p>
                    </section>
                </div>
            </Container>
        </Wrapper>
    );
};

export default TermsOfUse; 