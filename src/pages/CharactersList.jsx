import '../styles/Character.css'
import React from 'react';
import Header from "../components/Header";
import CharacterSearchContainer from "../components/CharacterSearchContainer"
import CharacterShow from "./CharacterShow";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { useParams } from 'react-router';
const hash = require('object-hash')

function CharactersList() {

  
    const [characters, setCharacters] = useState([]);
    const [offset, setOffset] = useState(0)

    const ts = "1";
    const publicKey = process.env.REACT_APP_PUBLIC_KEY
    const privateKey = process.env.REACT_APP_PRIVATE_KEY
    const hashKey = process.env.REACT_APP_HASH_KEY
    const URL = `https://gateway.marvel.com:443/v1/public/characters?offset=${offset}&ts=${ts}&apikey=${publicKey}&hash=${hashKey}`

    const getCharacters = async () => {
      const res = await fetch(URL);
      const data = await res.json();
      setCharacters(data.data.results)
      setOffset(offset + 20) 
    }

    useEffect(() => {
      getCharacters();
    }, []);

    const loading = () => {
      return <h1>Loading the Marvel Universe...</h1>
    };

  const showCharacters = characters.map((character, idx) => {
    return (
      <div className="CharacterList" key={character.id}>
        <Link to={`/marvel/characters/${character.id}`} key={character.id}>
          <img src={`${character.thumbnail.path}/portrait_xlarge.${character.thumbnail.extension}`}/>
        </Link>        
        <h3 className="CharacterName">{character.name}</h3>
      </div>
    )
  })

return (
  <div className="CharactersListPage">
      <Header />
      <div className="CharactersListTitle">
        <h1 className="CharacterTitleText">Characters</h1>
      </div>
      <div className="SearchContainer">
        <CharacterSearchContainer />
      </div>
      <div className="CharacterListContainer">
        {showCharacters}
      </div>
      <div className="NextButtonContainer">
        <button className="NextButton" onClick={getCharacters}>See More</button>
      </div>
      <div className="CharacterListAttributionContainer">
        <p>Data provided by Marvel. © 2014 Marvel</p>
      </div>  
  </div>
)
}

export default CharactersList