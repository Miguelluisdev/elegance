// app/layout.tsx
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import ScrollControl from "@/hooks/use-to-top";
import { ptBR } from "@clerk/localizations";
import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Baskervville } from "next/font/google";
import { Navbar } from "../components/Navbar";
import ProtectComponent from "@/hooks/use-protect";
import "./globals.css";

const basker = Baskervville({ weight: "400", subsets: ["latin"] });
  // configure o metadata abaixo:
export const metadata: Metadata = {
  title: {
    default: "Elegance",
    template: "Loja virtual de roupas elegantes",
  },
  description: "Loja virtual de roupas elegantes",
  openGraph: {
    title: "Elegance",
    description: "Loja de roupas",
    type: "website",
    locale: "pt-br",
    url: "http://localhost:3000",
    siteName: "Elegance",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider localization={ptBR}>
      <html lang="pt-br">
        <head>
          <link rel="icon" href="/favicon.svg" sizes="any" />
        </head>
        <body className={basker.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            <ProtectComponent />
            <ScrollControl />
            {children}
            <Footer />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
