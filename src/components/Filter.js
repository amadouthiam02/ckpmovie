import React from 'react'

function Filter({setFTitre,setFRating, valSaisieFTitre, valSaisieFRating}) {
    return (
        <div>
            <input type="text" placeholder='Titre' value={valSaisieFTitre} onChange={(e) => setFTitre(e.target.value)} />
            <select name="rate" id="rate" value={valSaisieFRating} onChange={(e) => setFRating(e.target.value)}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>
    
        </div>
    )
}

export default Filter
