import React from 'react'
import { Link } from 'react-router-dom'




function MovieList2(props) 
{
    
        return (

        <>
            <ul className="list-group">            
                {props.mylist.map((movie)=>(
               

                        <li key={movie.id}>
                            {movie.title}-{movie.id} <button onClick= {()=>props.handleOpen(movie.title)}>Ouvrir</button>
                            <button onClick= {()=>props.handleEdit(movie.title)}>Edit</button> 
                            <button onClick= {()=>props.handleDelete(movie.title)}>X</button> <br/>

                        
                            {movie.description} <br /> 
                            Rating: {movie.rating} <br />
                            {movie.posterURL} <br />
                             <hr />
                        </li> 
                 
                    )) }
                    
            </ul>                         
         </>  

    )
}

export default MovieList2
