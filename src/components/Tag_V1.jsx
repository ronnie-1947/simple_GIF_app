import React, {useState, useEffect} from 'react';
import axios from 'axios';

const API_KEY = process.env.REACT_APP_GIF_API_KEY;

const Tag = () => {

    const [tag, setTag] = useState('')
    const [gif, setGif] = useState(null)

    const handleClick = async(tag)=>{
        const {data} = await axios.get(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`);
        const imgSrc = data.data.images.downsized_large.url;
        
        setGif(imgSrc)
    }

    useEffect(()=>{
        handleClick('dog')
    },[])


    return (
        <div className='container'>
            <h1>Random {tag} Gif</h1>
            {
                gif ? <img width="500" src={`${gif}`} alt="Tag Gif"/>: null
            }
            <input value={tag} onChange={e=>setTag(e.target.value)} type="text"/>
            <button onClick={()=>handleClick(tag)}>Click for New</button>
        </div>
    )
}

export default Tag
