import fs from 'fs';

// Function to get the Discord_Token from the secret file
export function getDiscordToken():string{    
  try {
    // Docker mounts secrets at this specific path
    return fs.readFileSync('secrets/discord_token.txt', 'utf8').trim();
  } catch (err) {
    console.error("Could not find discord_token secret file!");
    console.error(err);
  }
}

// Function to get the Giphy_Token from the secret file
export function getGiphyToken():string{    
  try {
    // Docker mounts secrets at this specific path
    return fs.readFileSync('secrets/giphy_token.txt', 'utf8').trim();
  } catch (err) {
    console.error("Could not find giphy_token secret file!");
    console.error(err);
  }
}
