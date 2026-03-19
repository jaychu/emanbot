import jsonfile from 'jsonfile';
import {configFile,defaultConfig} from './constants'

console.log("beginning init sequence");
jsonfile.readFile(configFile)
.then(value=>{
    console.log("loading the following config values from:" + configFile);
    if(isEnvSameFromConfig(process.env.USERS ,value.USERS) && 
    isEnvSameFromConfig(process.env.PHRASES,value.PHRASES) &&
    isEnvSameFromConfig(process.env.GAS_BOT,value.GAS_BOT)){
        console.log("Loading existing config as is.")
        console.log(value);
    }else{
        console.log("Environment variables differ from config")
        let environmentVariables = {
            USERS : process.env.USERS,
            PHRASES:process.env.PHRASES,
            GAS_BOT:process.env.GAS_BOT
        }
        jsonfile.writeFile(configFile, environmentVariables);
    }   
})
.catch(err=>{
    console.log(err);
    console.log("File creation needed!");
    jsonfile.writeFile(configFile, defaultConfig);
});

function isEnvSameFromConfig(env:string,config:string){
    if(env != null){
         return env == config
    } else{
        return true
    }
   
}

