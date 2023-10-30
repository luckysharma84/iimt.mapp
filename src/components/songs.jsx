import { useEffect, useState } from "react";

const Songs = ()=>{ 
    const [songs,setSongs] = useState([]);
    // scope increase
    // re-rendering
    const doNetworkCall = async ()=>{
      const URL = 'https://itunes.apple.com/search?term=daler&limit=25';
      const response = await fetch(URL);
      const data = await response.json();
      setSongs(data.results);
      console.log('data is ', data.results);
    }
    useEffect(()=>{
        // During Component Mount
        doNetworkCall();
    },[]);
    /*
     Making Network call (API CALL)
    */
    return (<div>{songs.length==0 && <p>Loading...</p>}
    {songs.map(song=><div>
        <img src={song.artworkUrl100} />
        <p>{song.artistName} {song.trackName}</p>
        <audio controls src={song.previewUrl}>
            <source type="audio/mp3"></source>
        </audio>
        </div>)}
    </div>)
}
export default Songs;