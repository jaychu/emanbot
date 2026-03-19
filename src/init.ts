import jsonfile from 'jsonfile';
import {configFile,defaultConfig} from './constants'

console.log("beginning init sequence");
if (process.env.NODE_ENV === 'production') {
    let environmentVariables = {
        USERS : process.env.USERS || defaultConfig.USERS,
        PHRASES:process.env.PHRASES || defaultConfig.PHRASES,
        GAS_BOT:process.env.GAS_BOT || defaultConfig.GAS_BOT
    }
    console.log("loading the following config values from env");
    console.log("USERS:"+environmentVariables.USERS)
    console.log("PHRASES:"+environmentVariables.PHRASES)
    console.log("GAS_BOT:"+environmentVariables.GAS_BOT)
    jsonfile.writeFile(configFile, environmentVariables);
}else{
    jsonfile.readFile(configFile)
    .then(value=>{
        console.log("loading the following config values from:" + configFile);
        console.log(value);
        })
    .catch(err=>{
        console.log(err);
        console.log("File creation needed!");
        jsonfile.writeFile(configFile, defaultConfig);
    });
}

