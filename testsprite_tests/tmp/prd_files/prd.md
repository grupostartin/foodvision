# Documento de Requisitos do Produto (PRD) - FoodVision

## 1. Visão Geral do Produto

### 1.1. Introdução
O **FoodVision** é uma plataforma de soluções de marketing digital focada exclusivamente no setor alimentício. O produto combina uma Landing Page de alta conversão para venda de serviços de fotografia e consultoria com um Dashboard administrativo e do cliente para entrega e gestão desses ativos digitais.

### 1.2. Objetivo
Facilitar o acesso de restaurantes e empresas de alimentação a serviços profissionais de marketing visual (fotografia, styling, design), automatizando o processo de venda e entrega de arquivos através de uma plataforma centralizada.

### 1.3. Público-Alvo
*   Proprietários de restaurantes, lanchonetes e dark kitchens.
*   Gestores de franquias de alimentação.
*   Empreendedores do ramo alimentício que vendem via iFood/Rappi.

## 2. Escopo do Projeto

### 2.1. O que está no escopo
*   **Landing Page Institucional:** Apresentação dos serviços, planos e prova social.
*   **Sistema de Autenticação:** Cadastro e login de usuários (clientes e administradores).
*   **Integração de Pagamentos:** Checkout via Cakto para contratação de planos.
*   **Dashboard do Cliente:** Área para o cliente visualizar seu plano e baixar arquivos entregues.
*   **Dashboard Administrativo:** Área para a equipe FoodVision gerenciar clientes e fazer upload dos arquivos contratados.
*   **Armazenamento em Nuvem:** Upload e download seguro de arquivos via Supabase Storage.

### 2.2. Fora do escopo (nesta versão)
*   Sistema de agendamento automático de fotógrafos.
*   Chat em tempo real entre cliente e fotógrafo.
*   Edição de fotos dentro da plataforma.
*   App móvel nativo (será uma aplicação web responsiva).

## 3. Funcionalidades Detalhadas

### 3.1. Landing Page & Vendas
*   **Seção Hero:** Proposta de valor clara e CTA (Call to Action) principal.
*   **Planos e Preços:**
    *   **Básico (R$ 97,00):** 10 fotos profissionais, edição básica, entrega em 72h.
    *   **Avançado (R$ 247,00):** 30 fotos, food styling, capa premium, entrega em 48h (Plano destaque).
    *   **Franquia (Sob Consulta):** Soluções personalizadas para múltiplas unidades.
*   **Fluxo de Contratação:**
    *   Usuário seleciona o plano.
    *   Se não logado: Abre modal de Login/Cadastro.
    *   Após login: Redireciona para o checkout da Cakto com o e-mail do usuário pré-preenchido.

### 3.2. Autenticação (Supabase Auth)
*   **Login:** E-mail e senha.
*   **Cadastro:** Criação de conta simplificada.
*   **Proteção de Rotas:** Redirecionamento automático de usuários não autenticados que tentam acessar o Dashboard.
*   **Recuperação de Senha:** (Funcionalidade nativa do Supabase).

### 3.3. Dashboard do Cliente
*   **Visão Geral:** Exibição do plano contratado e status da assinatura (Ativo/Inativo).
*   **Meus Arquivos:**
    *   Listagem de arquivos disponibilizados pela equipe (fotos, relatórios).
    *   Visualização de detalhes (nome, data, tamanho).
    *   Botão de download direto.
*   **Ajuda:** Informações sobre prazos e canal de suporte.

### 3.4. Dashboard Administrativo (Backoffice)
*   **Controle de Acesso:** Apenas usuários com flag de administrador podem acessar.
*   **Gestão de Clientes:**
    *   Listagem de todos os usuários cadastrados.
    *   Busca por nome ou e-mail.
*   **Gestão de Arquivos:**
    *   Seleção de um cliente específico.
    *   Upload de arquivos (fotos, PDFs) para a pasta do cliente.
    *   Exclusão de arquivos incorretos.
    *   Listagem dos arquivos já enviados para o cliente selecionado.

## 4. Requisitos Não Funcionais

### 4.1. Performance
*   Carregamento da Landing Page otimizado (imagens comprimidas, lazy loading).
*   Animações fluidas utilizando Framer Motion.

### 4.2. Segurança
*   Dados sensíveis protegidos via Supabase Auth.
*   Políticas de segurança (RLS - Row Level Security) no banco de dados e Storage para garantir que um cliente não acesse arquivos de outro.

### 4.3. Usabilidade
*   Interface responsiva (Mobile-first) utilizando Tailwind CSS.
*   Feedback visual para ações do usuário (loading states, mensagens de sucesso/erro).

## 5. Arquitetura e Tecnologia

### 5.1. Frontend
*   **Framework:** React (v19) com Vite.
*   **Linguagem:** TypeScript.
*   **Estilização:** Tailwind CSS.
*   **Ícones:** Lucide React.
*   **Animações:** Framer Motion.

### 5.2. Backend & Infraestrutura
*   **BaaS (Backend as a Service):** Supabase.
    *   **Database:** PostgreSQL (Tabela `profiles` para dados de usuários).
    *   **Auth:** Gerenciamento de sessões e usuários.
    *   **Storage:** Bucket `client_files` para armazenamento de entregáveis.

### 5.3. Integrações Externas
*   **Cakto:** Gateway de pagamento para processamento de assinaturas/compras pontuais.

## 6. Fluxos de Usuário Principais

### 6.1. Fluxo de Compra
1.  Usuário acessa a Landing Page.
2.  Clica em "Comprar Agora" no plano desejado.
3.  Sistema solicita Login ou Cadastro.
4.  Após autenticação, usuário é redirecionado para o Checkout da Cakto.
5.  Após pagamento, usuário recebe acesso (processo manual ou via webhook futuro).

### 6.2. Fluxo de Entrega (Admin -> Cliente)
1.  Admin acessa o Dashboard Administrativo.
2.  Busca e seleciona o cliente que realizou a compra.
3.  Faz o upload das fotos/arquivos contratados.
4.  Cliente acessa seu Dashboard e visualiza os novos arquivos disponíveis para download.
