import React from 'react'
import Header from "../components/Header";

function CharacterShow(props) {

console.log(props)

const CharacterItemData = props.Characters.data.results[0]

  return (
    <div>
        <Header />
        <h2>Character Show Page</h2>
        <h3>Name: {CharacterItemData.name}</h3>
        <img src={`${CharacterItemData.thumbnail.path}.${CharacterItemData.thumbnail.extension}`} alt={CharacterItemData.name}/>
        <h4>Bio:</h4>
        <p>{CharacterItemData.description}</p>
    </div>
  )
}

export default CharacterShow