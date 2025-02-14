import "@/styles/globals.css";
import { cn } from "@/lib";
import { generateMetadata } from "@/utils";
import { base, heading } from "@/constants";
import { Toaster } from "@/components/ui/sonner";
import { subheading } from "@/constants/fonts";

export const metadata = generateMetadata();

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning className="dark">
            <body
                className={cn(
                    "min-h-screen bg-background font-sans antialiased",
                    base.variable,
                    heading.variable,
                    subheading.variable,
                )}
            >
                <main className="relative flex min-h-screen flex-col">
                    <div className="flex-grow flex-1">
                        {children}
                    </div>
                </main>
                <Toaster richColors theme="dark" position="top-right" />
            </body>
        </html>
    );
};
