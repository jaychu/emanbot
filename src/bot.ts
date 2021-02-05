import {filename} from './constants'
import {Client} from "discord.js"

const config = require("../"+filename);

const client = new Client();

client.on('ready', () => {
     console.log("EmanBot is now online!");
});

client.on('message', msg => {
    
});


client.login(config.BOT_TOKEN);

