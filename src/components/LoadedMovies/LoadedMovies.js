import React from "react";

import { MovieCards } from "../";

const LoadedMovies = (props) => {
  const { moviesArray, movieSliceValue } = props;

  return (
    <>
      {moviesArray.slice(0, movieSliceValue).map((movie) => (
        <MovieCards key={movie.id} movie={movie} />
      ))}
    </>
  );
};

export default LoadedMovies;
