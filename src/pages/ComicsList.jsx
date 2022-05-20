import '../styles/Comic.css'
import React from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";
import ComicSearchContainer from "../components/ComicSearchContainer"
import ComicShow from './ComicShow';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const hash = require('object-hash');

function ComicsList(props) {

  const [offset, setOffset] = useState(0);
  const [comics, setComics] = useState([]);

  const ts = "1";
  const publicKey = process.env.REACT_APP_PUBLIC_KEY
  const privateKey = process.env.REACT_APP_PRIVATE_KEY
  const hashKey = process.env.REACT_APP_HASH_KEY
  const URL = `https://gateway.marvel.com:443/v1/public/comics?offset=${offset}&ts=${ts}&apikey=${publicKey}&hash=${hashKey}`
 
    const getComics = async () => {
      const res = await fetch(URL);
      const data = await res.json();
      setComics(data.data.results)
      setOffset(offset + 20)
    }

    useEffect(() => {
      getComics();
    }, []);

    const loading = () => {
      return <h1>Loading the Marvel Universe...</h1>
    };
  
    const showComics = comics.map((comic, idx) => {
      console.log(comic)
      return (
        <div className="ComicList" key={idx}>
          <Link to={`/marvel/comics/${comic.id}`} key={idx}>
            <img src={`${comic.thumbnail.path}/portrait_xlarge.${comic.thumbnail.extension}`}/>
          </Link>        
          <h3 className="ComicName">{comic.title}</h3>
        </div>
      )
    })

    return (
      <div className="ComicsListPage">
        <Header />
        <div className="ComicsPageTitle">
          <h1 className="ComicsPageTitleText">Comics</h1>
        </div>
        <div className="SearchContainer">
          <ComicSearchContainer />
        </div>
        <div className="ComicsListContainer">
          {showComics}
        </div>
        <div className="NextButtonContainer">
        <button className="NextButton" onClick={getComics}>See More</button>
      </div>
      <div className="ComicListAttributionContainer">
        <p>Data provided by Marvel. © 2014 Marvel</p>
      </div>
    </div>
  )
}

export default ComicsList;