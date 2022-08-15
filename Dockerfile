FROM node:18-alpine3.15

RUN mkdir /home/app

COPY . /home/app

WORKDIR /home/app

RUN npm install -g npm@8.17.0
RUN npm install

CMD ["npm", "start"]