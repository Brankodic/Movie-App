import React, { useState, useEffect } from "react";

import * as constants from "../../../constants";
import { getData } from "../../services/api";
import useStyles from "./style";

import { ButtonLoadMore, Modal, MovieCards} from "../../components"

const { API_KEY, API_URL_MAIN } = constants;
const GET_MOVIES_URL = `${API_URL_MAIN}popular?api_key=${API_KEY}&language=en-US&page=1`;
const GET_MORE_MOVIES_URL = `${API_URL_MAIN}popular?api_key=${API_KEY}&language=en-US&page=`;

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
        const res = await getData(GET_MOVIES_URL);
        setState({
          ...movieListState,
          moviesArray: res.results,
        });
      })();
  }, []);

  const handleLoadMore = () => {
    if (loadMoreCounter % 3 == 0)
      (async () => {
        const res = await getData(`${GET_MORE_MOVIES_URL}${apiMoviesPage}`);
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
