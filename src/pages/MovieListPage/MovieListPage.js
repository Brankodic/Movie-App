import React, { useState, useEffect } from "react";

import * as constants from "../../../constants";
import { getData, getMoreMoviesUrl, getMovieListUrl } from "../../services/api";
import useStyles from "./style";

import { ButtonLoadMore, Modal, MovieCards } from "../../components";

const { API_KEY } = constants;

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
  const { movies } = classes;

  useEffect(() => {
    if (loadMoreCounter < 2)
      (async () => {
        const res = await getData(getMovieListUrl(API_KEY));
        setState({
          ...movieListState,
          moviesArray: res.results,
        });
      })();
  }, []);

  const handleLoadMore = () => {
    if (loadMoreCounter % 3 === 0)
      (async () => {
        const res = await getData(getMoreMoviesUrl(API_KEY, apiMoviesPage));
        setState({
          ...movieListState,
          moviesArray: moviesArray.concat(res.results),
          apiMoviesPage: apiMoviesPage + 1,
          loadMoreCounter: loadMoreCounter + 1,
          movieSliceValue: movieSliceValue + 6,
        });
      })();
    setState({
      ...movieListState,
      loadMoreCounter: loadMoreCounter + 1,
      movieSliceValue: movieSliceValue + 6,
    });
  };

  return (
    <>
      <div className={movies}>
        {moviesArray.slice(0, movieSliceValue).map((movie) => (
          <MovieCards key={movie.id} movie={movie} />
        ))}
      </div>
      <Modal />
      <ButtonLoadMore load={handleLoadMore} />
    </>
  );
};

export default MovieListPage;
