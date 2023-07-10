FROM node:16.14-alpine

WORKDIR /app-frontend

COPY package*.json .

RUN npm install -g @angular/cli

RUN npm install

COPY . .