FROM node

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 9595

CMD [ "node", "Server.js" ]