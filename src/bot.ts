import {isGasBot, isTermUsed, isUser} from "./Helpers/discord";
import {Client} from "discord.js";
import {fetch_giphy} from './Helpers/bot';
import {filename,emoji} from './constants';
const config = require("../"+filename);

const client = new Client();

client.on('ready', () => {
     console.log("EmanBot is now online!");
});

client.on('message',async msg => {
     if(isUser(msg.author.username,msg.author.discriminator)==true||
     isTermUsed(msg.content) == true){         
          msg.react(emoji);
     }

     if(isGasBot(msg.author)){
          let gif = "";
          if(msg.embeds[0].title.includes("+")){
               gif = await fetch_giphy("angry");
          }else if(msg.embeds[0].title.includes("-")){
               gif = await fetch_giphy("celebrate");
          }else{
               gif = await fetch_giphy("shrug");
          }
          msg.reply(gif);
     }
});


client.login(config.BOT_TOKEN);

