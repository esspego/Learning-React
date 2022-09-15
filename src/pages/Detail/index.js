import React, { useContext } from 'react'
import  GifsContext  from 'context/GifsContextProvider';
import Gif from "components/Gif"

export default function Detail({params}) {
    const {gifs} = useContext(GifsContext)

    const gifsContext = useContext(GifsContext)
    const gif = gifs.find(singleGif => singleGif.id === params.id)


    return <Gif {...gif} />
}