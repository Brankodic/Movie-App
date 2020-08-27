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
  const [movieListState, setState] = useState({
    apiMoviesPage: 2,
    loadMoreCounter: 1,
    movieSliceValue: 6,
    moviesArray: [],
  });

  const classes = useStyles();

  async function fetchMovies() {
    if (movieListState.loadMoreCounter < 2) {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
      );
      res
        .json()
        .then((res) => {
          setState({
            ...movieListState,
            moviesArray: res.results,
          });
        })
        .catch((err) => consoleLog(err));
    }
  }

  useEffect(() => {
    fetchMovies();
  }, []);

  const handleLoadMore = () => {
    if (movieListState.loadMoreCounter % 3 == 0) {
      async function fetchMoreMovies() {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${movieListState.apiMoviesPage}`
        );
        res
          .json()
          .then((res) => {
            setState({
              ...movieListState,
              moviesArray: movieListState.moviesArray.concat(res.results),
              apiMoviesPage: movieListState.apiMoviesPage + 1,
              loadMoreCounter: movieListState.loadMoreCounter + 1,
              movieSliceValue: movieListState.movieSliceValue + 6,
            });
          })
          .catch((err) => consoleLog(err));
      }
      fetchMoreMovies();
    }
    setState({
      ...movieListState,
      loadMoreCounter: movieListState.loadMoreCounter + 1,
      movieSliceValue: movieListState.movieSliceValue + 6,
    });
  };

  return (
    <>
      <div className={classes.movies}>
        {movieListState.moviesArray
          .slice(0, movieListState.movieSliceValue)
          .map((movie) => (
            <MovieCards key={movie.id} movie={movie} />
          ))}
        ;
      </div>
      <Modal />
      <LoadMoreButton load={handleLoadMore} />
    </>
  );
};

export default MovieListPage;
