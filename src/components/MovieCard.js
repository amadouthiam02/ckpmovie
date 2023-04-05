import React from 'react'

function MovieCard(
  {addMovie, 
  setTitre,
  setDesc,
  setRating,
  setURI,
  valSaisieTitre,
  valSaisieDesc,
  valSaisieRating,
  valSaisieURI,
  boutonAjout}) {

    return (

       <div>
            <input type="text" placeholder='Titre' disabled={!boutonAjout} value={valSaisieTitre} onChange={(e) => setTitre(e.target.value)} />
            <input type="text" placeholder='Description'  value={valSaisieDesc} onChange={(e) => setDesc(e.target.value)}/>
            <select name="rating" id="rating-select" value={valSaisieRating} onChange={(e) => setRating(e.target.value)}>
                <option value="">--Rating--</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <input type="text" placeholder='URI'  value={valSaisieURI} onChange={(e) => setURI(e.target.value)}/>
            <button onClick={addMovie}>{(boutonAjout)? "Ajouter":"Editer"}</button>
        </div>
       
  );
}

export default MovieCard
