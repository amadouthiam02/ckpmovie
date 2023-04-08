import React, { useState } from 'react'
import MovieList3 from './MovieList3'

const [filterTitle, setFilterTitle] = useState("")
const [filterRating, setFilterRating] = useState(1)


function Filter({mylist}) {
    return (
        <>
            <input type="text" placeholder='Titre' value={filterTitle} onChange={(e) => setFilterTitle(e.target.value)} />
            <select name="rate" id="rate" value={filterRating} onChange={(e) => setFilterRating(e.target.value)}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>
            <div>
                
            {mylist.filter(myMovie=>
                {
                    if (filterTitle==="") return myMovie
                    else if (myMovie.title.toLowerCase().includes(filterTitle.toLowerCase())) return myMovie
                }

            ).map(movie=>(
             <li key={movie.id}> 
                <MovieList3 title={movie.title} description={movie.description} rating={movie.rating} posterURL={movie.posterURL} />
             </li>   
            ))
            }

            </div>
        </>
    )
}

export default Filter
