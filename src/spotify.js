require('dotenv').config()

export const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUrl = "http://localhost:3000/";

const clientId = process.env.CLIENTID ;