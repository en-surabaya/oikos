FROM node:16 AS development

WORKDIR /usr/src/app

COPY . .

RUN rm -rf node_modules

RUN npm install glob rimraf

RUN npm install --unsafe-perm=true --allow-root --only=development

RUN npm run build

RUN chmod 777 /usr/src/app/node_modules/.cache/.eslintcache

FROM node:16 AS production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=production

COPY . .

COPY --from=development /usr/src/app/dist ./dist

CMD ["node", "dist/main"]