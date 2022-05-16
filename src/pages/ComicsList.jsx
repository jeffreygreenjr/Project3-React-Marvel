import React from 'react'
import ComicShow from './ComicShow'

function ComicsList(props) {

  const Comics = {
    "code": 200,
    "status": "Ok",
    "copyright": "© 2022 MARVEL",
    "attributionText": "Data provided by Marvel. © 2022 MARVEL",
    "attributionHTML": "<a href=\"http://marvel.com\">Data provided by Marvel. © 2022 MARVEL</a>",
    "etag": "f4dffa2132d99a07702de2f5bdaad8564760548c",
    "data": {
      "offset": 0,
      "limit": 20,
      "total": 1,
      "count": 1,
      "results": [
        {
          "id": 75136,
          "digitalId": 53588,
          "title": "Spider-Man (2019) #5",
          "issueNumber": 5,
          "variantDescription": "",
          "description": null,
          "modified": "2020-11-26T09:09:48-0500",
          "isbn": "",
          "upc": "759606093541000511",
          "diamondCode": "NOV190910",
          "ean": "",
          "issn": "2574-5352",
          "format": "Comic",
          "pageCount": 32,
          "textObjects": [],
          "resourceURI": "http://gateway.marvel.com/v1/public/comics/75136",
          "urls": [
            {
              "type": "detail",
              "url": "http://marvel.com/comics/issue/75136/spider-man_2019_5?utm_campaign=apiRef&utm_source=bae264a78d7aecbdf0c29743a7238fcf"
            },
            {
              "type": "purchase",
              "url": "http://comicstore.marvel.com/Spider-Man-5/digital-comic/53588?utm_campaign=apiRef&utm_source=bae264a78d7aecbdf0c29743a7238fcf"
            },
            {
              "type": "reader",
              "url": "http://marvel.com/digitalcomics/view.htm?iid=53588&utm_campaign=apiRef&utm_source=bae264a78d7aecbdf0c29743a7238fcf"
            },
            {
              "type": "inAppLink",
              "url": "https://applink.marvel.com/issue/53588?utm_campaign=apiRef&utm_source=bae264a78d7aecbdf0c29743a7238fcf"
            }
          ],
          "series": {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/27022",
            "name": "Spider-Man (2019 - Present)"
          },
          "variants": [],
          "collections": [],
          "collectedIssues": [],
          "dates": [
            {
              "type": "onsaleDate",
              "date": "2020-12-09T00:00:00-0500"
            },
            {
              "type": "focDate",
              "date": "2020-11-09T00:00:00-0500"
            },
            {
              "type": "unlimitedDate",
              "date": "2021-03-15T00:00:00-0400"
            },
            {
              "type": "digitalPurchaseDate",
              "date": "2020-12-09T00:00:00-0500"
            }
          ],
          "prices": [
            {
              "type": "printPrice",
              "price": 3.99
            },
            {
              "type": "digitalPurchasePrice",
              "price": 3.99
            }
          ],
          "thumbnail": {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/a/00/5f3ee0d58298c",
            "extension": "jpg"
          },
          "images": [
            {
              "path": "http://i.annihil.us/u/prod/marvel/i/mg/a/00/5f3ee0d58298c",
              "extension": "jpg"
            }
          ],
          "creators": {
            "available": 7,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/75136/creators",
            "items": [
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/creators/13984",
                "name": "Henry Abrams",
                "role": "writer"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/creators/14057",
                "name": "J.J Abrams",
                "role": "writer"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/creators/5251",
                "name": "Vc Joe Caramagna",
                "role": "letterer"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/creators/6170",
                "name": "Olivier Coipel",
                "role": "penciler (cover)"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/creators/4300",
                "name": "Nick Lowe",
                "role": "editor"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/creators/9408",
                "name": "Sara Pichelli",
                "role": "inker"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/creators/501",
                "name": "Dave Stewart",
                "role": "colorist (cover)"
              }
            ],
            "returned": 7
          },
          "characters": {
            "available": 1,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/75136/characters",
            "items": [
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009610",
                "name": "Spider-Man (Peter Parker)"
              }
            ],
            "returned": 1
          },
          "stories": {
            "available": 2,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/75136/stories",
            "items": [
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/stories/167111",
                "name": "cover from Special Spider (2029) #5",
                "type": "cover"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/stories/167112",
                "name": "story from Special Spider (2029) #5",
                "type": "interiorStory"
              }
            ],
            "returned": 2
          },
          "events": {
            "available": 0,
            "collectionURI": "http://gateway.marvel.com/v1/public/comics/75136/events",
            "items": [],
            "returned": 0
          }
        }
      ]
    }
  }
  
const ComicData = Comics.data.results[0] 

  return (
    <div>
        <h1>Comics</h1>
        <ComicShow Comics={Comics}/>
    </div>  
  )
}

export default ComicsList;