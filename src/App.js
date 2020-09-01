import React, {useEffect, useState} from 'react';
import './App.css';
import Login from './Login'
import { getTokenFromUrl } from './spotify';

function App() {
  const [token, setToken] = useState(null)

  // Useful for Code Conditions // [] => Run Once , if [name] => Run Everytime Name Changes 
  useEffect(() => {
    const _token = getTokenFromUrl().access_token;
    window.location.hash = "";

    if (_token){
      setToken (_token)
    }

    console.log(token)
  }, []);

  return (
    <div className="app">
      {
          token?  (<h1>You are logged In </h1>) : (<Login/>)
      }
    </div>
  );
}

export default App;
