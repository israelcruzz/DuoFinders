## **DuoFinders**

<img src="https://github.com/israelcruzz/DuoFinders/blob/main/%40duofinders-thumb.png" width="100%" />

**Descrição:**

Este projeto desenvolve uma plataforma web e mobile que conecta jogadores em busca de parceiros para partidas online. A plataforma oferece recursos para encontrar jogadores com base em preferências de jogo, nível de habilidade, disponibilidade e outros critérios.

**Funcionalidades:**

* **Autenticação com Discord:**
    * Os usuários podem se conectar à plataforma usando suas contas Discord, facilitando o processo de registro e login.
    * A plataforma utiliza o Discord OAuth2 para autenticar os usuários de forma segura.

* **Sistema de busca avançada:**
    * Os jogadores podem encontrar parceiros com base em anúncios que contém dados que podem ser semelhantes ao seu é se forem, você tera a opção de adicionar a pessoa pelo discord.


**Tecnologias Utilizadas:**

**Back-end:**

* **Framework:** Fastify
* **Linguagem de programação:** Node.js
* **Banco de dados:** Prisma (SQLite)
* **Arquitetura:** Clean Architecture
* **Testes:**
    * Unitários: Jest
    * E2E: Cypress
* **Controle de acesso:** RBAC
* **Autenticação:** JWT e Refresh Token
* **Desenvolvimento orientado a testes (TDD):** Sim

**Front-end:**

* **Autenticação:** Next Auth com Discord
* **Bibliotecas:** Next.js, Tailwind CSS
* **Testes:** Cypress
* **Plataformas:**
    * Web: Next.js
    * Mobile: React Native com Expo

**Linguagem:**

* TypeScript em todo o projeto

**Requisitos de Instalação:**

1. Clonar o repositório do projeto.
2. Instalar as dependências do projeto usando os comandos `npm install` e `yarn install`.
3. Configurar o banco de dados SQLite com as credenciais de acesso.
4. Iniciar os servidores do back-end e front-end usando os comandos `npm run dev` e `yarn start`.


**Licença:**

Este projeto está licenciado sob a licença MIT.
