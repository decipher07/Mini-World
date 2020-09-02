import React, {useEffect, useState} from 'react';
import './App.css';
import Login from './Login'
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from "spotify-web-api-js"
import Player from './Player';
import { useDataLayerValue } from './Datalayer'

const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null);
  const [{user}, dispatch] = useDataLayerValue();

  // Useful for Code Conditions // [] => Run Once , if [name] => Run Everytime Name Changes 
  useEffect(() => {
    const _token = getTokenFromUrl().access_token;
    window.location.hash = "";

    if (_token){
      setToken (_token)
      spotify.setAccessToken(_token)
    }

    spotify.getMe().then((user) => {
      // console.log(user)
      dispatch({
        type: 'SET_USER',
        user: user
      })
    })
    
  }, []);

  console.log(user);

  return (
    <div className="app">
      {
          token?  (<Player/>) : (<Login/>)
      }
    </div>
  );
}

export default App;
