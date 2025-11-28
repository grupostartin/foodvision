<div align="center">
  <img alt="FoodVision Logo" src="/public/logo.png" width="120" />
  <h1>FoodVision</h1>
  <p><strong>Soluções de Marketing Digital para o Setor Alimentício</strong></p>

  <p>
    <a href="#sobre">Sobre</a> •
    <a href="#tecnologias">Tecnologias</a> •
    <a href="#funcionalidades">Funcionalidades</a> •
    <a href="#instalação">Instalação</a> •
    <a href="#configuração">Configuração</a>
  </p>
</div>

<br />

## 📖 Sobre

**FoodVision** é uma plataforma moderna desenvolvida para oferecer soluções de marketing e gestão para empresas do ramo alimentício. O projeto consiste em uma Landing Page de alta conversão integrada a um Dashboard administrativo para gestão de assinaturas e acesso a conteúdos exclusivos.

## 🚀 Tecnologias

Este projeto foi desenvolvido utilizando as seguintes tecnologias:

- **Frontend:** [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Linguagem:** [TypeScript](https://www.typescriptlang.org/)
- **Estilização:** [Tailwind CSS](https://tailwindcss.com/) (Classes utilitárias)
- **Animações:** [Framer Motion](https://www.framer.com/motion/)
- **Ícones:** [Lucide React](https://lucide.dev/)
- **Backend / BaaS:** [Supabase](https://supabase.com/) (Auth, Database)
- **Pagamentos:** [Cakto](https://cakto.com.br/) (Integração de Checkout e Webhooks)

## ✨ Funcionalidades

- **Landing Page Otimizada:** Seções de Hero, Problema/Solução, Prova Social e Planos.
- **Autenticação Segura:** Login e cadastro de usuários via Supabase Auth.
- **Proteção de Rotas:** Acesso restrito ao Dashboard apenas para usuários autenticados e com assinatura ativa.
- **Gestão de Assinaturas:** Integração com gateway de pagamento Cakto para planos "Básico" e "Avançado".
- **Dashboard do Usuário:** Área exclusiva para assinantes visualizarem conteúdos e status da conta.
- **Painel Administrativo:** Controle de acesso e verificação de status de usuários (Admin).

## 💻 Instalação

Pré-requisitos: [Node.js](https://nodejs.org/) instalado.

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/grupostartin/foodvision.git
   cd foodvision
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

## ⚙️ Configuração

Para rodar o projeto localmente, você precisará configurar as variáveis de ambiente. Crie um arquivo `.env.local` na raiz do projeto com as seguintes chaves:

```env
# Supabase
VITE_SUPABASE_URL=sua_url_do_supabase
VITE_SUPABASE_ANON_KEY=sua_chave_anonima_do_supabase

# Admin
VITE_ADMIN_EMAIL=seu_email_de_admin@exemplo.com
```

Para o servidor backend (Webhooks), configure o arquivo `server/.env`:

```env
# Server
PORT=3001
SUPABASE_URL=sua_url_do_supabase
SUPABASE_SERVICE_ROLE_KEY=sua_service_role_key

# Cakto Integration
CAKTO_WEBHOOK_SECRET=seu_segredo_webhook_basico
CAKTO_WEBHOOK_SECRET_ADVANCED=seu_segredo_webhook_avancado
CAKTO_PRODUCT_ID=seu_id_produto
```

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

---

<div align="center">
  Desenvolvido com ❤️ pela equipe FoodVision
</div>
