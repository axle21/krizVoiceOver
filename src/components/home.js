import React, { useState } from 'react';
import Blog from '../components/blog';
import Videos from '../components/videos';
import LogoChar from '../image/logoChar.png';
import '../styles/home.css';


const Home = () => {

    const [activePage, setActivePage] = useState(true)
    const [bannerSize, setBannerSize] = useState(true);

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

const changeView = (e) =>{
    if(activePage !== e){
        setActivePage(e)
    }
    
}

  return (
    <React.Fragment>
    
    <div style={bannerSize ? {height: "400px"} : {height: "100vh"}} className="hero-image" >
       {aboutme}
    </div>

        <main className="main-area">
            <div className="centered">
                <h1><span onClick={() =>changeView(true)} style={activePage ? {textDecoration: "underline" } : {textDecoration: ""}}>Videos</span> 
                {' '}||{' '}
                <span onClick={() => changeView(false)} style={!activePage ? {textDecoration: "underline" } : {textDecoration: ""}}>Blogs</span> </h1>
                {
                   activePage ?  <Videos/> : <Blog/>
                }
                
            </div>
        </main>
        </React.Fragment>
    
  )
}

export default Home
