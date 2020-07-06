import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import LogoChar from '../image/logoChar.png';
import '../styles/home.css';

const Home = () => {

    const [youtubeData, setYoutubeData] = useState([]);
    const [load, setLoad] = useState(false);
    const [error, setError] = useState('');
    const [aboutme, setAboutme] = useState(


    <div className="hero-text">
        
        <img className="logoChar" src={LogoChar} alt="Logo"/>
        <p style={{fontSize:"20px",color:"#D9c998"}}>Hi! My Name is </p>
            <h1 style={{color:'#D9C998',
                    fontFamily: 'Rock Salt, cursive'}}>
                KRIS
            </h1>
            {/* <p style={{color:'#D9C998'}}>Welcome to my loading site :)</p> */}
        <button onClick={() => showAboutMe()}>About Me</button>
    </div>
    
    );

    const [bannerSize, setBannerSize] = useState(true);

    let history = useHistory();

    const playVideo = (data) => {

        localStorage.setItem('urlPlayer', data);
        history.push("/player");
    }

    useEffect(() => {
        axios.get('https://www.googleapis.com/youtube/v3/playlistItems?maxResults=50&playlistId=UUNacX3kBN4u-3MapN9N58Cg&part=id,snippet&key=AIzaSyBCn901RNgmNKmESeD-uuSeIVl9k8YJ8vc')
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
        if (load) {
            return (
            <React.Fragment key={data.snippet.resourceId.videoId}>
                {error ? <>{error.message}</> : 
                
                <article className="card" >
                    <button onClick={() => playVideo(data.snippet.resourceId.videoId)}>
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
                <div key={data.snippet.resourceId.videoId}>
                    Loading...
                </div>
            );
        }
    
})


const showAboutMe = () => {
    setBannerSize(false)
    setAboutme(

        <div className="hero-text">
            <p style={{color:'#D9C998',
            fontFamily: 'Gochi Hand, cursive',
            textAlign: 'justify',
           
            
            }}>
            This site will feature my dubbing attempts (mostly of 90s anime's, kdrama *basta pag type ko yung storyline and iconic commercial). Im a 90s baby kaya iba ang passion ko for old style animes and programs. I love to dub and act especially to those emotionally-triggering scenes and episodes .I know someday i'll be one of the well known dubber here sa atin (gusto ko rin kasi marecognize for an iconic role or character :) ) So hope you enjoy my piece of heart on every video listed below.


            <br/>
            <br/>
            The reason why i named it To All The Voice I've Loved Before is because I was greatly influenced by 90's anime's iconic characters in which till now swayed me to be at my best everyday.</p>
    </div>
    )

}
  return (
    <React.Fragment>
    
    <div style={bannerSize ? {height: "400px"} : {height: "100vh"}} className="hero-image" >
       {aboutme}
    </div>

        <main className="main-area">
            <div className="centered">
                <section className="cards">

                {videoList}

                {/* <article className="card">
                    <button>
                    <figure className="thumbnail">
                        <img src="http://placekitten.com/800/610" alt="meow" />
                    </figure>
                    <div className="card-content">
                        <h2>Fluffy</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum explicabo consequatur consectetur fugit molestias perferendis, sint error iste ut, facilis sunt natus optio dolor nesciunt laboriosam obcaecati corporis numquam?</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum explicabo consequatur consectetur fugit molestias perferendis, sint error iste ut, facilis sunt natus optio dolor nesciunt laboriosam obcaecati corporis numquam?</p>
                    </div>
                    </button>
                </article>

                <article className="card">
                    <button>
                    <figure className="thumbnail">
                        <img src="http://placekitten.com/800/610" alt="meow" />
                    </figure>
                    <div className="card-content">
                        <h2>Fluffy</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum explicabo consequatur consectetur fugit molestias perferendis, sint error iste ut, facilis sunt natus optio dolor nesciunt laboriosam obcaecati corporis numquam?</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum explicabo consequatur consectetur fugit molestias perferendis, sint error iste ut, facilis sunt natus optio dolor nesciunt laboriosam obcaecati corporis numquam?</p>
                    </div>
                    </button>
                </article>

                <article className="card">
                    <button>
                    <figure className="thumbnail">
                        <img src="http://placekitten.com/800/610" alt="meow" />
                    </figure>
                    <div className="card-content">
                        <h2>Fluffy</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum explicabo consequatur consectetur fugit molestias perferendis, sint error iste ut, facilis sunt natus optio dolor nesciunt laboriosam obcaecati corporis numquam?</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum explicabo consequatur consectetur fugit molestias perferendis, sint error iste ut, facilis sunt natus optio dolor nesciunt laboriosam obcaecati corporis numquam?</p>
                    </div>
                    </button>
                </article> */}
                   
                </section>
            </div>
        </main>
        </React.Fragment>
    
  )
}

export default Home
