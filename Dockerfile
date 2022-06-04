FROM node:16 


WORKDIR /pfe/backend

COPY package*.json ./


RUN npm install

COPY . .

RUN npm run build 

EXPOSE 4000

CMD [ "node", "app.js" ]

