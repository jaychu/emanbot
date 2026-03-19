import fs from 'fs';

// Function to get the Discord_Token from the secret file
export function getDiscordToken():string{    
  try {
    // Docker mounts secrets at this specific path
    return fs.readFileSync('data/discord_token.txt', 'utf8').trim();
  } catch (err) {
    console.error("Could not find discord_token file in data/!");
    console.error(err);
  }
}

// Function to get the Giphy_Token from the secret file
export function getGiphyToken():string{    
  try {
    // Docker mounts secrets at this specific path
    return fs.readFileSync('data/giphy_token.txt', 'utf8').trim();
  } catch (err) {
    console.error("Could not find giphy_token file in data/!");
    console.error(err);
  }
}
