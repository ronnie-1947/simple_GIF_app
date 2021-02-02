import React, {useState, useEffect} from 'react';
import axios from 'axios';

const API_KEY = process.env.REACT_APP_GIF_API_KEY;

const Random = () => {

    const [gif, setGif] = useState(null)

    const handleClick = async()=>{
        const {data} = await axios.get(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`);
        const imgSrc = data.data.images.downsized_large.url;
        
        setGif(imgSrc)
    }

    useEffect(()=>{
        handleClick()
    },[])


    return (
        <div className='container'>
            <h1>Random Gif</h1>
            {
                gif ? <img width="500" src={`${gif}`} alt="Random Gif"/>: null
            }
            <button onClick={handleClick}>Click for New</button>
        </div>
    )
}

export default Random
