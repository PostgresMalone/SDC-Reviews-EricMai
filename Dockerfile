FROM node:7.6-alpine

RUN mkdir -p /src/app

WORKDIR /src/app

COPY . /src/app

RUN yarn install

RUN yarn global add nodemon

EXPOSE 8000

CMD [ "npm", "run", "docker" ]