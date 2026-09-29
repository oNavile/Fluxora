# Fluxora

Fluxora é um projeto frontend desenvolvido em Next.js para simular um sistema SaaS de controle de matéria-prima para indústrias.

O projeto possui duas partes principais:

- Home pública para apresentação da plataforma.
- Demonstração interativa do sistema de estoque.

## Tecnologias utilizadas

- Next.js
- JavaScript
- Tailwind CSS
- shadcn/ui
- Recharts
- Lucide React

## Funcionalidades

### Home

- Hero com apresentação da Fluxora
- Seção de recursos
- Prévia do dashboard
- Formulário fictício de contato
- Navegação para a demonstração
- Layout responsivo
- Animações e efeitos de interação

### Demonstração

- Indicadores de estoque
- Lista de materiais
- Busca por nome ou código
- Filtro por categoria
- Filtro por situação
- Cadastro de novos materiais
- Entrada e saída de estoque
- Validação de movimentações
- Gráficos por categoria e situação do estoque
- Atualização automática dos indicadores e gráficos

## Dados

O projeto utiliza dados fictícios armazenados em um arquivo JSON.

Não possui backend, banco de dados ou integração com APIs.

## Rotas

```text
/       Home da Fluxora
/demo   Demonstração do sistema
```

## Como executar

Instale as dependências:

```bash
npm install
```

Execute o projeto:

```bash
npm run dev
```

Depois acesse:

```text
http://localhost:3000
```

## Objetivo

O objetivo do projeto é apresentar uma solução visual e interativa para acompanhamento de matérias-primas, identificação de estoques críticos e visualização de indicadores industriais.

## Observação

Este projeto foi desenvolvido para fins educacionais e utiliza apenas dados fictícios.