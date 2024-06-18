# Use the official Node.js LTS (Long Term Support) image as the base image
FROM node:20.13-alpine

# Set the working directory inside the Docker container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the entire project directory to the working directory
COPY . .

# Build the Nuxt 3 project
RUN npm run build

# Expose the desired port (default is 3000)
EXPOSE 3000

# Specify the command to run the Nuxt server
CMD ["npm", "run", "preview"]
