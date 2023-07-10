FROM node:16.14-alpine

RUN mkdir -p /app-backend && chown -R node:node /app-backend

USER node

WORKDIR /app-frontend

COPY --chown=node:node package*.json ./

RUN npm install -g @angular/cli

RUN npm install

COPY --chown=node:node . .

ENTRYPOINT [ "npm","run" ]
CMD [ "start" ]