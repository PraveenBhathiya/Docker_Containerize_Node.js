#get the base image
FROM node:20-alpine

#set the working dir
WORKDIR /app

#copy th epackage.json files
COPY package*.json ./

#install the dependencies
RUN npm install

#copy the source code
COPY . .

#expose the port
EXPOSE 5000


#start the app
CMD [ "npm", "start"]