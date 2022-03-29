# GO REST.CO
Aplicação feita em NodeJS e axios que consome uma API Externa manipulando a base de dados do site https://gorest.co.in/.

# Gerenciador de Pacotes
Necessário ter o nodeJs instalado na sua máquina.
O gerenciador de pacotes utilizado na aplicação foi o yarn, para utiliza-lo basta entrar no terminal do seu computador e instala-lo através do npm

$ npm install yarn -G 
(Ou se preferir, instalar ele localmente sem a flag global -G)

após isso executar o comando:

$yarn init

# Dependências de desenvolvimento 
Na aplicação, foram utilizados o nodemon e o eslint como dependências de desenvolvimento.
Bastar acessar o terminal integrado do editor de texto, ou o terminal da maquina no diretório do projeto e executar os comandos:

$yarn add nodemon -D

$yarn add eslint -D 

(A flag -D indica que a dependência é uma dependência de desenvolvimento, que não irá subir para o código em produção evitando assim gastos de memória indesejados)

# Configuração das dependências de desenvolvimento
A configuração feita no nodemon foi no arquivo package.json criando um npm script, adicionar:

"scripts": {
    "dev": "npx nodemon src/index.js"
},

Para no terminal pode digitar apenas o comando yarn dev e executa-lo como npx nodemon src/index.js

No Eslint, para configura-lo basta executar:

$yarn eslint --init 

Após isso, será feita algumas perguntas no terminal em que você pode responde-las seguindo a matriz do projeto
How would you like to use ESLint? ...   To check syntax, find problems, and enforce code style
What type of modules does your project use? ... CommonJS (require/exports)
Which framework does your project use? ... None of these
Does your project use TypeScript? No
Where does your code run? ... Node
What format do you want your config file to be in? ... Javascript
O popular Guide utilizado foi o do Airbnb...

Por fim, alterei algumas regras no arquivo .eslintrc.js:

rules: {
    'linebreak-style': 'off',
    'import/prefer-default-export': 'off',
    'quote-props': 'off',
  },
  
# Frameworks utilizados
Foram utilizados no projeto o Axios para realizar as requisições da API e o Dotenv Para trabalhar com as variáveis de ambiente.

Para acessa-los basta executar no terminal:

$yarn add axios

$yarn add dotenv

# Manipulando as variáveis de ambiente
Na pasta src do projeto existe um arquivo .env, nele está configurada a variável de ambiente que é o token de acesso as requisiçoes POST e DELETE da API
que é enviada no header da requisição que ela é solicitada.

Como o token é gerado a partir do usuário logado no site https://gorest.co.in/

Para acessar as funcionalidades da aplicação basta alterar a variável de ambiente para o token gerado a partir do seu usuário no site.
