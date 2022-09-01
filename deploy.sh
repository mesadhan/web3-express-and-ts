echo "******** Run all the test cases ********"
yarn test


echo "\n******** build this application for production  ********"
yarn build



# Cleanup old container & image
echo "\n******** Cleanup old container & image ********"
docker rm -vf $(docker ps -a | grep 'web3_app:1.0.0') 2>/dev/null || echo "No more containers to remove."
docker rmi $(docker images -q 'mesadhan/web3_app:*') 2>/dev/null || echo "No more images to remove."


#Build and run app
docker scan --accept-license --version
echo "\n******** build and run app ********"
docker build -t mesadhan/web3_app:1.0.0 .
docker run --name web3_app -dp  8080:7001 mesadhan/web3_app:1.0.0

echo "\nOpen In Browser: http://localhost:8080/"
echo "Build & Run Finished"