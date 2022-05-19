import '../styles/Character.css'
import React, { useState, useEffect } from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

function CharacterShow(props) {

  console.log(props)

  const [character, setCharacter] = useState(null);
  const params = useParams();

  const characterId = params.id
  console.log(characterId)

  const ts = "1";
  const publicKey = process.env.REACT_APP_PUBLIC_KEY
  const privateKey = process.env.REACT_APP_PRIVATE_KEY
  const hashKey = process.env.REACT_APP_HASH_KEY
  const URL = `https://gateway.marvel.com:443/v1/public/characters/${characterId}?ts=${ts}&apikey=${publicKey}&hash=${hashKey}`

  async function getCharacterInfo() {
    const res = await fetch(URL);
    const data = await res.json();
    console.log(`Look ${JSON.stringify(data.data.results[0])}`)
    setCharacter(data.data.results[0])
  }

  useEffect(() => {
    getCharacterInfo();
  }, [])

  const showStories = character ? character.series.items.map((story, idx) => {
    console.log(story)
    return (
      <div className="StoriesList" key={idx}>       
        <h3 className="StoryName">{story.name}</h3>
      </div>
    )
  })
: <h2>Loading Appearances...</h2>

  return (
    <div className="CharacterShowPage">  
        <Header />
        { character ?
        <div className="CharacterShowBody">
          <div className="CharacterShowContainer">
            <div className="CharacterShowData">
              <div className="CharacterShowImage">
                <img src={`${character.thumbnail.path}/portrait_xlarge.${character.thumbnail.extension}`}/>
              </div>
              <div className="CharacterShowInfoText">
                <h2 className="CharacterShowNameText">{character.name}</h2>
                <h3>{character.description}</h3>
                <h2>Appearances:</h2>
                {showStories}
              </div>
            </div>
            <div className="AttributionContainer">
              <p>Data provided by Marvel. © 2014 Marvel</p>
            </div>
          </div>
        </div>
        : null }
         <div className="BackButtonContainer">
        <Link className="HomePageLinks" to="/marvel/characters">
          <button className="BackButton">Back to Characters</button>
        </Link>
        </div>
        <Footer />
        </div>
  )
}

export default CharacterShow