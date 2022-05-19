import '../App.css';
import React, { useState, useEffect } from 'react'
import Header from "../components/Header";
import { useParams } from 'react-router';
import { Link } from 'react-router-dom'

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
      setComic(data.data.results[0])
    }
  
    useEffect(() => {
      getComicInfo();
    }, [])

  const showCreators = comic ? comic.creators.items.map((creator, idx) => {
    console.log(creator)
    return (
      <div className="CreatorList" key={idx}>       
        <h3 className="CreatorName">{creator.name}</h3>
      </div>
    )
  })
: <h2>Loading Creators...</h2>

  return (
    <div className="ComicShowPage">
        <Header />
        { comic ?
        <div className="ComicShowContainer">
          <div className="ComicShowPageHeader">
          </div>
          <div className="ComicShowData">
            <div className="ComicShowImage">
            <img src={`${comic.thumbnail.path}/portrait_xlarge.${comic.thumbnail.extension}`}/>
            </div>
            <div className="ComicShowInfoText">
              <h2 className="ComicShowTitleText">{comic.title}</h2>
              <h2>Creators:</h2>
              {showCreators}
              <h3>{comic.description}</h3>
            </div>
          </div>
        </div>
        : null }
        <div className="BackButtonContainer">
        <Link className="HomePageLinks" to="/marvel/comics">
          <button className="BackButton">Back to Comics</button>
        </Link>
        </div>
    </div>
  )
}

export default ComicShow