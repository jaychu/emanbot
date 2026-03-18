import {isGasBot, isTermUsed, isUser} from "./Helpers/discord";
import { Client, Events, GatewayIntentBits } from "discord.js";
import {fetch_giphy} from './Helpers/bot';
import {emoji} from './constants';
import {getDiscordToken} from './Helpers/secrets';

const client = new Client({ intents: [
     GatewayIntentBits.Guilds,
     GatewayIntentBits.GuildMessages,
     GatewayIntentBits.MessageContent
] });

client.on(Events.ClientReady, readyClient => {
     console.log("EmanBot is now online!");
});

client.on(Events.MessageCreate ,async msg => {
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


client.login(getDiscordToken());

