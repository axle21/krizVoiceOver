// import axios from 'axios';
import React, { useState } from 'react';
import blogData from '../image/blog.json';
import '../styles/blog.css';

const Blog = () => {

    const [showBlog, setShowBlog] = useState('');

    const showblogContent = (i) => {    
        
        if( showBlog === i){
            setShowBlog('')
        }else {
            setShowBlog(i)
        }
        
    }

    return (
        <section className="blogSection">

        {
            blogData.map((data,index) => {

                return(
                    <div className="blogCard" key={data.id}>
                        <button onClick={() =>showblogContent(index)}>  <h2>{data.day} <i className={showBlog === index ? "arrow down" : "arrow right"} ></i> </h2> </button>  
                        <div className="blogcard-content" style={index === showBlog ? {display: "block" } : {display: "none"}}>
                        <hr/>
                            <p dangerouslySetInnerHTML={{__html: data.content}} />
                        </div>
                    </div>
                )
                
            })
        }

            {/* <div className="blogCard">
                <button >  <h2>Day 4 <i className="arrow down"></i> </h2> </button>  
                <div className="blogcard-content">
                    <hr/>
                    <p>lorem50  </p>
                </div>
            </div>

            <div className="blogCard">
                    <button>  <h2>Day 3 <i className="arrow right"></i> </h2> </button>  
                <div className="blogcard-content">
                   
                </div>
            </div> */}

           
        </section>
    )
}

export default Blog
