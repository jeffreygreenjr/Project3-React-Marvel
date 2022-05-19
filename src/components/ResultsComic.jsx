import React from 'react'
import { Link } from 'react-router-dom'

function ResultsComic(props) {

    const showResults = props.results.map((result, idx) => {
        return(
            <div className="ResultsList">
                <Link to={`/marvel/comics/${result.id}`} key={result.id}>
                    <img src={`${result.thumbnail.path}/portrait_xlarge.${result.thumbnail.extension}`} alt={result.name}/>
                </Link>
            <h1>{result.title}</h1>
            </div>
        )
    })

  return (
    <div>
        <div className="ResultsContainer">
            {showResults}
        </div>
        
    </div>
  )
}

export default ResultsComic