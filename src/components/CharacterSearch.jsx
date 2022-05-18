import React, { useState } from 'react'

function CharacterSearch() {

    const [query, setQuery] = useState([])

    function handleSubmit(e) {
      e.preventDefault()
      console.log(query)
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={(e) => setQuery(e.target.value)} value={query} />
            <button>SEARCH</button>
        </form>
    </div>
  )
}
 
export default CharacterSearch