import { useEffect, useState } from "react"
import getTrendingTerms from "services/getTrendingsTerms"
import { Category } from "../Category"
import React from 'react'

export default function TrendingSearches () {
    const [trends, setTrends] = useState([])

    useEffect(()=>{
        getTrendingTerms().then(setTrends)
    }, [])
    return <Category name="trends" options={trends}/>
}