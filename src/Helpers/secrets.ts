import fs from 'fs';

// Function to get the Discord_Token from the secret file
export function getDiscordToken():string{    
  try {
    // Docker mounts secrets at this specific path
    let discord_token_path = (process.env.NODE_ENV === 'production') ?'/emanbot-config/discord_token.txt' : 'data/discord_token.txt';
    return fs.readFileSync(discord_token_path, 'utf8').trim();
  } catch (err) {
    console.error("Could not find discord_token file in data/!");
    console.error(err);
  }
}

// Function to get the Giphy_Token from the secret file
export function getGiphyToken():string{    
  try {
    // Docker mounts secrets at this specific path
        let giphy_token_path = (process.env.NODE_ENV === 'production') ?'/emanbot-config/giphy_token.txt' : 'data/giphy_token.txt';
    return fs.readFileSync(giphy_token_path, 'utf8').trim();
  } catch (err) {
    console.error("Could not find giphy_token file in data/!");
    console.error(err);
  }
}
