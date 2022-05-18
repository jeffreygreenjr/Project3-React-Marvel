import React, { useState } from 'react'

function CharacterSearch(props) {

  return (
    <div>
        <form onSubmit={props.handleSubmit}>
            <input type="text" onChange={props.handleChange} value={props.query} />
            <button>SEARCH</button>
        </form>
    </div>
  )
}
 
export default CharacterSearch