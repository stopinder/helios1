# Use official Node.js LTS image
FROM node:20-alpine

# Set working directory inside container
WORKDIR /app

# Copy package.json and package-lock.json first
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all project files
COPY src .

# Build the app
RUN npm run build

# Install serve package to serve built files
RUN npm install -g serve

# Serve the built app
CMD ["serve", "-s", "dist", "-l", "3000"]
