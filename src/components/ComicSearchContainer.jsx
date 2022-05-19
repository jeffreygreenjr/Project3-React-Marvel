import React, { useState } from 'react'
import ComicSearch from "./ComicSearch"
import ResultsComic from "./ResultsComic"

function ComicSearchContainer() {

    const [query, setQuery] = useState([])
    const [results, setResults] = useState([])

    async function handleSubmit(e) {
      e.preventDefault()
      try {
        const ts = "1";
        const publicKey = process.env.REACT_APP_PUBLIC_KEY
        const privateKey = process.env.REACT_APP_PRIVATE_KEY
        const hashKey = process.env.REACT_APP_HASH_KEY
        const URL = `https://gateway.marvel.com:443/v1/public/comics?title=${query}&ts=${ts}&apikey=${publicKey}&hash=${hashKey}`

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
        <ComicSearch handleSubmit={handleSubmit} handleChange={handleChange} query={query} />
    <div className="ResultsContainer">
        <ResultsComic results={results}/>
    </div>
        
    </div>
  )
}
 
export default ComicSearchContainer