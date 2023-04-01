import React from 'react'
//import '../App.css';

function MovieList(props) {
   // console.log(`ma props movielist est ${mylist} `)
   const styles = {
    border: '1px solid rgba(0, 0, 0, 0.05)'
     }   
    return (
        <div>
            <table style={styles}>
                <thead>
                    <tr>
                        <th>Titre</th>
                        <th>Description</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <hr />
                <tbody>
                    {props.mylist.map((movie)=> 
                    <div>
                                                    
                        
                            <tr>
                                <th>{movie.title}</th>
                                <th>{movie.description}</th>
                                <th><button>..</button></th>
                            </tr>
                        

                        
                                                
                    </div>
                                )
                }
            </tbody>
        </table>
        <hr />
        <input type="text" placeholder="Ajouter un film" />
        <button>Ajouter </button>
        </div>
    )
}

export default MovieList
