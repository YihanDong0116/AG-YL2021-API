FROM node:15.14.0

ENV PORT=3001

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . . 

EXPOSE $PORT

CMD ["npm", "run", "start"]
