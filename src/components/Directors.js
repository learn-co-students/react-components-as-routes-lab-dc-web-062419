import React from 'react';
import { directors } from '../data';
import Movies from './Movies';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map(d => {
        return(<div>
          <h2>Name: {d.name}</h2>
          <h3>Movies: </h3>
          {d.movies.map(m => {
            return(
              <ul>
                <li>{m}</li>
              </ul>
            )
          })}
          </div>)
      })}
  
    </div>
  );
}

export default Directors
