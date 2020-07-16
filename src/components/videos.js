import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";

const Videos = () => {

    const [youtubeData, setYoutubeData] = useState([]);
    const [load, setLoad] = useState(false);
    const [error, setError] = useState('');
    let history = useHistory();

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

    const playVideo = (data) => {

        localStorage.setItem('urlPlayer', data);
        history.push("/player");
    }

    return (
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
    )
}

export default Videos
