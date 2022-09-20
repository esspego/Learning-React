import { useState } from "react"
import { Link, useLocation } from "wouter"
import ListOfGifs from "components/ListOfGifs"
import TrendingSearches from "components/TrendingSearches"
import { useGifs } from "hooks/useGifs"



export default function Home() {
    const [keyword, setKeyword] = useState()
    const [path, pushLocation] = useLocation()

    const { loading, gifs }= useGifs({keyword: 'big ban'});

    const handleSumbit = evt => {
        evt.preventDefault()
        pushLocation(`/search/${keyword}`)
    }
    const handleChange = evt => {
        setKeyword(evt.target.value)
    }

    return (
        <>
            <form onSubmit={handleSumbit}>
                <input onChange={handleChange} type='text' value={keyword} />
            </form>
            <div className="App-results">
          </div>
            <h3 className="App-title">Última búsqueda</h3>
            <ListOfGifs gifs={gifs} />
            <h3 className="App-category">Los gifs más populares</h3>
            <div>
                <TrendingSearches/>
                
            </div>

        </>
    )
}