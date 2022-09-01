# Web3 Express & TS Backend

- Implemented Node Express + TS with require configuration
- Added unit and integration test using jest, supertest
- Implemented custom decorated due to api annotation mapping
- Integrated Custom Logger
- Integrated Docker build script

# Run & Development and Test

```
yarn install
yarn start
yarn test
```

# Docker Build Guide

Automation, just run this `deploy.sh` command  


Manually Build Guide

```
docker build -t mesadhan/web3_app:1.0.0 .
docker run --name web3_app -dp  8080:7001 mesadhan/web3_app:1.0.0
```