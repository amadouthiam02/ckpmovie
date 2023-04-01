import React from 'react'

function Filter() {
    return (
        <div>
            <input type="text" placeholder='Titre' />
            <select name="rate" id="rate">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>
            <button>Filtrer</button>
        </div>
    )
}

export default Filter
