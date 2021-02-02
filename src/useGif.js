import {useState, useEffect} from 'react';
import axios from 'axios';

const API_KEY = process.env.REACT_APP_GIF_API_KEY;
const url = ``

const useGif = (tag) => {
    const [gif, setGif] = useState(null)

    const handleClick = async(tag)=>{
        const {data} = await axios.get(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`);
        const imgSrc = data.data.images.downsized_large.url;
        
        setGif(imgSrc)
    }

    useEffect(()=>{
        handleClick('dog')
    },[])

    return gif;

}

export default useGif;
