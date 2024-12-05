FROM node:20.18.1

WORKDIR /usr/src/app

COPY package*.json ./

COPY . . 

RUN npm install

CMD [ "node", "server.mjs"]

