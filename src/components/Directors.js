import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      {directors.map(director => (
        <div>
          {director.name}
          <ul>
            {director.movies.map(movie => (
              <li>{movie}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Directors;
