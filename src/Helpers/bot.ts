import axios from 'axios';
import random from 'random'
import {filename} from '../constants';
const config = require("../../"+filename);

export function populateArray(value:string){
    let resArray = [];
    value.split(",").forEach(element=>{
        resArray.push(element);
    });
    return resArray;
}

export async function fetch_giphy(query:string):Promise<string>{
    let randomSeed = random.int(0,1000);
    let url=`https://api.giphy.com/v1/gifs/search?api_key=${config.GIPHY_KEY}&q=${query}&limit=1&offset=${randomSeed}&rating=pg-13&lang=en`;
    let res = await axios.get(url);
    return await res.data.data[0].embed_url;
}                                 