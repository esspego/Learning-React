import { useContext, useEffect, useState } from "react"
import  GifsContext from "context/GifsContextProvider"
import getGifs from "services/getGifs"

export function useGifs({keyword} = {keyword: null}) {
    const [loading, setLoading] = useState(false)
    const {gifs, setGifs} = useContext(GifsContext)
    // const [gifs, setGifs] = useState([])


    useEffect(()=>{
        setLoading(true)

        const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random'
        getGifs({keyword : keywordToUse})
        .then(gifs => {
            setGifs(gifs)
            setLoading(false)
            localStorage.setItem('lastKeyword', keyword)
        })
    }, [keyword])

    return {loading, gifs}
}