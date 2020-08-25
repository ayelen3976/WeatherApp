import React from 'react';
import SearchBar from './searchbar.jsx'
import './nav.css'
import { Link } from 'react-router-dom';

function Nav({onSearch}){
    return (
    <div>
     <nav>
     <Link to='/'>
    <a href="#">WeatherApp</a>
    </Link>
    <Link to='/aboutApp'>
    <a href="#" className='about'> AboutApp</a>
    </Link>
   <SearchBar onSearch={onSearch}/>
      </nav>
      </div>
 );
};
export default Nav;