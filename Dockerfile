# Stage 1: Build the app
FROM node:20-alpine AS builder

WORKDIR /app

# Copy deps and config files
COPY package.json package-lock.json vite.config.js postcss.config.cjs tailwind.config.js ./

# Install dependencies
RUN npm install

# Copy source files
COPY . .

# Build the app
RUN npm run build

# Stage 2: Serve with nginx
FROM nginx:alpine

# Copy built files to nginx public dir
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]



