FROM node:20-alpine

WORKDIR /app

ENV NODE_ENV production

COPY package.json package-lock.json ./

RUN npm ci

ADD src src

COPY eslint.config.mjs next-env.d.ts next.config.ts tsconfig.json .prettierrc.js ./

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]

