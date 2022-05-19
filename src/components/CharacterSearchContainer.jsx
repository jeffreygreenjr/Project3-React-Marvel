import React, { useState } from 'react'
import CharacterSearch from "./CharacterSearch"
import ResultsCharacter from "./ResultsCharacter"

function CharacterSearchContainer() {

    const [query, setQuery] = useState([])
    const [results, setResults] = useState([])

    async function handleSubmit(e) {
      e.preventDefault()
      try {
        const ts = "1";
        const publicKey = process.env.REACT_APP_PUBLIC_KEY
        const privateKey = process.env.REACT_APP_PRIVATE_KEY
        const hashKey = process.env.REACT_APP_HASH_KEY
        const URL = `https://gateway.marvel.com:443/v1/public/characters?name=${query}&ts=${ts}&apikey=${publicKey}&hash=${hashKey}`

        const response = await fetch(URL)
        const data = await response.json()
        setResults(data.data.results)

      } catch (err) {
        console.log(err)
      }
    }

    function handleChange(e) {
      setQuery(e.target.value)
    }

  return (
    <div>
        <CharacterSearch handleSubmit={handleSubmit} handleChange={handleChange} query={query} />
        <ResultsCharacter results={results}/>
    </div>
  )
}
 
export default CharacterSearchContainer