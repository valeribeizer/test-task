FROM node:16.8.0-buster 

WORKDIR /test-task

ENV PATH /test-task/node_modules/.bin:$PATH

COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm install

COPY . .

CMD ["npm", "run", "start"]

