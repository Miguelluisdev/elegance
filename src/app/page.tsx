"use client"
import { ArrowRightIcon } from "lucide-react"
import Link from "next/link"
import { useEffect } from "react"
"retirar o comentario quando estiver pronto"
export default function Home() {
  // useEffect(() => {
  //   // Função para desabilitar o menu de contexto (botão direito do mouse)
  //   const disableContextMenu = (e: MouseEvent) => {
  //     e.preventDefault();
  //     alert("Conteúdo protegido.");
  //   };

  //   // Função para desabilitar atalhos de teclado específicos
  //   const disableDevToolsShortcuts = (e: KeyboardEvent) => {
  //     if ((e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J')) || (e.ctrlKey && e.key === 'U') || e.key === 'F12') {
  //       e.preventDefault();
  //       alert("Conteúdo protegido.");
  //     }
  //   };

  //   document.addEventListener('contextmenu', disableContextMenu);
  //   window.addEventListener('keydown', disableDevToolsShortcuts);

  //   // Limpeza dos event listeners ao desmontar o componente
  //   return () => {
  //     document.removeEventListener('contextmenu', disableContextMenu);
  //     window.removeEventListener('keydown', disableDevToolsShortcuts);
  //   };
  // }, []);

  return (
    <section className=" py-12 md:py-24 mt-28 lg:py-32">
    <div className="container flex flex-col items-center justify-center space-y-6 text-center">
      <h1 className="text-3xl font-bold text-background sm:text-4xl md:text-5xl">
        Moda e Elegância para Você
      </h1>
      <p className="max-w-[700px] text-lg text-background md:text-xl">
        Descubra peças exclusivas que combinam estilo e conforto
      </p>
      <div className="flex flex-col gap-2 sm:flex-row">
        <Link
          href="#"
          className="inline-flex h-10 items-center justify-center rounded-md bg-background px-6 text-sm font-medium text-primary shadow transition-colors bg-[#A66C4B]  focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        >
          Conheça Mais
        </Link>
        <Link
          href="#"
          className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-background shadow transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        >
          Contate-nos
        </Link>
      </div>
    </div>
  </section>
  
  )
}
