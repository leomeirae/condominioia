import { cn } from "@/lib";
import Container from "../global/container";
import Icons from "../global/icons";
import Images from "../global/images";
import Ripple from "../ui/ripple";

const SOCIAL_PLATFORMS = [
    { icon: Icons.linkedin, position: "left-3", size: "small", iconSize: "small", className: "hidden lg:flex" },
    { icon: Icons.tiktok, position: "left-2", size: "medium", iconSize: "medium" },
    { icon: Icons.insta, position: "left-1", size: "large", iconSize: "large" },
    { icon: Icons.youtube, position: "right-1", size: "large", iconSize: "large" },
    { icon: Icons.x, position: "right-2", size: "medium", iconSize: "medium" },
    { icon: Icons.facebook, position: "right-3", size: "small", iconSize: "small", className: "hidden lg:flex" }
];

const Integration = () => {
    const getPositionClasses = (position: string) => {
        switch (position) {
            case "left-3": return "-translate-x-[285px]";
            case "left-2": return "-translate-x-[210px]";
            case "left-1": return "-translate-x-[125px]";
            case "right-1": return "translate-x-[125px]";
            case "right-2": return "translate-x-[210px]";
            case "right-3": return "translate-x-[285px]";
            default: return "";
        }
    };

    const getSizeClasses = (size: string) => {
        switch (size) {
            case "large": return "size-20";
            case "medium": return "size-16";
            case "small": return "size-12";
            default: return "size-20";
        }
    };

    const getIconSizeClasses = (size: string) => {
        switch (size) {
            case "large": return "size-10";
            case "medium": return "size-7";
            case "small": return "size-5";
            default: return "size-10";
        }
    };

    return (
        <div className="relative flex flex-col items-center justify-center w-full py-20">
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-2xl md:text-4xl lg:text-6xl font-heading font-semibold !leading-snug">
                    Integração Nativa com Apps de Serviços
                </h2>
            </div>

            <Container className="relative">
                <div className="relative flex flex-col lg:hidden items-center justify-center overflow-visible">
                    <div className="absolute top-1/2 -translate-y-1/2 right-1/4 w-3/5 h-14 lg:h-20 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full -rotate-12 blur-[6.5rem] -z-10"></div>

                    <div className="flex items-center justify-center mb-8">
                        <Images.logo className="size-16 md:size-20 rounded-2xl" />
                    </div>

                    <div className="flex flex-wrap justify-center gap-4 mb-8">
                        {SOCIAL_PLATFORMS.filter(p => !p.className?.includes('hidden')).map((platform, index) => (
                            <div
                                key={index}
                                className="p-3 rounded-full flex items-center justify-center bg-gradient-to-b from-foreground/5 to-transparent shadow-xl shadow-black/10 backdrop-blur-lg"
                            >
                                <platform.icon className={cn("text-foreground", getIconSizeClasses(platform.iconSize))} />
                            </div>
                        ))}
                    </div>
                </div>
            </Container>

            <Container delay={0.3}>
                <div className="relative hidden lg:flex items-center justify-center overflow-visible min-h-[400px]">
                    <div className="absolute top-1/2 -translate-y-1/2 right-1/4 w-3/5 h-14 lg:h-20 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full -rotate-12 blur-[6.5rem] -z-10"></div>

                    <div className="relative flex w-full flex-col items-center justify-center overflow-visible">
                        <Ripple />
                    </div>

                    <div className="absolute z-20 flex items-center justify-center group">
                        <Images.logo className="size-24 group-hover:scale-110 transition-all duration-500 rounded-2xl" />
                    </div>

                    {SOCIAL_PLATFORMS.map((platform, index) => (
                        <div
                            key={index}
                            className={cn(
                                "absolute z-20 size-16 p-3 rounded-full flex items-center justify-center bg-gradient-to-b from-foreground/5 to-transparent shadow-xl shadow-black/10 backdrop-blur-lg transition-all duration-300 hover:scale-110",
                                getPositionClasses(platform.position),
                                getSizeClasses(platform.size),
                                platform.className
                            )}
                        >
                            <platform.icon
                                className={cn(
                                    "text-foreground",
                                    getIconSizeClasses(platform.iconSize)
                                )}
                            />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
};

export default Integration;
