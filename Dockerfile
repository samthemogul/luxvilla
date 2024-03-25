FROM node:21-alpine

# Copying the package.json file
COPY package.json /src/
# Copying the source code
COPY . . /src/

# Setting the working directory
WORKDIR /src

# Installing the dependencies
RUN npm install
# Exposing the port
EXPOSE 3000
# Running the application
CMD ["npm", "run", "dev"]
