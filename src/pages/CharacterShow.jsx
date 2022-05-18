import '../styles/Character.css'
import React, { useState, useEffect } from 'react'
import Header from "../components/Header";
import { useParams } from 'react-router';

function CharacterShow(props) {

  console.log(props)

  const [character, setCharacter] = useState(null);
  const params = useParams();

  const characterId = params.id
  console.log(characterId)

  const ts = "1";
      console.log(ts)

  const publicKey = "bae264a78d7aecbdf0c29743a7238fcf"
  const privateKey = "d7947ba99955b0776f74ec69494c5aa2c8517542"

  const hashKey = "4c28d14aff270e81fe72ecb1a63adeee"
  console.log(hashKey)

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
        <div className="CharacterShowContainer">
          <div className="CharacterShowTItle">
            <h2 className="CharacterShowTitleText">Character Show Page</h2>
          </div>
          <div className="CharacterShowData">
            <h2>{character.name}</h2>
            <img src={`${character.thumbnail.path}/portrait_xlarge.${character.thumbnail.extension}`}/>
            <h3>{character.description}</h3>
            <h2>Appearances:</h2>
            {showStories}
          </div>
        </div>
        : null }
        </div>
  )
}

export default CharacterShow