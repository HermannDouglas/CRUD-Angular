# Backend - Instruções para iniciar o Json Server

O Json Server é uma ferramenta que permite criar uma API REST fake rapidamente e com pouca configuração. Ele é útil para prototipagem, testes e desenvolvimento frontend, pois simula um servidor real e permite realizar operações CRUD (Create, Read, Update, Delete) em um arquivo JSON.

## Passos para configurar e iniciar o servidor

1. Clone o repositório do projeto:

   ```sh
   git clone https://github.com/HermannDouglas/CRUD-Angular
   ```

2. Navegue até o diretório do projeto:

   ```sh
   cd backend
   ```

3. Instale as dependências do projeto:

   ```sh
   npm install
   ```

4. Inicie o servidor Json:
   ```sh
   npm start
   ```

### Descrição dos comandos

- `git clone https://github.com/HermannDouglas/CRUD-Angular`: Este comando clona o repositório do projeto.
- `cd backend`: Este comando navega até o diretório do projeto backend.
- `npm install`: Este comando instala as dependências do projeto.
- `npm start`: Este comando inicia o Json Server e começa a servir os dados do arquivo `db.json` na porta 3001.

### Estrutura do Projeto

- `db.json`: Contém os dados que serão servidos pelo Json Server.
- `package.json`: Contém as configurações do projeto e os scripts para iniciar o servidor.

Após seguir esses passos, o servidor estará disponível em [http://localhost:3001](http://localhost:3001) e você poderá acessar os dados definidos no arquivo `db.json`.

# Frontend - Comandos do Angular

## Passos para configurar e iniciar o frontend

1. Clone o repositório do projeto:

   ```sh
   git clone https://github.com/HermannDouglas/CRUD-Angular
   ```

2. Navegue até o diretório do projeto:

   ```sh
   cd frontend
   ```

3. Instale as dependências do projeto:

   ```sh
   npm install
   ```

4. Inicie o servidor de desenvolvimento Angular:
   ```sh
   npm start
   ```

### Descrição dos comandos

- `git clone https://github.com/HermannDouglas/CRUD-Angular`: Este comando clona o repositório do projeto.
- `cd frontend`: Este comando navega até o diretório do projeto frontend.
- `npm install`: Este comando instala as dependências do projeto.
- `npm start`: Este comando inicia o servidor de desenvolvimento Angular.

### Estrutura do Projeto

- `src`: Contém o código-fonte do projeto Angular.
- `angular.json`: Contém as configurações do projeto Angular.
- `package.json`: Contém as configurações do projeto e os scripts para iniciar o servidor de desenvolvimento.

Após seguir esses passos, o servidor de desenvolvimento Angular estará disponível em [http://localhost:4200](http://localhost:4200).

### Funcionalidades do Frontend

- **Listagem de itens**: Exibe uma lista de itens obtidos do backend.
- **Criação de itens**: Permite adicionar novos itens à lista.
- **Edição de itens**: Permite editar itens existentes na lista.
- **Exclusão de itens**: Permite remover itens da lista.

### Tecnologias Utilizadas

- **Angular**: Framework para construção de aplicações web.
- **TypeScript**: Linguagem de programação utilizada no desenvolvimento do projeto.
- **HTML**: Linguagem de marcação utilizada para estruturar as páginas web.
- **CSS**: Linguagem de estilo utilizada para estilizar as páginas web.
