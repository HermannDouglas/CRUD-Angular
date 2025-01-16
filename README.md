# Backend - Instruções para iniciar o Json Server
O Json Server é uma ferramenta que permite criar uma API REST fake rapidamente e com pouca configuração. Ele é útil para prototipagem, testes e desenvolvimento frontend, pois simula um servidor real e permite realizar operações CRUD (Create, Read, Update, Delete) em um arquivo JSON.

## Passos para configurar e iniciar o servidor

1. Inicialize um novo projeto Node.js:
    ```sh
    npm init -y
    ```

2. Instale o Json Server como dependência:
    ```sh
    npm i json-server
    ```

3. Inicie o servidor Json:
    ```sh
    npm start
    ```

### Descrição dos comandos

- `npm init -y`: Este comando cria um novo arquivo `package.json` com as configurações padrão.
- `npm i json-server`: Este comando instala o Json Server, que é uma ferramenta para criar uma API REST fake rapidamente.
- `npm start`: Este comando inicia o Json Server e começa a servir os dados do arquivo `db.json` na porta 3001.

### Estrutura do Projeto

- `db.json`: Contém os dados que serão servidos pelo Json Server.
- `package.json`: Contém as configurações do projeto e os scripts para iniciar o servidor.

Após seguir esses passos, o servidor estará disponível em [http://localhost:3001](http://localhost:3001) e você poderá acessar os dados definidos no arquivo `db.json`.

# Frontend - Comandos do Angular

1. Instale o Angular CLI globalmente:
    ```sh
    npm i -g @angular/cli
    ```

2. Crie um novo projeto Angular:
    ```sh
    ng new frontend --minimal
    ng new frontend --no-standalone --routing --ssr=false
    ```

3. Inicie o servidor de desenvolvimento Angular:
    ```sh
    npm start
    ```