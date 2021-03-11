FROM node:14

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY ./package*.json ./

USER node

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

COPY . .

COPY --chown=node:node . .

EXPOSE 3025

CMD ["npm", "start"]