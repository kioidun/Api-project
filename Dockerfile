FROM node:22-alpine3.20 as base

FROM base as deps
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
RUN npm i -g sequelize-cli


FROM base as runner
WORKDIR /usr/src/app
# Copy all project files
COPY . . 
CMD ["npm", "start"]