import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <React.Fragment>
      {actors.map(actor => (
        <div>
          <h1>{actor.name}</h1>
          <ul>
            {actor.movies.map(movie => (
              <li>{movie}</li>
            ))}
          </ul>
        </div>
      ))}
    </React.Fragment>
  );
};

export default Actors;
