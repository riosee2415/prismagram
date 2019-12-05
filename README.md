# prismagram

instagram clone with Express + Prisma + React and React Native

## DevOps

1. yarn add nodemon -D
2. yarn add @babel-cli -D
3. create src/server.js
4. create nodemon.json

```js
{
  "ext": "js graphql"
}
```

<pre>
    nodemon이 실행될 때, graphql을 extends하여 실행하도록 설정.
</pre>

5. yarn add dotenv
6. yarn add @babel/nodeb @babel/preset-env @babel/core
7. create .babelrc

```js
{
  "presets": ["@babel/preset-env"]
}

```

<pre>
    프로젝트가 babel을 인식할 수 있도록 설정.
</pre>

8. yarn add morgan

<pre>
    logger 전용 모듈 미들웨어
</pre>

## Graphql Settings... Install

- graphql-tools
- merge-graphql-schemas

## prisma setting
