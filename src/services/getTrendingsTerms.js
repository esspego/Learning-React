import { useState } from "react";

import {API_KEY, API_URL} from './settings'


export default function getTrendingTerms (){
    const apiUrl = `${API_URL}/trending/searches?api_key=${API_KEY}`
    
    return fetch(apiUrl)
        .then(res => res.json())
        .then(response=> {
            const {data = []} = response;
            // const gifs = data.map(image => {
            //     const {images, title, id } = image
            //     const  { url } = images.downsized_medium
            //     return { title , id, url}
            // })
            return data
        })
}