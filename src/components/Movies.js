import React from "react";
import { movies } from "../data";

const Movies = () => {
  //

  return (
    <div>
    <h1>Movies Page</h1>
    {movies.map(movie => {
     return( <div>
        <p>Title: {movie.title}            Time: {movie.time}</p> 
       {movie.genres.map(genre => <ul>{genre}</ul>)}
       

      </div>)
    })
    }
    </div>);
};

export default Movies;
