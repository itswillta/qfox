FROM node:11-alpine

RUN mkdir -p /opt/app
WORKDIR /opt/app

ENV PATH /opt/app/node_modules/.bin:$PATH

COPY . .

CMD ["npm", "run", "dev"]