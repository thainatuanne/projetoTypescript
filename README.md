# Projeto Typescript

- Este repositório contém a resolução dos exercícios de fixação com TypeScript, aulas e atividades realizadas em aula.

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
```

#### Durante o desenvolvimento deste projeto, foi identificado que o uso da flag `--transpile-only` no script de execução (`dev`) permitia que o TypeScript ignorasse a verificação de tipos. Isso causava comportamentos inesperados, como a possibilidade de acessar propriedades privadas de classes, violando os princípios de encapsulamento.

#### O Problema

O comando original para iniciar o projeto era o seguinte:

```json
"dev": "ts-node-dev --respawn --transpile-only src/index.ts"
```

Embora essa configuração agilize o desenvolvimento ao ignorar verificações de tipo, ela compromete a segurança e a integridade do código, permitindo ações que deveriam ser bloqueadas, como acessar membros privados de uma classe.

#### A Solução

Para resolver o problema, foi necessário remover a flag `--transpile-only` do script de execução, garantindo que o TypeScript faça a verificação completa antes de executar o código. A configuração atualizada ficou assim:

```json
"dev": "ts-node-dev --respawn src/index.ts"
```

#### Resultado

Com essa alteração, o TypeScript agora verifica todas as regras de tipo e impede acessos indevidos a propriedades privadas ou qualquer outra violação de encapsulamento. Essa configuração melhora a segurança do código e evita problemas em ambiente de produção.

#### Verificando Tipos Manualmente

Adicionalmente, foi adicionado um script para verificação manual de tipos, útil durante o desenvolvimento:

```json
"type-check": "tsc --noEmit"
```

Esse comando pode ser executado com:

```bash
npm run type-check
```

Ele verifica o código sem transpilar, garantindo que não há erros antes de iniciar o servidor.

Link: https://thin-board-3ae.notion.site/Configura-o-do-TS-no-Node-1522e1808a1b806daa3afaf4a1c9488f

---
