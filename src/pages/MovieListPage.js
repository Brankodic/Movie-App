import React, { useState, useEffect } from "react";
import { createUseStyles } from "react-jss";

import * as constants from "../services/constants";
import LoadMoreButton from "../components/Buttons/LoadMoreButton/LoadMoreButton";
import Modal from "../components/Modal/Modal";
import MovieCards from "../components/MovieCards/MovieCards";

const { API_KEY, API_URL_MAIN } = constants;
const GET_MOVIES_URL = `${API_URL_MAIN}popular?api_key=${API_KEY}&language=en-US&page=1`;
const GET_MORE_MOVIES_URL = `${API_URL_MAIN}popular?api_key=${API_KEY}&language=en-US&page=`;

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

  const {
    apiMoviesPage,
    loadMoreCounter,
    movieSliceValue,
    moviesArray,
  } = movieListState;

  const classes = useStyles();

  useEffect(() => {
    getMovies();
  }, []);

  async function getMovies() {
    if (loadMoreCounter < 2) {
      const res = await fetch(GET_MOVIES_URL);
      res
        .json()
        .then((res) => {
          setState({
            ...movieListState,
            moviesArray: res.results,
          });
        })
        .catch((err) => console.log(err));
    }
  }

  const handleLoadMore = () => {
    if (loadMoreCounter % 3 == 0) {
      async function getMoreMovies() {
        const res = await fetch(`${GET_MORE_MOVIES_URL}${apiMoviesPage}`);
        res
          .json()
          .then((res) => {
            setState({
              ...movieListState,
              moviesArray: moviesArray.concat(res.results),
              apiMoviesPage: apiMoviesPage + 1,
              loadMoreCounter: loadMoreCounter + 1,
              movieSliceValue: movieSliceValue + 6,
            });
          })
          .catch((err) => consoleLog(err));
      }
      getMoreMovies();
    }
    setState({
      ...movieListState,
      loadMoreCounter: loadMoreCounter + 1,
      movieSliceValue: movieSliceValue + 6,
    });
  };

  return (
    <>
      <div className={classes.movies}>
        {moviesArray.slice(0, movieSliceValue).map((movie) => (
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
