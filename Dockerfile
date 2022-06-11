FROM node:12
COPY package*.json ./

RUN npm install
COPY . .

EXPOSE 6001
CMD [ "node", "index.js" ]