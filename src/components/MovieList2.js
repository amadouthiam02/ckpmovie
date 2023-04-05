import React from 'react'




function MovieList2(props) 
{
    
        return (

        <>
            
                {props.mylist.map((movie)=>(
                <div className="list-group">
                    <ul>
                        <li key={movie.title}>
                            {movie.title} 
                            <button onClick= {()=>props.handleEdit(movie.title)}>Edit</button> 
                            <button onClick= {()=>props.handleDelete(movie.title)}>X</button></li>  
                            {movie.description} <br /> 
                            Rating: {movie.rating} <br />
                            {movie.posterURL} <hr />
                    </ul> 
                </div>  
                    )) }
                    
                                    
         </>  

    )
}

export default MovieList2
