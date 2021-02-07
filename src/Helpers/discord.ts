import {filename} from '../constants';
const config = require("../../"+filename);

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

export function isTermUsed(content:string):boolean{
    let isTerm = false;
    terms.forEach(term=>{
        if(content.toLowerCase().includes(term)){
            isTerm= true;
        }
    })
    return isTerm;
}