# syntax=docker/dockerfile:1

# Comments are provided throughout this file to help you get started.
# If you need more help, visit the Dockerfile reference guide at
# https://docs.docker.com/go/dockerfile-reference/

# Want to help us make this template better? Share your feedback here: https://forms.gle/ybq9Krt8jtBL3iCk7
FROM node:24.14.0-alpine
WORKDIR /emanbot
COPY package*.json ./

# Force install EVERYTHING (including typescript/tsc)
RUN npm install
# Copy the rest of the source files into the image.
COPY . .
RUN npm run build

RUN if [ ! -d /emanbot-config ]; then \
      mkdir -p /emanbot-config && echo "Created missing /emanbot-config folder"; \
    fi

RUN if [ ! -f /emanbot-config/discord_token.txt ]; then \
      echo "XXX" > /emanbot-config/discord_token.txt && echo "Created missing discord token text file, need to update with correct token"; \
    else \
      echo "Discord token text file found!"; \
    fi
RUN if [ ! -f /emanbot-config/giphy_token.txt ]; then \
      echo "XXX" > /emanbot-config/giphy_token.txt  && echo "Created missing giphy token text file, need to update with correct token"; \
    else \
      echo "Giphy token text file found!"; \
    fi


RUN [ -f /emanbot-config/config.json ] echo "Existing config found!" || echo <<EOF > /emanbot-config/config.json
{
  "USERS": "XXX",
  "PHRASES": "healing",
  "GAS_BOT": "XXX"
}
EOF

RUN chown -R node:node /emanbot-config
# Use production node environment by default.
ENV NODE_ENV production
# Run the application as a non-root user.
USER node

# Run the application.
CMD npm start
