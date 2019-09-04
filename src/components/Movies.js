import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      {movies.map(movie => (
        <React.Fragment>
          <div>{movie.title}</div>
          <ul>
            {movie.genres.map(genre => (
              <li>{genre}</li>
            ))}
          </ul>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Movies;
