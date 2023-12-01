FROM node:20.10.0

WORKDIR /aquarium_parameters_tester

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]