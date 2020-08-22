import React, { useEffect } from 'react';
import { getTokenFromUrl } from './spotify';
import SpotifywebApi from "spotify-web-api-js"
import Login from "./Login"
import Player from "./Player";
import {useDataLayerValue} from "./DataLayer";

const spotify = new SpotifywebApi();

function App() {

  // const [token, setToken] = useState(null);
  const [{token}, dispatch] = useDataLayerValue();

    // Run code base on a given condition
  useEffect(() => {
   
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      
      spotify.setAccessToken(_token);

      dispatch({
             type:"SET_TOKEN",
             token:_token,
      });
      // setToken(_token);
  
      spotify.getMe().then((user) =>{

        dispatch({
          type: 'SET_USER',
          user:user,
        });
        
      });

      spotify.getUserPlaylists().then((playlists)=>{
        dispatch({
          type: 'SET_PLAYLIST',
          playlists:playlists,
        });
      });

      spotify.getPlaylist('0GB9chRwz1EI9MkT3BjfbO').then((response)=>{
        dispatch({
          type: 'SET_DISCOVER_WEEKLY',
          discover_weekly:response,
        });
      });

      dispatch({
        type: "SET_SPOTIFY",
        spotify: spotify,
      });

      spotify.getMyTopArtists().then((response) =>
        dispatch({
          type: "SET_TOP_ARTISTS",
          top_artists: response,
        })
      );

    }
    // console.log("I get token", token);
  }, [token,dispatch]);

  // console.log("user",user);
  // console.log("token",token);
  
  return (
    <div className="App">
      {/* <h1>Hello there!</h1> */}
      {
        token ? ( <Player spotify={spotify} /> ) : (  <Login /> )
      }
      {/* <Login /> */}
    </div>
  );
}

export default App;
