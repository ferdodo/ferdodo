FROM node
WORKDIR /ferdodo/design-system
COPY package.json .
RUN npm config set maxsockets 1
RUN npm install
RUN npm audit --audit-level=high
COPY . .
RUN npm run build
CMD ["npm", "run", "start"]