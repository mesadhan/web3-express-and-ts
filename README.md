# Web3 Express & TS Backend

- Implemented Node Express + TS with require configuration
- Added unit and integration test using jest, supertest
- Implemented custom decorated due to api annotation mapping
- Integrated Docker

# Docker Build Guide

```
docker build -t mesadhan/web3_app:1.0.0 .
docker run --name web3_app -dp  8080:7001 mesadhan/web3_app:1.0.0
```