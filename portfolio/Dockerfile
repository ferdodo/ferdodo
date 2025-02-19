FROM ferdodo-design-system

FROM node
WORKDIR /ferdodo/portfolio

COPY package.json .
RUN npm install
RUN npm audit --audit-level=high

COPY --from=0 /ferdodo /ferdodo

COPY . .
RUN npm run build
CMD ["npm", "run", "start"]