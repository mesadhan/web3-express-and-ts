# base for our image, based on buildpack-deps, based on Debian Linux
FROM node:lts

# Create app directory
WORKDIR /opt/backend

# COPY BUILD FILES
COPY build/ build/
RUN ls -la /files/*



# Install app dependencies
COPY package.json ./
COPY .env.prod ./.env
#COPY yarn.lock ./
RUN yarn install

# Build JavaScript from TypeScript

RUN NODE_OPTIONS=--max-old-space-size=8192 yarn build

# Tell docker which port will be used (not published)
EXPOSE 7000

# Default env file
CMD [ "node", "-r", "tsconfig-paths/register", "bin/app.js" ]