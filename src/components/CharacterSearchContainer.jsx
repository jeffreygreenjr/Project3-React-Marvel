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
        const publicKey = "bae264a78d7aecbdf0c29743a7238fcf"
        const privateKey = "d7947ba99955b0776f74ec69494c5aa2c8517542"
        const hashKey = "4c28d14aff270e81fe72ecb1a63adeee"
        const URL = `https://gateway.marvel.com:443/v1/public/characters?name=${query}&ts=${ts}&apikey=${publicKey}&hash=${hashKey}`

        const response = await fetch(URL)
        const data = await response.json()
        // console.log(data.data.results)
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