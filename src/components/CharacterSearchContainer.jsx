import React from 'react'

function CharacterSearchContainer() {

    const [search, setSearch] = useState([])
    const [results, setResults] = useState([])

    async function handleSubmit(e) {
        console.log("Searched!")
        e.preventDefault();
        try {
            const ts = "1";
            const publicKey = "bae264a78d7aecbdf0c29743a7238fcf"
            const privateKey = "d7947ba99955b0776f74ec69494c5aa2c8517542"
            const hashKey = "4c28d14aff270e81fe72ecb1a63adeee"
            const URL = `https://gateway.marvel.com:443/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hashKey}`

            const res = await fetch(URL);
            const data = await res.json();
            console.log(`Look ${JSON.stringify(data.data.results[0])}`)
            setSearch(data.data.results)
        } catch (err) {
          console.log(err)
        }
    }

    function handleSearch(e) {
      e.preventDefault();
      setSearch(e.target.value)
    }

  return (
    <div>SearchContainer</div>
  )
}

export default CharacterSearchContainer