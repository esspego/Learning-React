import React from "react"
import { Link } from "wouter"
import "./Category.css"

export function Category({name, options = []}) {
 return <>
    <section className="CategoryList">
        {
            options.map((singleOption , index)=>
                <div className="Category">
                    <Link to={`/search/${singleOption}`} key={index} ><h3>{singleOption}</h3></Link>
                </div>
            )
        }
    </section>
 </>
}