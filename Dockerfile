FROM node:16 as builder


WORKDIR /pfe/backend

COPY package*.json ./


RUN npm install

COPY . .

ENV CONNECTION_URL = mongodb+srv://hosni:pfe2022@cluster0.w4g2j.mongodb.net/devops?retryWrites=true&w=majority:4000


RUN npm run build 

EXPOSE 4000

CMD [ "node", "app.js" ]


