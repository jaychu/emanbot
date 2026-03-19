import axios from 'axios';
import random from 'random'
import {getGiphyToken} from '../Helpers/secrets';

export function populateArray(value:string){
    let resArray = [];
    value.split(",").forEach(element=>{
        resArray.push(element);
    });
    return resArray;
}

export async function fetch_giphy(query:string):Promise<string>{
    let randomSeed = random.int(0,100);
    let url=`https://api.giphy.com/v1/gifs/search?api_key=${getGiphyToken()}&q=${query}&limit=1&offset=${randomSeed}&rating=pg-13&lang=en&bundle=messaging_non_clips`;
    console.log(`Query:${query}, Random Seed:${randomSeed}`)
    let res = await axios.get(url);
    return await res.data.data[0].embed_url;
}                                 