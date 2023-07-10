FROM node:16.14-alpine


RUN mkdir -p /app-backend && chown -R node:node /app-backend

USER node

WORKDIR /app-backend

COPY --chown=node:node package*.json ./

RUN npm install

COPY --chown=node:node . .

EXPOSE 3001

ENTRYPOINT ["npm", "run"]
CMD ["dev"]