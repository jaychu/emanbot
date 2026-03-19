# Emanbot
Emanbot is a discord bot that reacts to everyone's messages given certain keywords, if specific users message, or responds to the Gasbot positively or negatively depending on the reaction to the gas prices.

## Docker ARGS

| ARG           | Description   |
| ------------- |:-------------:|
| Users         | The user who sends a message will always gets reacted    |
| Phrases       | Any user who uses any of these phrases will get reacted  |
| Gasbot        | The id of the Gasbot                                     |

## Secrets
You will need to create a secrets folder within the parent level of the app to mount the token

| API Key       | File Name          |
| ------------- |:------------------:|
| Discord       | discord_token.txt  |
| Giphy         | giphy_token.txt    |
