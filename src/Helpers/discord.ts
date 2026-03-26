import {User} from "discord.js";
import {configFile, pizzaString, self} from '../constants';


const config = (process.env.NODE_ENV === 'production') ? require(configFile) : require("../../"+configFile);

import {populateArray} from './bot';

let users = populateArray(config.USERS);
let terms = populateArray(config.PHRASES);


export function isUser(username:string,discriminator:string):boolean{    
    let messageUser = (username+"#"+discriminator).toLowerCase().trim();
    let isUser = false;
    users.forEach(user=>{
        if(messageUser === user){
            isUser = true;
        }
    });
    return isUser;
}

export function isSelf(username:string):boolean{  
    return self === username.toLowerCase().trim();
}

export function isTermUsed(content:string):boolean{
    let isTerm = false;
    terms.forEach(term=>{
        if(content.toLowerCase().includes(term)){
            isTerm= true;
        }
    })
    return isTerm;
}

export function isPizzaUsed(content:string):boolean{
    return content.toLowerCase().includes(pizzaString);
}

export function isGasBot(author:User):boolean{
    return author.id === config.GAS_BOT;
}
