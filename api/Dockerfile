FROM node:15.13.0

ENV PORT=3000

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . . 

EXPOSE $PORT

CMD ["npm", "run", "start"]
