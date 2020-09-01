require('dotenv').config()

export const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUrl = "http://localhost:3000/";

const clientId = "7eab627225c54aa08076ae7fefa93eb1" ;

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

// Getting The Access Token

// export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scopes.join("%20")}&response _type=token&show_dialog=true`
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scopes.join(
    "%20"
  )}&response_type=token&show_dialog=true`;