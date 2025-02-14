"use client";

import Container from "@/components/global/container";
import Wrapper from "@/components/global/wrapper";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";

const PrivacyPolicy = () => {
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

                    <h1 className="text-4xl font-bold mb-8">Política de Privacidade do Condomínio IA</h1>
                    
                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold">1. Introdução</h2>
                        <p className="text-muted-foreground">
                            Bem-vindo à Política de Privacidade do Condomínio IA. Nossa plataforma se compromete a proteger os dados pessoais dos usuários, 
                            em conformidade com a Lei Geral de Proteção de Dados (LGPD – Lei nº 13.709/2018). Este documento descreve como coletamos, 
                            usamos, armazenamos e compartilhamos suas informações.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold">2. Dados Coletados</h2>
                        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                            <li>Dados Pessoais: Nome, e-mail, telefone, CPF, endereço e outras informações necessárias para a prestação de serviços.</li>
                            <li>Dados de Uso: Informações sobre as interações dos condôminos com o agente de IA, como reservas, solicitações de serviços, chamados de manutenção e recebimento de documentos.</li>
                            <li>Dados Técnicos: Informações de acesso, como endereço IP, navegador e dispositivos utilizados.</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold">3. Uso das Informações</h2>
                        <p className="text-muted-foreground">Utilizamos seus dados para:</p>
                        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                            <li>Personalizar e aprimorar a experiência de gestão condominial;</li>
                            <li>Integrar dados dos sistemas existentes e oferecer insights estratégicos em tempo real;</li>
                            <li>Automatizar processos e otimizar a comunicação entre administradores e condôminos;</li>
                            <li>Desenvolver novos recursos e melhorar continuamente nossa plataforma.</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold">4. Compartilhamento de Dados</h2>
                        <p className="text-muted-foreground">
                            Seus dados poderão ser compartilhados com parceiros estratégicos (como prestadores de serviços e instituições) 
                            somente quando necessário para a prestação dos serviços, sempre em conformidade com a LGPD e garantindo a 
                            segurança das informações.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold">5. Segurança dos Dados</h2>
                        <p className="text-muted-foreground">
                            Adotamos medidas técnicas e administrativas adequadas para proteger suas informações contra acesso não autorizado, 
                            divulgação, alteração ou destruição.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold">6. Direitos dos Usuários</h2>
                        <p className="text-muted-foreground">Você tem o direito de:</p>
                        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                            <li>Acessar, corrigir ou solicitar a exclusão de seus dados;</li>
                            <li>Revogar seu consentimento para o tratamento de dados;</li>
                            <li>Solicitar informações sobre a forma e a finalidade do tratamento dos seus dados.</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold">7. Alterações na Política de Privacidade</h2>
                        <p className="text-muted-foreground">
                            Esta política pode ser atualizada periodicamente. Notificaremos os usuários sobre mudanças significativas 
                            por meio de avisos na plataforma ou via e-mail.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold">8. Contato</h2>
                        <p className="text-muted-foreground">
                            Para dúvidas, solicitações ou esclarecimentos, entre em contato conosco através do e-mail: 
                            contato@condominioia.com.br
                        </p>
                    </section>
                </div>
            </Container>
        </Wrapper>
    );
};

export default PrivacyPolicy; 