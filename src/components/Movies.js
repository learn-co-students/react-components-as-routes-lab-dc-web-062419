import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {
          movies.map(movie => {
            return (
            <div>
              <h3>{movie.title}</h3>
              <strong>Run Time:</strong> {movie.time} minutes
              <br />
              <br />
              <strong>Genres:</strong> {movie.genres.map(genre => <ul>{genre}</ul>)}
              <br />
            </div>
            )
          })
        }
    </div>
  );
};

export default Movies;
