import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { ClerkProvider } from "@clerk/nextjs"
import type { Metadata } from "next"
import { Baskervville, Inter } from "next/font/google"
import { Navbar } from "../components/Navbar"
import { ptBR } from "@clerk/localizations";

import "./globals.css"
import ScrollControl from "@/hooks/use-to-top"

const basker = Baskervville({ weight: "400", subsets: ["latin"] })

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
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider localization={ptBR} >
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
            <ScrollControl/>
            {children}
            <Footer />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
