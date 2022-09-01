# syntax=docker/dockerfile:1
FROM node:16.10.0-alpine
#FROM node:lts

WORKDIR /opt/app

ADD build .
ADD public .
ADD package.json .
ADD .env.prod/ .env
RUN mkdir uploads
RUN ls -la


RUN yarn install
#RUN yarn install --production

# application runing port mapping
EXPOSE 7001
CMD ["node", "src/Server.js"]



# Build JavaScript from TypeScript
#RUN NODE_OPTIONS=--max-old-space-size=8192 yarn build
#CMD [ "node", "-r", "tsconfig-paths/register", "src/app.js" ]