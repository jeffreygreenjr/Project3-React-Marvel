import React, { useState } from 'react'

function ComicSearch(props) {

  return (
    <div>
        <form onSubmit={props.handleSubmit}>
            <input type="text" onChange={props.handleChange} value={props.query} placeholder="Comic Title" />
            <button className="SearchButton">SEARCH</button>
        </form>
    </div>
  )
}
 
export default ComicSearch