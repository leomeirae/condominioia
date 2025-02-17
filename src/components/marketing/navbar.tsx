import Link from "next/link";
import Icons from "../global/icons";
import Wrapper from "../global/wrapper";
import MobileMenu from "./mobile-menu";

const Navbar = () => {
    return (
        <header className="sticky top-0 w-full h-16 bg-background/80 backdrop-blur-sm z-50">
            <Wrapper className="h-full">
                <div className="flex items-center justify-between h-full">
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center gap-2">
                            <Icons.icon className="w-6" />
                            <span className="text-xl font-semibold hidden lg:block">
                                Condominio IA
                            </span>
                        </Link>
                    </div>

                    <div className="hidden lg:flex items-center gap-4">
                        <ul className="flex items-center gap-8">
                            <li className="text-sm font-medium -1 link">
                                <Link href="/">
                                    
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="flex items-center gap-4">
                        <MobileMenu />
                    </div>
                </div>
            </Wrapper>
        </header>
    )
};

export default Navbar
