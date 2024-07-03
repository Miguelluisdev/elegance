import Image from "next/image"

export const About = () => {
    return (
      <section className="w-full mt-4  py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Sobre Nós
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explore uma seleção de nossos projetos recentes e veja como ajudamos nossos clientes a obter sucesso online.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <Image
              src="/about-img.jpg"
              width="550"
              height="310"
              alt="about-page"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
            />
            <div className="flex flex-col justify-center space-y-4">
              <ul className="grid gap-6">
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Elegance</h3>
                    <p className="">
                    Elegance oferece roupas elegantes e da moda, com preços acessíveis que não comprometem a qualidade.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Plataforma</h3>
                    <p className="">
                     Facilitamos a navegação e a compra de seus produtos, garantindo uma experiência de usuário impecável.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold"> Marketing</h3>
                    <p className="">
                    Descubra peças exclusivas que combinam estilo e conforto – Destacando a exclusividade e o conforto das roupas vendidas na loja.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    )
  }
