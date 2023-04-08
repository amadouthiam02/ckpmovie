import React, {useState} from 'react'

function MovieList3(props) 
{

    return (
        <>
            <h2>{props.title}</h2>
            <h2>{props.description}</h2>
            <h2>{props.rating}</h2>
            <h2>{props.posterURL}</h2>
        </>  



    )
}

export default MovieList3
