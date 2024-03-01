FROM node:18

WORKDIR /youtube_backend
COPY package*.json .
RUN npm install

COPY . .


CMD npm start