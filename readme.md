<p
  align="center"
  style="font-size: 40px;
  margin-bottom: 0;
  font-weight: 600;
  font-family: Arial, Helvetica, sans-serif"
>
  Stack CLI
<p>
<hr />

<h3 align="center">
Pacote para automatização de projetos usando Node.Js, ReactJs e React Native! 🚀
</h3>
<div>

[![npm](https://img.shields.io/badge/npm-v6.9.0-brightgreen.svg)](https://www.npmjs.com/package/stack-nr)
<p>Versão Atual: v0.0.1</p>
</div>

## Visão global

<p>Este é um pacote para melhor produtividade em node.js, react e react-native, infelizmente só foi criado a arquitetura para nodejs usando o sequelize, você poderá contribuir conosco como quiser, além do mais, quem ai num gosta de uma ferramenta para automatização??
Mas antes de contribuir, tenho que te falar sobre este pacote, como pode ser instalado, que ferramentas foram usadas, enfim, tudo que você tem o direito de saber.</p>

## Tabela de conteúdo

- [ferramentas](#ferramentas)
- [Comandos](#comandos)
  - [node](#node)
  - [react](#react)
- [Contribuição](#contribuição)
- [Contato](#contato)
- [Licença](#licença)

## Ferramentas

  - [Gluegun](https://www.npmjs.com/package/gluegun) - [Github](https://github.com/infinitered/gluegun/tree/master/docs)

## Comandos

Estes comandos serão aprimorados com o tempo e é preciso que você nos dê a sua sugestão. ッ
Aqui é onde a mágica acontece 😍

## Node

Para começar com o node, é preciso você saber a estrutura de pastas criadas:

````
stack 
┃ ┗ src
┃     ┣ app
┃     ┃   ┣ controllers
┃     ┃   ┃ ┗ UserController.js
┃     ┃   ┣ middlewares
┃     ┃   ┃ ┗ auth.js
┃     ┃   ┗ models
┃     ┃      ┗ User.js
┃     ┣ config
┃     ┃   ┣ auth.js
┃     ┃   ┗ database.js
┃     ┣ database
┃     ┃   ┗ index.js

````

Para executar a lib, foi disponibilizado alguns comandos:

````shell
$  stack node --db=sequelize --dialect=postgres
````
Para a flag **--db**, você poderá usar o banco de dados, dentre eles estão:

- sequelize

Já para o **--dialect** pode ser usado o tipo de dialeto, dentre eles estão:

- mysql
- postgres
- mariadb
- sqlite
- mssql

### React

````
Ainda em produção.
````

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