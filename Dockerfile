FROM node:18-alpine3.15

RUN mkdir /home/app

COPY . /home/app

WORKDIR /home/app

RUN npm i

CMD ["npm", "start"]