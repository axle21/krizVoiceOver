import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player/youtube';
import { useHistory } from "react-router-dom";
import '../styles/player.css';

const Player = () => {
  const [url, setUrl] = useState('');
  let history = useHistory();

  useEffect(() => {
    // Update the document title using the browser API
    let data = localStorage.getItem('urlPlayer')
    setUrl(`https://www.youtube.com/watch?v=${data}`)
  },[]);

  const backhome = () => {
    history.push("/");
  }

  return (
    <div className="player-main">
      <div>
        <ReactPlayer url={url} />
      </div>

      
      <div>

      <button onClick={() => backhome()}>Back</button>
          
      </div>
      
         
      
    </div>
  )
}

export default Player
