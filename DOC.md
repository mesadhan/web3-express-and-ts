# Initiate Node Express Project

```shell
yarn init
yarn add @types/node typescript
yarn add -D ts-node
yarn tsc --init --rootDir src --outDir ./bin --esModuleInterop --lib ES2019 --module commonjs --noImplicitAny true
mkdir -p src
echo "console.log('Hello World\!\!\!')" > src/app.ts
```

```json
{
  ...
  "scripts": {
    "build": "tsc",
    "start": "node ./bin/app.js",
    "dev": "ts-node ./src/app.ts"
  }
}
```

    yarn add express @types/express


# Docker Build Guide

```
docker build -t mesadhan/web3_app:1.0.0 .
docker run -dp 8080:7001 mesadhan/web3_app:1.0.0
```

- https://d0whc3r.github.io/typescript-rest/
- https://rsbh.dev/blog/rest-api-express-typescript-jest-testing