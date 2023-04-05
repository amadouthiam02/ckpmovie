//import logo from './logo.svg';
//import './App.css';
import MovieList2 from './components/MovieList2';
import { useState } from 'react';
import Filter from './components/Filter';
import MovieCard from './components/MovieCard';

function App() {
  
  //STATES--------------------------------------------------------
  const [movieList, SetMovieList] = useState(
        
    [{title:"le messager",
    description:"Film sur la vie du Prophète de l'Islam",
    posterURL:"www.film/lemessager",
    rating:5       
    },
    {title:"Harry Potter 1",
    description:"L'école des sorciers",
    posterURL:"www.film/harrypotter1",
    rating:3       
    },
    {title:"Superman I",
    description:"L'histoire de Superman 1",
     posterURL:"www.film/superman1",
    rating:3       
    },
    {title:"Spiderman",
    description:"L'histoire de Spiderman",
    posterURL:"www.film/spiderman",
    rating:1       
    }])
    
    //state pour la gestion des champs saisis

    const [newTitre, SetNewTitre] = useState("")

    const [newDesc, SetNewDesc] = useState("")

    const [newRating, SetNewRating] = useState(0)

    const [newURI, SetNewURI] = useState("")

    const [boutonAjout, SetBoutonAjout] = useState(true)

    const [newFTitre, SetNewFTitre] = useState("")

    const [newFRating, SetNewFRating] = useState(0)

    //BEHAVIOUR-------------------------------------------
      //Boutons de mise à jour et suppression dans la liste
      const handleEdit=(titre)=>{
        console.log(`Editer ${titre}`)
        const filmEdite=movieList.find((m)=>m.title===titre)
        SetNewTitre(filmEdite.title)
        SetNewDesc(filmEdite.description)
        SetNewRating(filmEdite.Rating)
        SetNewURI(filmEdite.posterURL)
        SetBoutonAjout(false)
      }

      const handleDelete=(titre)=>
      {console.log(`Supprimer ${titre}`)
        const nonUpdatedList = movieList.filter((m)=>(m.title!==titre))
          SetMovieList(nonUpdatedList)

    }

      //Fonction pour ajout de l'objet Movie
    
    const handleAjout=(titre)=>{
        if(boutonAjout){
        SetMovieList(
          [ {title:newTitre,
            description:newDesc,
            posterURL:newURI,
            rating:newRating       
            },...movieList])
        }
        else{ //mise à jour
          const nonUpdatedList = movieList.filter((m)=>(m.title!==newTitre))
          SetMovieList(
            [{title:newTitre,
              description:newDesc,
              posterURL:newURI,
              rating:newRating}, ...nonUpdatedList])
        }
          SetNewTitre("")
          SetNewDesc("") 
          SetNewRating(0)
          SetNewURI("")
          SetBoutonAjout(true)
    }
//Calculer nouvelle liste filtré

//const movieListFiltre=movieList.filter((m)=>((m.title==={newFTitre})&&(m.rating===3)))
const movieListFiltre=movieList.filter((m)=>((m.title==={newFTitre})))


    //RENDER -----------------------------------------------------

  return (
     
    <div>
    <h1>Liste de films</h1> 
    <h6><Filter   //saisirFTitre={handleSaisieFTitre} 
                  //saisirFRating={handleSaisieFRating}
                  setFTitre={SetNewFTitre}              //
                  setFRating={SetNewFRating}  
                  valSaisieFTitre={newFTitre} 
                  valSaisieFRating={newFRating}
                  /></h6><hr />

    <MovieCard   addMovie={handleAjout} 
                  // saisirTitre={handleSaisieTitre}     //onChange champ de saisie Titre
                  // saisirDesc={handleSaisieDesc}       //onChange champ de saisie Description
                  // saisirRating={handleSaisieRating}   //onChange champ de saisie Rating
                  // saisirURI={handleSaisieURI}         //onChange champ de saisie URI
                  setTitre={SetNewTitre}              //
                  setDesc={SetNewDesc} 
                  setRating={SetNewRating} 
                  setURI={SetNewURI}                    
                  valSaisieTitre={newTitre} 
                  valSaisieDesc={newDesc}
                  valSaisieRating={newRating}
                  valSaisieURI={newURI}
                  boutonAjout={boutonAjout} /> <br />
  <MovieList2 mylist={movieListFiltre} handleEdit={handleEdit} handleDelete={handleDelete} />                                              
    </div>
  );
} 

export default App;
