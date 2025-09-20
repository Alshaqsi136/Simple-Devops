FROM node:22.18.0-alpine

WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev   # or npm install --production

COPY . .

EXPOSE 3001
CMD ["npm","start"]
