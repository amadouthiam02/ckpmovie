import React,{useState} from 'react'
import Filter from './Filter'

function MovieCard() {

//state pour la gestion des champs saisis
const [movieList, setMovieList] = useState(
        
  [{id:1,
    title:"le messager",
  description:"Film sur la vie du Prophète de l'Islam",
  posterURL:"www.film/lemessager",
  rating:5       
  },
  {id:2,
    title:"Harry Potter",
  description:"L'école des sorciers",
  posterURL:"www.film/harrypotter",
  rating:3       
  },
  {id:3,
    title:"Superman",
  description:"L'histoire de Superman",
   posterURL:"www.film/superman",
  rating:3       
  },
  {id:4,
    title:"Spiderman",
  description:"L'histoire de Spiderman",
  posterURL:"www.film/spiderman",
  rating:1       
  }])

const [newTitre, setNewTitre] = useState("")

const [newDesc, setNewDesc] = useState("")

const [newRating, setNewRating] = useState(0)

const [newURI, setNewURI] = useState("")


const handleAjout=()=>
{
  
  setMovieList(
    [ {title:newTitre,
      description:newDesc,
      posterURL:newURI,
      rating:newRating       
      },...movieList])
  }
  


    return (

       <div>
            <Filter mylist={movieList}/> <br /> <hr />
            <input type="text" placeholder='Titre' value={newTitre} onChange={(e) => setNewTitre(e.target.value)} />
            <input type="text" placeholder='Description'  value={newDesc} onChange={(e) => setNewDesc(e.target.value)}/>
            <select name="rating" id="rating-select" value={newRating} onChange={(e) => setNewRating(e.target.value)}>
                <option value="">--Rating--</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <input type="text" placeholder='URI'  value={newURI} onChange={(e) => setNewURI(e.target.value)}/>
            <button onClick={handleAjout}>Ajouter</button>
        </div>
       
  );
}

export default MovieCard
