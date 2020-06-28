import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import '../styles/home.css';


const Home = () => {

    const [youtubeData, setYoutubeData] = useState([]);
    const [load, setLoad] = useState(false);
    const [error, setError] = useState('');
    let history = useHistory();

    const playVideo = (data) => {

        localStorage.setItem('urlPlayer', data);
        history.push("/player");
    }

    useEffect(() => {
        axios.get('https://www.googleapis.com/youtube/v3/search?key=AIzaSyBHgcIkK-i2A6YRiRkSiJ_gz1yX0CiNIVQ&channelId=UCNacX3kBN4u-3MapN9N58Cg&part=snippet,id&order=date&maxResults=50')
            .then(res => {
                setYoutubeData(res.data.items);
                setLoad(true);
            })
            .catch(err => {
                setError(err.message);
                setLoad(true)
            })
    }, []);



const videoList = youtubeData.map(data => {
    if("videoId" in data.id){
        if (load) {
            return (<React.Fragment key={data.id.videoId}>
                {error ? <>{error.message}</> : 
                
                <article className="card" >
                    <button onClick={() => playVideo(data.id.videoId)}>
                    <figure className="thumbnail">
                    <img src={data.snippet.thumbnails.default.url} alt="YoutubeImage"/>
                    </figure>
                    <div className="card-content">
                        <h2>{data.snippet.title}</h2>
                        <p>{data.snippet.description}</p>
                    </div>

                    </button>
                </article>
                
                }
            </React.Fragment>);
        } else {
            return (
                <div key={data.id.videoId}>
                    Loading...
                </div>
            );
        }
    }

    return null
    
})



  return (
    <div className="home-main">
    
        {/* <div class="section" id="section3"></div> */}

        <main className="main-area">
            <div className="centered">
                <section className="cards">

                {videoList}
                   
                </section>
            </div>
        </main>
        </div>
    
  )
}

export default Home
