import React from 'react'

function ComicShow(props) {

    console.log(props)

    const ComicItemData = props.Comics.data.results[0]
    console.log(ComicItemData)

  return (
    <div>
        <h1>Comic Show Page</h1>
        <h2>Title: {ComicItemData.title}</h2>
        <img src={`${ComicItemData.thumbnail.path}.${ComicItemData.thumbnail.extension}`} alt={ComicItemData.title} />
        <p>{`Price: $  ${ComicItemData.prices[0].price}`}</p>
        <h6>Writers:</h6>
        <p>{`${ComicItemData.creators.items[0].name}, ${ComicItemData.creators.items[1].name}`}</p>
    </div> 
  )
}

export default ComicShow