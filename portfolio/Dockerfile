FROM node as deps
WORKDIR /ferdodo/portfolio

COPY package.json .
RUN npm install
RUN npm audit --audit-level=high
RUN npm outdated

FROM deps
COPY --from=design-system /ferdodo /ferdodo

COPY . .
RUN npm run build
CMD ["npm", "run", "start"]