FROM node:latest


WORKDIR /usr/src/app


COPY package*.json ./

RUN npm install
RUN npm install glob rimraf

COPY . .

EXPOSE 3001
CMD [ "node", "app.js" ]