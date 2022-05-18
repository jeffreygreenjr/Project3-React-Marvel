import React from 'react'

function ResultsCharacter(props) {

    console.log(props)

    const showResults = props.results.map((result, idx) => {
        return(
            <div className="ResultsList">
            <img src={`${result.thumbnail.path}/portrait_xlarge.${result.thumbnail.extension}`} alt={result.name}/>
            <h1>{result.name}</h1>
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

export default ResultsCharacter