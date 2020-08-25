import React, { useState }from 'react';
import './nav.css'

function SearchBar({onSearch}){
    const [city, setCity] = useState("");
    return(

        <form onSubmit={(e) => {
            e.preventDefault();
            onSearch(city);
          }}>
            <input
              type="text"
              placeholder="Ciudad..."
              value={city}
              onChange={e => setCity(e.target.value)}
            />
            <input type="button" className="btn btn-outline-dark button" type="submit" value="Agregar"  />
          </form>
    )
}
export default SearchBar;