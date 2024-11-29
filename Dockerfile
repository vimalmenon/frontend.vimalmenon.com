FROM node:20-alpine

COPY package.json package.json

COPY package-lock.json package-lock.json

RUN npm ci

COPY public public

COPY src src

COPY eslint.config.mjs next-env.d.ts next.config.ts tsconfig.json .prettierrc.js ./

RUN npm run build

