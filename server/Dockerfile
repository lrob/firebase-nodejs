FROM node:15.9.0


RUN mkdir -p /app
WORKDIR /app

# Install packages for creatin server
RUN npm init -y
RUN npm install express cors
RUN npm install -D nodemon

# Unstall package to modify json files
RUN npm install -g json

# change app name and add start script to package.json file
RUN json -I -f package.json -e "this.name='firebase-auth-server'"
RUN json -I -f package.json -e "this.scripts.start='nodemon index.js'"

RUN npm install firebase-admin


ADD src /app

#ENTRYPOINT [ "sleep", "infinity" ]
ENTRYPOINT ["npm","run","start"]