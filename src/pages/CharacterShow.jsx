import '../App.css';
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
    setCharacter(data.data.results)
  }

  useEffect(() => {
    getCharacterInfo();
  }, [])

  return (
    <div className="CharacterShowPage">
        <Header />
        <h2>Character Show Page</h2>
      
    </div>
  )
}

export default CharacterShow