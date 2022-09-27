# Example from: https://github.com/strapi/strapi-docker#how-to-use-strapibase

# FROM --platform=linux/amd64 strapi/base # Not using this because of weird npm dependency issue
FROM --platform=linux/amd64 node:16.15

WORKDIR /my-path

COPY ./package.json ./
COPY ./package-lock.json ./

RUN npm ci

COPY . .

ENV NODE_ENV production

RUN npm run build

EXPOSE 1337

CMD ["npm", "run", "start"]