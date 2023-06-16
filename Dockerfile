# Use a smaller base image, such as Alpine
FROM node:18-alpine

WORKDIR /app

# Copy only package.json to leverage Docker layer caching
COPY package*.json ./

# Install dependencies and generate package-lock.json
RUN npm install

# Copy the rest of the application code
COPY . .

EXPOSE 3000

ENTRYPOINT [ "node", "index.js" ]
