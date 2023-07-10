FROM node:16.14-alpine

WORKDIR /app-frontend

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4200

ENTRYPOINT [ "npm","run" ]
CMD [ "start" ]