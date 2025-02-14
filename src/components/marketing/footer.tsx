import Container from "../global/container";
import { FOOTER_LINKS } from "@/constants";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="w-full border-t border-border/50">
            <Container className="py-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                        <p className="text-sm text-muted-foreground">
                            © 2024 Condomínio IA. Todos os direitos reservados.
                        </p>
                    </div>

                    <div className="flex items-center gap-4">
                        {FOOTER_LINKS.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
