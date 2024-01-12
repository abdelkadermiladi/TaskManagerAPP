# Use an official Node runtime as a base image
FROM node:16.1.0-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install Angular CLI
RUN npm install -g @angular/cli

# Install dependencies
RUN npm install

# Copy the application files to the container
COPY . .

# Build the Angular app
CMD ["ng", "build"]

# Expose the port the app will run on
EXPOSE 4200
