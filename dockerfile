# Use a base image
FROM node:14.17.6

# Set the working directory inside the image
WORKDIR /app

# Copy package.json and package-lock.json to the image
COPY package.json package-lock.json /app/

# Install dependencies
RUN npm install

# Copy the rest of the application files to the image
COPY . /app/

# Build the React app
RUN npm run build

# Expose the desired port
EXPOSE 3000

# Set the command to run your application
CMD ["npm", "start"]
