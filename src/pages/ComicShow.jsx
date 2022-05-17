import '../App.css';
import React, { useState, useEffect } from 'react'
import Header from "../components/Header";
import { useParams } from 'react-router';

function ComicShow(props) {

    const [comic, setComic] = useState(null);
    const params = useParams();
  
    const comicId = params.id
    console.log(comicId)

    const ts = "1";

    const publicKey = "bae264a78d7aecbdf0c29743a7238fcf"
    const privateKey = "d7947ba99955b0776f74ec69494c5aa2c8517542"

    const hashKey = "4c28d14aff270e81fe72ecb1a63adeee"

    const URL = `https://gateway.marvel.com:443/v1/public/comics/${comicId}?ts=${ts}&apikey=${publicKey}&hash=${hashKey}`

    async function getComicInfo() {
      const res = await fetch(URL);
      const data = await res.json();
      console.log(`Look ${JSON.stringify(data.data.results[0])}`)
      setComic(data.data)
    }
  
    useEffect(() => {
      getComicInfo();
    }, [])

  return (
    <div className="ComicShowPage">
        <Header />
        <h2>Comic Show Page</h2>
        <h2></h2>
      
    </div>
  )
}

export default ComicShow