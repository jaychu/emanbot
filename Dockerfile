# syntax=docker/dockerfile:1

# Comments are provided throughout this file to help you get started.
# If you need more help, visit the Dockerfile reference guide at
# https://docs.docker.com/go/dockerfile-reference/

# Want to help us make this template better? Share your feedback here: https://forms.gle/ybq9Krt8jtBL3iCk7
FROM node:24.14.0-alpine
WORKDIR /usr/src/app
COPY package*.json ./

# Force install EVERYTHING (including typescript/tsc)
RUN npm install
# Copy the rest of the source files into the image.
COPY . .
RUN npm run build
# Run the application as a non-root user.
USER node
# Use production node environment by default.
ENV NODE_ENV production

# Run the application.
CMD npm start
