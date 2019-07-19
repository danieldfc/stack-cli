# Stack CLI
<br>
<h3 align="center">
Pacote para automatização de projetos usando Node.Js, ReactJs e React Native! 🚀
</h3>
<div><br />

[![npm](https://img.shields.io/badge/npm-v6.9.0-brightgreen.svg)](https://www.npmjs.com/package/stack-nr)
<p>Versão Atual: v0.0.1</p>
</div>

<hr />

## Visão global

<p>Este é um pacote para melhor produtividade em node.js, react e react-native, infelizmente só foi criado a arquitetura para nodejs usando o sequelize, você poderá contribuir conosco como quiser, além do mais, quem ai num gosta de uma ferramenta para automatização??
Mas antes de contribuir, tenho que te falar sobre este pacote, como pode ser instalado, que ferramentas foram usadas, enfim, tudo que você tem o direito de saber.</p>

[Stack - npm](https://www.npmjs.com/package/stack-nr)

<hr />

## Tabela de conteúdo

- [ferramentas](#ferramentas)
- [Comandos](#comandos)
  - [node](#node)
  - [react](#react)
- [Contribuição](#contribuição)
- [Contato](#contato)
- [Licença](#licença)

<hr />

## Ferramentas

  - [Gluegun](https://www.npmjs.com/package/gluegun) - [Github](https://github.com/infinitered/gluegun/tree/master/docs)

<hr />

## Comandos

Estes comandos serão aprimorados com o tempo e é preciso que você nos dê a sua sugestão. ッ

**Aqui é onde a mágica acontece 😍**

Antes de criar o projeto e sair codando, é preciso instalar essa ferramenta em sua máquina, execute:

- NPM
````shell
$ npm install -g stack-nr
````

- YARN
````shell
$ yarn global add stack-nr
````

Espera-se terminar a execução e a partir de agora você está pronto para prosseguir com os próximos passos.

### **Node**

Para executar a lib, foi disponibilizado alguns comandos:

````shell
$  stack-nr node --db=sequelize --dialect=postgres
````

````shell
$  stack-nr node --db=sequelize --dialect=postgres
````
Para a flag **--db**, você poderá usar o banco de dados, dentre eles estão:

- sequelize

Já para o **--dialect** pode ser usado o tipo de dialeto, dentre eles estão:

- mysql
- postgres
- mariadb
- sqlite
- mssql

Depois que executar, é preciso você saber a estrutura de pastas criadas:

````
src
┣ app
┃   ┣ controllers
┃   ┃ ┗ UserController.js
┃   ┣ middlewares
┃   ┃ ┗ auth.js
┃   ┗ models
┃     ┗ User.js
┣ config
┃   ┣ auth.js
┃   ┗ database.js
┗ database
     ┗ index.js
````

Aqui você precisará entender como funciona o fluxo, porque este é o seu ponto de partida para começar a programar em Nodejs.

<hr />


### **React**

````
Ainda em desenvolvimento.
````

<hr />

## Contribuição

Contribuições são o que fazem a comunidade open source um lugar incrível para aprender, inspirar e criar. Qualquer contribuição que você fizer será **muito apreciada**.

1. Faça um Fork do projeto
2. Crie uma Branch para sua Feature (`git checkout -b feature/FeatureIncrivel`)
3. Adicione suas mudanças (`git add .`)
4. Comite suas mudanças (`git commit -m 'Adicionando uma Feature incrível!`)
5. Faça o Push da Branch (`git push origin feature/FeatureIncrivel`)
6. Abra uma Pull Request

<!-- CONTACT -->

# Contato

Daniel Felizardo - [Github](https://github.com/danielfelizardo2017) - **daniel.david772@gmail.com**

# Licença

MIT - see LICENSE