"use client"
import { About } from "@/components/about"
import { MaxWidthWrapper } from "@/components/max-width-wrapper"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  ArrowRightIcon,
  CircleFadingPlus,
  Leaf,
  ShieldCheck,
} from "lucide-react"
import Link from "next/link"
import { useEffect } from "react"
;("retirar o comentario quando estiver pronto")

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
    <>
      <MaxWidthWrapper>
        <section className=" py-12 relative  md:py-24 md:mt-28 lg:py-32">
          <div className="container flex flex-col items-center justify-center space-y-6 text-center">
            <h1 className="text-3xl font-bold text-background sm:text-4xl md:text-5xl">
              Moda e Elegância para Você
            </h1>
            <p className="max-w-[700px] text-lg text-background md:text-xl">
              Descubra peças exclusivas que combinam estilo e conforto
            </p>
            <div className="flex flex-col gap-2 sm:flex-row">
              <Link
                href="/clothes"
                className="inline-flex h-10 items-center justify-center rounded-md   bg-background px-6 text-sm font-medium text-primary shadow transition-colors bg-[#A66C4B]  focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
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
      </MaxWidthWrapper>

      <MaxWidthWrapper>
        <div className="max-w-7xl mx-auto pt-8 px-8 xl:px-0">
          <h1 className="text-3xl font-bold text-center mb-8">
            Alguns dos Nossos Produtos
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 xl:gap-6 justify-items-center">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-xs">
              Produto 1
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-xs">
              Produto 2
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-xs">
              Produto 3
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-xs">
              Produto 4
            </div>
          </div>
        </div>
      </MaxWidthWrapper>

      <MaxWidthWrapper>
        <About />
      </MaxWidthWrapper>

      <MaxWidthWrapper>
        <div className=" flex justify-center">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 max-w-5xl">
            <div className="flex flex-col items-center">
              <CircleFadingPlus className="h-6 w-6 text-primary" />
              <h3 className="mt-4 text-xl font-bold">Conforto</h3>
              <p className="mt-2">
                Nossas roupas são projetadas para oferecer o máximo de conforto,
                garantindo uma experiência agradável para todos os clientes.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <ShieldCheck className="h-6 w-6 text-primary" />
              <h3 className="mt-4 text-xl font-bold">Segurança</h3>
              <p className="mt-2 text-muted-foreground">
                Realize suas compras com total segurança e proteção de dados,
                garantindo uma experiência de compra tranquila e confiável.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Leaf className="h-6 w-6 text-primary" />
              <h3 className="mt-4 text-xl font-bold">Sustentabilidade</h3>
              <p className="mt-2">
                Nossas práticas são sustentáveis, permitindo que você escolha
                roupas que respeitam o meio ambiente.
              </p>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>

      <MaxWidthWrapper>
        <div className="w-full text-xl  mt-20 lg:w-1/2 mx-auto">
          <div className="flex items-center space-x-3 font-bold">
            <h1>Perguntas Frequentes</h1>
          </div>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg">
                O que é a Elegance?
              </AccordionTrigger>
              <AccordionContent className="text-lg">
                A Elegance é sua loja de moda online, oferecendo uma ampla
                variedade de roupas elegantes e modernas para todas as ocasiões.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg">
                Para quem é a Elegance?
              </AccordionTrigger>
              <AccordionContent className="text-lg">
                A Elegance é para todos que desejam se vestir bem e com estilo.
                Atendemos desde adolescentes até adultos, oferecendo roupas para
                todas as idades e gostos.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg">
                O que você encontra na Elegance?
              </AccordionTrigger>
              <AccordionContent className="text-lg">
                Na Elegance, você encontra uma coleção diversificada de roupas,
                incluindo vestidos, camisas, calças, acessórios e muito mais,
                tudo com a mais alta qualidade.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg">
                Qual o valor das roupas?
              </AccordionTrigger>
              <AccordionContent className="text-lg">
                Os preços das roupas na Elegance variam de acordo com o tipo de
                peça e a coleção. Trabalhamos para oferecer opções que se
                encaixem em todos os orçamentos, sem comprometer a qualidade.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </MaxWidthWrapper>
    </>
  )
}
