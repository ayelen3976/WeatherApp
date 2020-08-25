import React, { useState } from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import Nav from './components/nav.jsx';
import Cards from './components/cards.jsx';
import Ciudad from './components/ciudad.jsx';
import About from './components/aboutapp.jsx';
function App() {
  const [cities, setCities]= useState([]);
  function onSearch(ciudad) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=4d52b5b750d5a63fb5093668768e7960&units=metric `).then(r => r.json())
    .then((recurso) => {


      var bandera =false;
      if(recurso.main !== undefined){
   cities.forEach(c=>{
     if (c.id===recurso.id) {
         alert("la ciudad ya se encuentra")
         bandera=true;
     }
   })
      if (!bandera) {
        const ciudad = {
          min: Math.round(recurso.main.temp_min),
          max: Math.round(recurso.main.temp_max),
          img: recurso.weather[0].icon,
          id: recurso.id,
          wind: recurso.wind.speed,
          temp: recurso.main.temp,
          name: recurso.name,
          weather: recurso.weather[0].main,
          clouds: recurso.clouds.all,
          latitud: recurso.coord.lat,
          longitud: recurso.coord.lon
        };
        setCities(oldCities => [...oldCities, ciudad]);
      }  
      
   
      } else {
        alert("Ciudad no encontrada");
      }

    });
  }
  function onClose(id) {

    setCities(olcities=>olcities.filter(c=>c.id!==id))
    
  }
  function Onfilter(ciudadId) {
  var ciudad= cities.filter(c=>c.id===parseInt(ciudadId))
  if (ciudad.length>0) {
    return ciudad[0];
}else{
  return null;
}
    }
  return (
    <div className="App">
    <Route path='/'render={() => <Nav onSearch={onSearch} /> }/>
    <Route path='/aboutapp'component={About}/>
    <Route exact path='/' render={()=>< Cards cities={cities} onClose={onClose} id={cities.id}/>} />
    <Route exact path='/ciudad/:ciudadId' render={({match}) => <Ciudad city={Onfilter(match.params.ciudadId)} />} />
    </div>
    
  );
}

export default App;
