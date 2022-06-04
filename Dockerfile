FROM node:16 as builder

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci --silent

RUN npm install

COPY . .

RUN npm run build 

EXPOSE 4000

CMD [ "node", "app.js" ]
