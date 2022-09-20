import {Category} from "components/Category"
import { useEffect, useState } from "react"
import getTrendingTerms from "services/getTrendingsTerms"

export default function TrendingSearches () {
    const [trends, setTrends] = useState([])

    useEffect(()=>{
        getTrendingTerms().then(setTrends)
    }, [])
    return <Category name="trends" options={trends}/>
}
