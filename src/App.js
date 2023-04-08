//import logo from './logo.svg';
//import './App.css';
import React from 'react';
import MovieCard from './components/MovieCard';
import { Routes, Route } from 'react-router-dom';
import MovieDetail from './components/MovieDetail';

function App() {


  return (
     
    <div>
        <Routes>
            <Route path="/" element={<MovieCard/>}/>
            <Route path="/detail" element={<MovieDetail/>}/>
        </Routes>
    </div>

  );
} 

export default App;
