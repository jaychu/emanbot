import {isTermUsed, isUser} from "./Helpers/discord";
import {Client} from "discord.js";
import {filename,emoji} from './constants';
const config = require("../"+filename);

const client = new Client();

client.on('ready', () => {
     console.log("EmanBot is now online!");
});

client.on('message', msg => {    
     if(isUser(msg.author.username,msg.author.discriminator)==true||
     isTermUsed(msg.content) == true){
          msg.react(emoji);
     }
});


client.login(config.BOT_TOKEN);

