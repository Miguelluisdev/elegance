
# Elegance(CONCLUÍDO)não hospedado

Bem-vindo ao repositório da **Elegance**! Este projeto é uma loja de roupas modernas que está atualmente em desenvolvimento. A Elegance visa oferecer uma experiência de compra elegante e eficiente, utilizando tecnologias de ponta para criar uma plataforma robusta e intuitiva.

## Tecnologias Utilizadas

- **Next.js**: Framework React para desenvolvimento web rápido e eficiente.
- **Tailwind CSS**: Framework CSS utilitário para estilização rápida e customizável.
- **Framer Motion**: Biblioteca para animações e interações suaves e elegantes.
- **Prisma**: ORM para interagir com o banco de dados de maneira eficiente e tipada.
- **PostgreSQL**: Banco de dados relacional utilizado para armazenar os dados da aplicação.
- **Vercel**: Plataforma de deploy contínuo e hospedagem otimizada para projetos Next.js.
- **Clerk**: Solução de autenticação e gerenciamento de usuários.
- **Stripe**: Plataforma de pagamentos para processar transações de forma segura.

## Funcionalidades

- **Catálogo de Produtos**: Navegue por uma variedade de roupas modernas.
- **Carrinho de Compras**: Adicione produtos ao carrinho e gerencie suas compras.
- **Autenticação**: Crie uma conta, faça login e gerencie seu perfil com Clerk.
- **Performance**: Desempenho otimizado para garantir uma experiência de navegação rápida e eficiente.
- 
## Instalação

Para executar este projeto localmente, siga os passos abaixo:

1. Clone o repositório:
   ```bash
   git clone https://github.com/Miguelluisdev/elegance.git
   ```

2. Navegue até o diretório do projeto:
   ```bash
   cd elegance
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Configure as variáveis de ambiente:
   Crie um arquivo `.env o arquivo` na raiz do projeto e adicione suas variáveis de ambiente conforme necessário. Veja o arquivo `.env.local` para referência.
      CONFIGURE O .ENV COM ESSAS VARIÁVEIS DE AMBIENTE` E O BANCO DE DADOS SIGA O SCHEMA.PRISMA:

         NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
         CLERK_SECRET_KEY=
         CLERK_WEBHOOK_SECRET=
         
         POSTGRES_URL=
         POSTGRES_PRISMA_URL=
         POSTGRES_URL_NO_SSL=
         POSTGRES_URL_NON_POOLING=
         POSTGRES_USER=
         POSTGRES_HOST=
         POSTGRES_PASSWORD=
         POSTGRES_DATABASE=
         
         STRIPE_SECRET_KEY=
         NEXT_PUBLIC_CLERK_PUBLISHABLEKEY=


6. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

O aplicativo estará disponível em `http://localhost:3000`.

## Deploy

Este projeto será configurado para deploy contínuo na Vercel. Qualquer commit na branch principal (`main`) acionará automaticamente um novo deploy.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests. Para grandes mudanças, por favor, abra uma issue primeiro para discutir o que você gostaria de mudar.

## Licença

Este projeto está licenciado sob os termos da licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---
