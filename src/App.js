//import logo from './logo.svg';
//import './App.css';
import MovieList from './components/MovieList';
import { useState } from 'react';
import Filter from './components/Filter';

function App() {

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
    
   // console.log(`ma props movielist est ${movieList}`)
  // <MovieList mylist={movieList}/>
  return (
    
    <div>
      <Filter/> 
      <hr />
      <MovieList mylist={movieList} />
      <hr />
        
    </div>
  );
} 

export default App;
