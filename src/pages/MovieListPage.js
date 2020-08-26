import React, { useState, useEffect } from "react";
import { createUseStyles } from "react-jss";

import MovieCards from "../components/MovieCards/MovieCards";
import Modal from "../components/Modal/Modal";
import LoadMoreButton from "../components/Buttons/LoadMoreButton/LoadMoreButton";

const API_KEY = process.env.API_KEY;

const useStyles = createUseStyles({
  movies: {
    display: "grid",
    gridTemplateColumns: "auto auto auto",
    gridGap: "4rem",
    width: "85%",
    alignContent: "space-around",
    margin: "0 auto",
    marginBottom: "8em",
    marginTop: "4em",
  },
});

const MovieListPage = () => {
  
  const [movieList, setMovies] = useState({
    moviesArray: [],
  });

  const classes = useStyles();

  async function fetchMovies() {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
    );
    res
      .json()
      .then((res) => {
        setMovies({
          ...movieList,
          moviesArray: res.results,
        });
      })
      .catch((err) => consoleLog(err));
  }

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <>
      <div className={classes.movies}>
        {movieList.moviesArray.slice(0,6).map( movie => (
          <MovieCards key={movie.id} movie={movie} />
        ))}
        ;
      </div>
      <Modal />
      <LoadMoreButton />
    </>
  );
};

export default MovieListPage;
