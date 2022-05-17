import React from 'react'
import Header from "../components/Header";

function CharacterShow(props) {

console.log(props)

const CharacterItemData = props.Characters.data.results[0]

  return (
    <div className="CharacterShowPage">
        <Header />
        <h2>Character Show Page</h2>
      
    </div>
  )
}

export default CharacterShow