docker build -t web3_app .
docker run -d -it -p 7000:8080 --name=app1 web3_app
