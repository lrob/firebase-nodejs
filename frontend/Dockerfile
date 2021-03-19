FROM node:15.9.0


RUN mkdir -p /app
WORKDIR /app

RUN npm install -g create-react-app
RUN create-react-app frontend
WORKDIR /app/frontend/
RUN npm install firebase react-router-dom react-router

ADD  src /app/frontend/src

ENTRYPOINT [ "npm", "start" ]