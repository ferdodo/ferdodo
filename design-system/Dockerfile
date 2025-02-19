FROM node
WORKDIR /ferdodo/design-system
COPY package.json .
RUN npm install
RUN npm audit --audit-level=high
COPY . .
RUN npm run build
CMD ["npm", "run", "start"]