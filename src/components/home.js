import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import '../styles/home.css';

const Home = () => {

    const [youtubeData, setYoutubeData] = useState([]);
    const [load, setLoad] = useState(false);
    const [error, setError] = useState('');
    const [aboutme, setAboutme] = useState(


    <div className="hero-text">
        <h1 style={{fontSize:"40px"}}>Hi! My Name is Kris</h1>
            <p style={{color:'#D9C998'}}>Welcome to my loading site :)</p>
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

        setYoutubeData([
            {
              "kind": "youtube#playlistItem",
              "etag": "RQjxFp_U1cggJ16Y1kS_GkDs5vw",
              "id": "VVVOYWNYM2tCTjR1LTNNYXBOOU41OENnLmkzQzgteDczZThz",
              "snippet": {
                "publishedAt": "2020-07-02T11:28:14Z",
                "channelId": "UCNacX3kBN4u-3MapN9N58Cg",
                "title": "Original Character No. 5 Vico",
                "description": "Fukiko and Vico Soho original character self dub",
                "thumbnails": {
                  "default": {
                    "url": "https://i.ytimg.com/vi/i3C8-x73e8s/default.jpg",
                    "width": 120,
                    "height": 90
                  },
                  "medium": {
                    "url": "https://i.ytimg.com/vi/i3C8-x73e8s/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                  },
                  "high": {
                    "url": "https://i.ytimg.com/vi/i3C8-x73e8s/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                  },
                  "standard": {
                    "url": "https://i.ytimg.com/vi/i3C8-x73e8s/sddefault.jpg",
                    "width": 640,
                    "height": 480
                  },
                  "maxres": {
                    "url": "https://i.ytimg.com/vi/i3C8-x73e8s/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                  }
                },
                "channelTitle": "Kristoffer Cruz",
                "playlistId": "UUNacX3kBN4u-3MapN9N58Cg",
                "position": 0,
                "resourceId": {
                  "kind": "youtube#video",
                  "videoId": "i3C8-x73e8s"
                }
              }
            },
            {
              "kind": "youtube#playlistItem",
              "etag": "U2LEj3YQzs7Jt5M6VXYBSrwOBDQ",
              "id": "VVVOYWNYM2tCTjR1LTNNYXBOOU41OENnLk9McDlkRmFyY21F",
              "snippet": {
                "publishedAt": "2020-07-02T05:43:25Z",
                "channelId": "UCNacX3kBN4u-3MapN9N58Cg",
                "title": "Original Character No. 4 Adam",
                "description": "Ang lalaking palagi nalang may sayang",
                "thumbnails": {
                  "default": {
                    "url": "https://i.ytimg.com/vi/OLp9dFarcmE/default.jpg",
                    "width": 120,
                    "height": 90
                  },
                  "medium": {
                    "url": "https://i.ytimg.com/vi/OLp9dFarcmE/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                  },
                  "high": {
                    "url": "https://i.ytimg.com/vi/OLp9dFarcmE/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                  },
                  "standard": {
                    "url": "https://i.ytimg.com/vi/OLp9dFarcmE/sddefault.jpg",
                    "width": 640,
                    "height": 480
                  }
                },
                "channelTitle": "Kristoffer Cruz",
                "playlistId": "UUNacX3kBN4u-3MapN9N58Cg",
                "position": 1,
                "resourceId": {
                  "kind": "youtube#video",
                  "videoId": "OLp9dFarcmE"
                }
              }
            },
            {
              "kind": "youtube#playlistItem",
              "etag": "BIhhiGRX89Uoip5nQHODoM8HuGQ",
              "id": "VVVOYWNYM2tCTjR1LTNNYXBOOU41OENnLlNkN1dXcDF2ckNJ",
              "snippet": {
                "publishedAt": "2020-07-01T11:35:43Z",
                "channelId": "UCNacX3kBN4u-3MapN9N58Cg",
                "title": "Original Character No. 3 Gian",
                "description": "",
                "thumbnails": {
                  "default": {
                    "url": "https://i.ytimg.com/vi/Sd7WWp1vrCI/default.jpg",
                    "width": 120,
                    "height": 90
                  },
                  "medium": {
                    "url": "https://i.ytimg.com/vi/Sd7WWp1vrCI/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                  },
                  "high": {
                    "url": "https://i.ytimg.com/vi/Sd7WWp1vrCI/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                  },
                  "standard": {
                    "url": "https://i.ytimg.com/vi/Sd7WWp1vrCI/sddefault.jpg",
                    "width": 640,
                    "height": 480
                  },
                  "maxres": {
                    "url": "https://i.ytimg.com/vi/Sd7WWp1vrCI/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                  }
                },
                "channelTitle": "Kristoffer Cruz",
                "playlistId": "UUNacX3kBN4u-3MapN9N58Cg",
                "position": 2,
                "resourceId": {
                  "kind": "youtube#video",
                  "videoId": "Sd7WWp1vrCI"
                }
              }
            },
            {
              "kind": "youtube#playlistItem",
              "etag": "BxChgq3SVj3CQvGPvaIea8q-l_8",
              "id": "VVVOYWNYM2tCTjR1LTNNYXBOOU41OENnLm01bFdUb0pVYWxj",
              "snippet": {
                "publishedAt": "2020-07-01T02:42:43Z",
                "channelId": "UCNacX3kBN4u-3MapN9N58Cg",
                "title": "Original Character No. 2 Felipe",
                "description": "my original character self dub\nFelipe\nang binatang dati ay walang pangarap pero ngayon at matayog na ang lipad pero may hinahanap",
                "thumbnails": {
                  "default": {
                    "url": "https://i.ytimg.com/vi/m5lWToJUalc/default.jpg",
                    "width": 120,
                    "height": 90
                  },
                  "medium": {
                    "url": "https://i.ytimg.com/vi/m5lWToJUalc/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                  },
                  "high": {
                    "url": "https://i.ytimg.com/vi/m5lWToJUalc/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                  },
                  "standard": {
                    "url": "https://i.ytimg.com/vi/m5lWToJUalc/sddefault.jpg",
                    "width": 640,
                    "height": 480
                  },
                  "maxres": {
                    "url": "https://i.ytimg.com/vi/m5lWToJUalc/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                  }
                },
                "channelTitle": "Kristoffer Cruz",
                "playlistId": "UUNacX3kBN4u-3MapN9N58Cg",
                "position": 3,
                "resourceId": {
                  "kind": "youtube#video",
                  "videoId": "m5lWToJUalc"
                }
              }
            },
            {
              "kind": "youtube#playlistItem",
              "etag": "1xL_102IAIY-KKH3LZSb-kQ2VSg",
              "id": "VVVOYWNYM2tCTjR1LTNNYXBOOU41OENnLk41c3RsVm9KODFr",
              "snippet": {
                "publishedAt": "2020-07-01T01:52:13Z",
                "channelId": "UCNacX3kBN4u-3MapN9N58Cg",
                "title": "Original Character No. 1 Genesis",
                "description": "Genesis ang batang laki sa simbahan ng Notre Dam",
                "thumbnails": {
                  "default": {
                    "url": "https://i.ytimg.com/vi/N5stlVoJ81k/default.jpg",
                    "width": 120,
                    "height": 90
                  },
                  "medium": {
                    "url": "https://i.ytimg.com/vi/N5stlVoJ81k/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                  },
                  "high": {
                    "url": "https://i.ytimg.com/vi/N5stlVoJ81k/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                  },
                  "standard": {
                    "url": "https://i.ytimg.com/vi/N5stlVoJ81k/sddefault.jpg",
                    "width": 640,
                    "height": 480
                  },
                  "maxres": {
                    "url": "https://i.ytimg.com/vi/N5stlVoJ81k/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                  }
                },
                "channelTitle": "Kristoffer Cruz",
                "playlistId": "UUNacX3kBN4u-3MapN9N58Cg",
                "position": 4,
                "resourceId": {
                  "kind": "youtube#video",
                  "videoId": "N5stlVoJ81k"
                }
              }
            },
            {
              "kind": "youtube#playlistItem",
              "etag": "QV7TkI7mVMb82JwaHYtyklolwgs",
              "id": "VVVOYWNYM2tCTjR1LTNNYXBOOU41OENnLl94OG5nQ1g3NVVj",
              "snippet": {
                "publishedAt": "2020-06-30T15:23:57Z",
                "channelId": "UCNacX3kBN4u-3MapN9N58Cg",
                "title": "Dalawang Pusit Dubbing attempt",
                "description": "kilig sa pusit sweet ko noh",
                "thumbnails": {
                  "default": {
                    "url": "https://i.ytimg.com/vi/_x8ngCX75Uc/default.jpg",
                    "width": 120,
                    "height": 90
                  },
                  "medium": {
                    "url": "https://i.ytimg.com/vi/_x8ngCX75Uc/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                  },
                  "high": {
                    "url": "https://i.ytimg.com/vi/_x8ngCX75Uc/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                  },
                  "standard": {
                    "url": "https://i.ytimg.com/vi/_x8ngCX75Uc/sddefault.jpg",
                    "width": 640,
                    "height": 480
                  },
                  "maxres": {
                    "url": "https://i.ytimg.com/vi/_x8ngCX75Uc/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                  }
                },
                "channelTitle": "Kristoffer Cruz",
                "playlistId": "UUNacX3kBN4u-3MapN9N58Cg",
                "position": 5,
                "resourceId": {
                  "kind": "youtube#video",
                  "videoId": "_x8ngCX75Uc"
                }
              }
            },
            {
              "kind": "youtube#playlistItem",
              "etag": "ajzwz1QEPzzhFSAZVL37GOOVZGs",
              "id": "VVVOYWNYM2tCTjR1LTNNYXBOOU41OENnLmt0SXFOYm16T3dB",
              "snippet": {
                "publishedAt": "2020-06-30T15:17:10Z",
                "channelId": "UCNacX3kBN4u-3MapN9N58Cg",
                "title": "Nan Paying Homage her roots dubbing attempt",
                "description": "paying respect to maam yvette for this iconic work of hers.",
                "thumbnails": {
                  "default": {
                    "url": "https://i.ytimg.com/vi/ktIqNbmzOwA/default.jpg",
                    "width": 120,
                    "height": 90
                  },
                  "medium": {
                    "url": "https://i.ytimg.com/vi/ktIqNbmzOwA/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                  },
                  "high": {
                    "url": "https://i.ytimg.com/vi/ktIqNbmzOwA/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                  },
                  "standard": {
                    "url": "https://i.ytimg.com/vi/ktIqNbmzOwA/sddefault.jpg",
                    "width": 640,
                    "height": 480
                  },
                  "maxres": {
                    "url": "https://i.ytimg.com/vi/ktIqNbmzOwA/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                  }
                },
                "channelTitle": "Kristoffer Cruz",
                "playlistId": "UUNacX3kBN4u-3MapN9N58Cg",
                "position": 6,
                "resourceId": {
                  "kind": "youtube#video",
                  "videoId": "ktIqNbmzOwA"
                }
              }
            },
            {
              "kind": "youtube#playlistItem",
              "etag": "U1paObJP4NjRgsTuzG2CZsIaieA",
              "id": "VVVOYWNYM2tCTjR1LTNNYXBOOU41OENnLnlPekZUOUVfYktF",
              "snippet": {
                "publishedAt": "2020-06-30T15:10:12Z",
                "channelId": "UCNacX3kBN4u-3MapN9N58Cg",
                "title": "Yan si Remi hindi sya sumusuko dubbing attempt",
                "description": "cosette mathia sincere conversation",
                "thumbnails": {
                  "default": {
                    "url": "https://i.ytimg.com/vi/yOzFT9E_bKE/default.jpg",
                    "width": 120,
                    "height": 90
                  },
                  "medium": {
                    "url": "https://i.ytimg.com/vi/yOzFT9E_bKE/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                  },
                  "high": {
                    "url": "https://i.ytimg.com/vi/yOzFT9E_bKE/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                  },
                  "standard": {
                    "url": "https://i.ytimg.com/vi/yOzFT9E_bKE/sddefault.jpg",
                    "width": 640,
                    "height": 480
                  },
                  "maxres": {
                    "url": "https://i.ytimg.com/vi/yOzFT9E_bKE/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                  }
                },
                "channelTitle": "Kristoffer Cruz",
                "playlistId": "UUNacX3kBN4u-3MapN9N58Cg",
                "position": 7,
                "resourceId": {
                  "kind": "youtube#video",
                  "videoId": "yOzFT9E_bKE"
                }
              }
            },
            {
              "kind": "youtube#playlistItem",
              "etag": "4HxeUqUa_bCytV4pLZ6kVF6OKK0",
              "id": "VVVOYWNYM2tCTjR1LTNNYXBOOU41OENnLlltM0I1aUFYMzRR",
              "snippet": {
                "publishedAt": "2020-06-30T15:06:50Z",
                "channelId": "UCNacX3kBN4u-3MapN9N58Cg",
                "title": "Kasal Kasalan dubbing attempt",
                "description": "kilig mathia",
                "thumbnails": {
                  "default": {
                    "url": "https://i.ytimg.com/vi/Ym3B5iAX34Q/default.jpg",
                    "width": 120,
                    "height": 90
                  },
                  "medium": {
                    "url": "https://i.ytimg.com/vi/Ym3B5iAX34Q/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                  },
                  "high": {
                    "url": "https://i.ytimg.com/vi/Ym3B5iAX34Q/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                  },
                  "standard": {
                    "url": "https://i.ytimg.com/vi/Ym3B5iAX34Q/sddefault.jpg",
                    "width": 640,
                    "height": 480
                  },
                  "maxres": {
                    "url": "https://i.ytimg.com/vi/Ym3B5iAX34Q/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                  }
                },
                "channelTitle": "Kristoffer Cruz",
                "playlistId": "UUNacX3kBN4u-3MapN9N58Cg",
                "position": 8,
                "resourceId": {
                  "kind": "youtube#video",
                  "videoId": "Ym3B5iAX34Q"
                }
              }
            },
            {
              "kind": "youtube#playlistItem",
              "etag": "GgxQBqY3PctZKMw_0UFf8UYG6aM",
              "id": "VVVOYWNYM2tCTjR1LTNNYXBOOU41OENnLlJCRkY1UUFBekRj",
              "snippet": {
                "publishedAt": "2020-06-30T15:02:36Z",
                "channelId": "UCNacX3kBN4u-3MapN9N58Cg",
                "title": "Lee Brave Dubbing Attempt",
                "description": "bravery at its finest",
                "thumbnails": {
                  "default": {
                    "url": "https://i.ytimg.com/vi/RBFF5QAAzDc/default.jpg",
                    "width": 120,
                    "height": 90
                  },
                  "medium": {
                    "url": "https://i.ytimg.com/vi/RBFF5QAAzDc/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                  },
                  "high": {
                    "url": "https://i.ytimg.com/vi/RBFF5QAAzDc/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                  },
                  "standard": {
                    "url": "https://i.ytimg.com/vi/RBFF5QAAzDc/sddefault.jpg",
                    "width": 640,
                    "height": 480
                  },
                  "maxres": {
                    "url": "https://i.ytimg.com/vi/RBFF5QAAzDc/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                  }
                },
                "channelTitle": "Kristoffer Cruz",
                "playlistId": "UUNacX3kBN4u-3MapN9N58Cg",
                "position": 9,
                "resourceId": {
                  "kind": "youtube#video",
                  "videoId": "RBFF5QAAzDc"
                }
              }
            },
            {
              "kind": "youtube#playlistItem",
              "etag": "3dzQ3nDNvtsNeq1cCroyfMamU7s",
              "id": "VVVOYWNYM2tCTjR1LTNNYXBOOU41OENnLklLUE12RlNwZkV3",
              "snippet": {
                "publishedAt": "2020-06-30T14:55:06Z",
                "channelId": "UCNacX3kBN4u-3MapN9N58Cg",
                "title": "Marco Pauline cool off dubbing attempt",
                "description": "break up or cool of eksena",
                "thumbnails": {
                  "default": {
                    "url": "https://i.ytimg.com/vi/IKPMvFSpfEw/default.jpg",
                    "width": 120,
                    "height": 90
                  },
                  "medium": {
                    "url": "https://i.ytimg.com/vi/IKPMvFSpfEw/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                  },
                  "high": {
                    "url": "https://i.ytimg.com/vi/IKPMvFSpfEw/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                  },
                  "standard": {
                    "url": "https://i.ytimg.com/vi/IKPMvFSpfEw/sddefault.jpg",
                    "width": 640,
                    "height": 480
                  },
                  "maxres": {
                    "url": "https://i.ytimg.com/vi/IKPMvFSpfEw/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                  }
                },
                "channelTitle": "Kristoffer Cruz",
                "playlistId": "UUNacX3kBN4u-3MapN9N58Cg",
                "position": 10,
                "resourceId": {
                  "kind": "youtube#video",
                  "videoId": "IKPMvFSpfEw"
                }
              }
            },
            {
              "kind": "youtube#playlistItem",
              "etag": "hOWD8y1h--fSSCQsIo0fOo1aOwA",
              "id": "VVVOYWNYM2tCTjR1LTNNYXBOOU41OENnLi1weDhsbjdBeV8w",
              "snippet": {
                "publishedAt": "2020-06-30T14:28:06Z",
                "channelId": "UCNacX3kBN4u-3MapN9N58Cg",
                "title": "Anong Pangalan mo? dubbing attempt",
                "description": "anong pangalan mo?",
                "thumbnails": {
                  "default": {
                    "url": "https://i.ytimg.com/vi/-px8ln7Ay_0/default.jpg",
                    "width": 120,
                    "height": 90
                  },
                  "medium": {
                    "url": "https://i.ytimg.com/vi/-px8ln7Ay_0/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                  },
                  "high": {
                    "url": "https://i.ytimg.com/vi/-px8ln7Ay_0/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                  },
                  "standard": {
                    "url": "https://i.ytimg.com/vi/-px8ln7Ay_0/sddefault.jpg",
                    "width": 640,
                    "height": 480
                  },
                  "maxres": {
                    "url": "https://i.ytimg.com/vi/-px8ln7Ay_0/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                  }
                },
                "channelTitle": "Kristoffer Cruz",
                "playlistId": "UUNacX3kBN4u-3MapN9N58Cg",
                "position": 11,
                "resourceId": {
                  "kind": "youtube#video",
                  "videoId": "-px8ln7Ay_0"
                }
              }
            },
            {
              "kind": "youtube#playlistItem",
              "etag": "sGgpyOuBXpreiPyzJ8vRB_xYLtc",
              "id": "VVVOYWNYM2tCTjR1LTNNYXBOOU41OENnLkdkbjZ4ZWczaWhn",
              "snippet": {
                "publishedAt": "2020-06-27T03:43:03Z",
                "channelId": "UCNacX3kBN4u-3MapN9N58Cg",
                "title": "Triple Voice dubbing attempt",
                "description": "remi mattia liz voice over attempt",
                "thumbnails": {
                  "default": {
                    "url": "https://i.ytimg.com/vi/Gdn6xeg3ihg/default.jpg",
                    "width": 120,
                    "height": 90
                  },
                  "medium": {
                    "url": "https://i.ytimg.com/vi/Gdn6xeg3ihg/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                  },
                  "high": {
                    "url": "https://i.ytimg.com/vi/Gdn6xeg3ihg/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                  },
                  "standard": {
                    "url": "https://i.ytimg.com/vi/Gdn6xeg3ihg/sddefault.jpg",
                    "width": 640,
                    "height": 480
                  },
                  "maxres": {
                    "url": "https://i.ytimg.com/vi/Gdn6xeg3ihg/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                  }
                },
                "channelTitle": "Kristoffer Cruz",
                "playlistId": "UUNacX3kBN4u-3MapN9N58Cg",
                "position": 12,
                "resourceId": {
                  "kind": "youtube#video",
                  "videoId": "Gdn6xeg3ihg"
                }
              }
            },
            {
              "kind": "youtube#playlistItem",
              "etag": "IsqpKoZxDIQ0CD2vEyxdifP5vcI",
              "id": "VVVOYWNYM2tCTjR1LTNNYXBOOU41OENnLjlZTktLcEhrcGE0",
              "snippet": {
                "publishedAt": "2020-06-27T02:56:22Z",
                "channelId": "UCNacX3kBN4u-3MapN9N58Cg",
                "title": "90s vintage dubbing attempt",
                "description": "vintage burger recreation",
                "thumbnails": {
                  "default": {
                    "url": "https://i.ytimg.com/vi/9YNKKpHkpa4/default.jpg",
                    "width": 120,
                    "height": 90
                  },
                  "medium": {
                    "url": "https://i.ytimg.com/vi/9YNKKpHkpa4/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                  },
                  "high": {
                    "url": "https://i.ytimg.com/vi/9YNKKpHkpa4/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                  },
                  "standard": {
                    "url": "https://i.ytimg.com/vi/9YNKKpHkpa4/sddefault.jpg",
                    "width": 640,
                    "height": 480
                  },
                  "maxres": {
                    "url": "https://i.ytimg.com/vi/9YNKKpHkpa4/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                  }
                },
                "channelTitle": "Kristoffer Cruz",
                "playlistId": "UUNacX3kBN4u-3MapN9N58Cg",
                "position": 13,
                "resourceId": {
                  "kind": "youtube#video",
                  "videoId": "9YNKKpHkpa4"
                }
              }
            },
            {
              "kind": "youtube#playlistItem",
              "etag": "__1NteaL-R3o4msiSYwpkqZUt3I",
              "id": "VVVOYWNYM2tCTjR1LTNNYXBOOU41OENnLlVUdmxHVnpqSjVv",
              "snippet": {
                "publishedAt": "2020-06-27T02:33:49Z",
                "channelId": "UCNacX3kBN4u-3MapN9N58Cg",
                "title": "Marco x Tatay dubbing attempt",
                "description": "marco x tatay encounter",
                "thumbnails": {
                  "default": {
                    "url": "https://i.ytimg.com/vi/UTvlGVzjJ5o/default.jpg",
                    "width": 120,
                    "height": 90
                  },
                  "medium": {
                    "url": "https://i.ytimg.com/vi/UTvlGVzjJ5o/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                  },
                  "high": {
                    "url": "https://i.ytimg.com/vi/UTvlGVzjJ5o/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                  },
                  "standard": {
                    "url": "https://i.ytimg.com/vi/UTvlGVzjJ5o/sddefault.jpg",
                    "width": 640,
                    "height": 480
                  },
                  "maxres": {
                    "url": "https://i.ytimg.com/vi/UTvlGVzjJ5o/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                  }
                },
                "channelTitle": "Kristoffer Cruz",
                "playlistId": "UUNacX3kBN4u-3MapN9N58Cg",
                "position": 14,
                "resourceId": {
                  "kind": "youtube#video",
                  "videoId": "UTvlGVzjJ5o"
                }
              }
            },
            {
              "kind": "youtube#playlistItem",
              "etag": "eA070LmsG_DDpsuT7GBgxSN96Zs",
              "id": "VVVOYWNYM2tCTjR1LTNNYXBOOU41OENnLldUQ2tjOGF0d3hR",
              "snippet": {
                "publishedAt": "2020-06-27T02:25:08Z",
                "channelId": "UCNacX3kBN4u-3MapN9N58Cg",
                "title": "Mattia Remi last scene dubbing",
                "description": "my favorite anime since 90s and my heart melted when i finished this",
                "thumbnails": {
                  "default": {
                    "url": "https://i.ytimg.com/vi/WTCkc8atwxQ/default.jpg",
                    "width": 120,
                    "height": 90
                  },
                  "medium": {
                    "url": "https://i.ytimg.com/vi/WTCkc8atwxQ/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                  },
                  "high": {
                    "url": "https://i.ytimg.com/vi/WTCkc8atwxQ/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                  },
                  "standard": {
                    "url": "https://i.ytimg.com/vi/WTCkc8atwxQ/sddefault.jpg",
                    "width": 640,
                    "height": 480
                  },
                  "maxres": {
                    "url": "https://i.ytimg.com/vi/WTCkc8atwxQ/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                  }
                },
                "channelTitle": "Kristoffer Cruz",
                "playlistId": "UUNacX3kBN4u-3MapN9N58Cg",
                "position": 15,
                "resourceId": {
                  "kind": "youtube#video",
                  "videoId": "WTCkc8atwxQ"
                }
              }
            },
            {
              "kind": "youtube#playlistItem",
              "etag": "coiIdUAIHT7cjdo7hlnIzGCPklw",
              "id": "VVVOYWNYM2tCTjR1LTNNYXBOOU41OENnLlpfbUc0SndIMVFB",
              "snippet": {
                "publishedAt": "2020-06-27T02:15:26Z",
                "channelId": "UCNacX3kBN4u-3MapN9N58Cg",
                "title": "Lee Sioaran Confession with Yukito Tsukishiro",
                "description": "Yukito Tsukishuro x Lee Shaoran confession self dubbing attempt",
                "thumbnails": {
                  "default": {
                    "url": "https://i.ytimg.com/vi/Z_mG4JwH1QA/default.jpg",
                    "width": 120,
                    "height": 90
                  },
                  "medium": {
                    "url": "https://i.ytimg.com/vi/Z_mG4JwH1QA/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                  },
                  "high": {
                    "url": "https://i.ytimg.com/vi/Z_mG4JwH1QA/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                  },
                  "standard": {
                    "url": "https://i.ytimg.com/vi/Z_mG4JwH1QA/sddefault.jpg",
                    "width": 640,
                    "height": 480
                  },
                  "maxres": {
                    "url": "https://i.ytimg.com/vi/Z_mG4JwH1QA/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                  }
                },
                "channelTitle": "Kristoffer Cruz",
                "playlistId": "UUNacX3kBN4u-3MapN9N58Cg",
                "position": 16,
                "resourceId": {
                  "kind": "youtube#video",
                  "videoId": "Z_mG4JwH1QA"
                }
              }
            },
            {
              "kind": "youtube#playlistItem",
              "etag": "_V-1a7dHaHJQzPR755QwG_mnhZY",
              "id": "VVVOYWNYM2tCTjR1LTNNYXBOOU41OENnLkNxN0dXMk8zTWh3",
              "snippet": {
                "publishedAt": "2020-06-27T02:08:11Z",
                "channelId": "UCNacX3kBN4u-3MapN9N58Cg",
                "title": "Yukito Tsukishiro x Lee Siaoran",
                "description": "self dubbing for sakura lee and siaoran",
                "thumbnails": {
                  "default": {
                    "url": "https://i.ytimg.com/vi/Cq7GW2O3Mhw/default.jpg",
                    "width": 120,
                    "height": 90
                  },
                  "medium": {
                    "url": "https://i.ytimg.com/vi/Cq7GW2O3Mhw/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                  },
                  "high": {
                    "url": "https://i.ytimg.com/vi/Cq7GW2O3Mhw/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                  },
                  "standard": {
                    "url": "https://i.ytimg.com/vi/Cq7GW2O3Mhw/sddefault.jpg",
                    "width": 640,
                    "height": 480
                  },
                  "maxres": {
                    "url": "https://i.ytimg.com/vi/Cq7GW2O3Mhw/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                  }
                },
                "channelTitle": "Kristoffer Cruz",
                "playlistId": "UUNacX3kBN4u-3MapN9N58Cg",
                "position": 17,
                "resourceId": {
                  "kind": "youtube#video",
                  "videoId": "Cq7GW2O3Mhw"
                }
              }
            },
            {
              "kind": "youtube#playlistItem",
              "etag": "1HGPi_0uqNJ2sARR2Cda0WvnKMc",
              "id": "VVVOYWNYM2tCTjR1LTNNYXBOOU41OENnLl9idDF4YXZ4emRJ",
              "snippet": {
                "publishedAt": "2020-06-27T01:58:29Z",
                "channelId": "UCNacX3kBN4u-3MapN9N58Cg",
                "title": "Justin Lee Jessie Han Self Dub",
                "description": "Korean drama self dub attempt",
                "thumbnails": {
                  "default": {
                    "url": "https://i.ytimg.com/vi/_bt1xavxzdI/default.jpg",
                    "width": 120,
                    "height": 90
                  },
                  "medium": {
                    "url": "https://i.ytimg.com/vi/_bt1xavxzdI/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                  },
                  "high": {
                    "url": "https://i.ytimg.com/vi/_bt1xavxzdI/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                  },
                  "standard": {
                    "url": "https://i.ytimg.com/vi/_bt1xavxzdI/sddefault.jpg",
                    "width": 640,
                    "height": 480
                  },
                  "maxres": {
                    "url": "https://i.ytimg.com/vi/_bt1xavxzdI/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                  }
                },
                "channelTitle": "Kristoffer Cruz",
                "playlistId": "UUNacX3kBN4u-3MapN9N58Cg",
                "position": 18,
                "resourceId": {
                  "kind": "youtube#video",
                  "videoId": "_bt1xavxzdI"
                }
              }
            },
            {
              "kind": "youtube#playlistItem",
              "etag": "HKcICMakQR52sY91UUL-EZ51rWQ",
              "id": "VVVOYWNYM2tCTjR1LTNNYXBOOU41OENnLmQ1MnJ1OG5qUlpJ",
              "snippet": {
                "publishedAt": "2020-06-26T14:12:03Z",
                "channelId": "UCNacX3kBN4u-3MapN9N58Cg",
                "title": "Close up commercial dub attempt",
                "description": "recreating this iconic commercial featuring LGBT as theme",
                "thumbnails": {
                  "default": {
                    "url": "https://i.ytimg.com/vi/d52ru8njRZI/default.jpg",
                    "width": 120,
                    "height": 90
                  },
                  "medium": {
                    "url": "https://i.ytimg.com/vi/d52ru8njRZI/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                  },
                  "high": {
                    "url": "https://i.ytimg.com/vi/d52ru8njRZI/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                  },
                  "standard": {
                    "url": "https://i.ytimg.com/vi/d52ru8njRZI/sddefault.jpg",
                    "width": 640,
                    "height": 480
                  },
                  "maxres": {
                    "url": "https://i.ytimg.com/vi/d52ru8njRZI/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                  }
                },
                "channelTitle": "Kristoffer Cruz",
                "playlistId": "UUNacX3kBN4u-3MapN9N58Cg",
                "position": 19,
                "resourceId": {
                  "kind": "youtube#video",
                  "videoId": "d52ru8njRZI"
                }
              }
            },
            {
              "kind": "youtube#playlistItem",
              "etag": "gH2H4ANB_TwhaYh7ncDjztaC4Es",
              "id": "VVVOYWNYM2tCTjR1LTNNYXBOOU41OENnLk1lRVhCVnFTQ1JR",
              "snippet": {
                "publishedAt": "2020-06-26T13:35:06Z",
                "channelId": "UCNacX3kBN4u-3MapN9N58Cg",
                "title": "Eden Cheese Christmas Commercial dubbing attempt",
                "description": "As part of my hobby to recreate iconic scenes from the 90s, I decided to self dub this vintage Mcdonalds commercial",
                "thumbnails": {
                  "default": {
                    "url": "https://i.ytimg.com/vi/MeEXBVqSCRQ/default.jpg",
                    "width": 120,
                    "height": 90
                  },
                  "medium": {
                    "url": "https://i.ytimg.com/vi/MeEXBVqSCRQ/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                  },
                  "high": {
                    "url": "https://i.ytimg.com/vi/MeEXBVqSCRQ/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                  },
                  "standard": {
                    "url": "https://i.ytimg.com/vi/MeEXBVqSCRQ/sddefault.jpg",
                    "width": 640,
                    "height": 480
                  },
                  "maxres": {
                    "url": "https://i.ytimg.com/vi/MeEXBVqSCRQ/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                  }
                },
                "channelTitle": "Kristoffer Cruz",
                "playlistId": "UUNacX3kBN4u-3MapN9N58Cg",
                "position": 20,
                "resourceId": {
                  "kind": "youtube#video",
                  "videoId": "MeEXBVqSCRQ"
                }
              }
            }
          ])
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
                <div key={data.id.videoId}>
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
    
    <div style={bannerSize ? {height: "350px"} : {height: "100vh"}} className="hero-image" >
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
