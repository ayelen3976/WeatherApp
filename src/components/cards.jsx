import React from 'react';
import Card from './card.jsx';
import './card.css';
function Cards({cities, onClose}) {
  if(cities){
    return (
      <div className='cards'>
        {cities.map(c => <Card
            max={c.max}
            min={c.min}
            name={c.name}
            img={c.img}
            onClose={() => onClose(c.id)}
            id={c.id}
          /> )}
      </div>
    );
  } 
  return (
      <h2>Busca tu ciudad</h2>
  )
}

export default Cards;