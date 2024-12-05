# Projeto Typescript

- Este repositório contém a resolução dos exercícios de fixação com TypeScript.

- ## Objetivos

- Praticar a configuração do ambiente Node.js com TypeScript.
- Utilizar conceitos avançados de tipagem estática, como:
  - Interfaces.
  - Uniões de tipos.
  - Interseções de tipos.
- Resolver exercícios que simulam situações do mundo real para reforçar os conceitos aprendidos em aula.

## Estrutura do Projeto

- **`src/`**: Contém os arquivos TypeScript com os exercícios.
- **`dist/`**: Contém os arquivos JavaScript compilados.
- **`tsconfig.json`**: Configuração do TypeScript.
- **Dependências principais**:
  - `typescript`
  - `ts-node-dev`
  - `@types/node`

---

## Inicializar o Projeto Node.js

### **Crie um diretório para o projeto**
```bash

Crie um diretório para o projeto:
  mkdir meu-projeto-typescript
  cd meu-projeto-typescript

Inicialize o projeto com npm:
  npm init -y

Instalar o TypeScript e Dependências:
 npm install typescript ts-node-dev @types/node -D

Configurar o TypeScript:
 npx tsc --init

Edite o arquivo tsconfig.json para incluir as configurações básicas:

{
  "compilerOptions": {
    "target": "ES6",                      // Versão do JavaScript gerado
    "module": "commonjs",                 // Sistema de módulos
    "outDir": "./dist",                   // Pasta onde o JS compilado será salvo
    "rootDir": "./src",                   // Pasta onde estão os arquivos TS
    "strict": true,                       // Habilitar verificações estritas
    "esModuleInterop": true,              // Compatibilidade com CommonJS e ES Modules
    "skipLibCheck": true                  // Ignorar verificação de bibliotecas
  },
  "include": ["./src/**/*.ts"],                     // Apenas arquivos na pasta src
  "exclude": ["node_modules"]            // Ignorar a pasta node_modules
}

Estruturar o Projeto:
mkdir src

Crie um arquivo src/index.ts com um exemplo básico:
console.log("Projeto configurado com TypeScript!");

Configurar os Scripts no package.json:

"scripts": {
  "dev": "ts-node-dev --respawn --transpile-only src/index.ts",
  "build": "tsc",
  "start": "node dist/index.js"
}

dev: Executa o projeto em modo de desenvolvimento com ts-node-dev.
build: Compila os arquivos TypeScript para JavaScript.
start: Executa o JavaScript compilado na pasta dist.

Rodar o Projeto:

Execute o projeto em modo de desenvolvimento:
npm run dev
Você deve ver no console: Projeto configurado com TypeScript!

Compile o código TypeScript: 
npm run build

Execute o código compilado:
npm start
