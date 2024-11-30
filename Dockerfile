FROM node:20-alpine

COPY package.json package-lock.json ./

RUN npm ci

ADD src src

ADD out out

ADD public public

COPY eslint.config.mjs next-env.d.ts next.config.ts tsconfig.json .prettierrc.js ./

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]

