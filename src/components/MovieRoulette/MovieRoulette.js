import React, { useState, useEffect, useRef } from "react";
import { FaDiceD20 } from "react-icons/fa";
import { Link } from "react-router-dom";

import * as constants from "../../../constants";
import { getData, getRandomMovieUrl } from "../../services/api";
import useStyles from "./style";
import { RouletteInput } from "../";

const { API_KEY, SINGLE_MOVIE_URL } = constants;
const ALERT_MESSAGE = "Please choose a genre";
const generateMovieUrl = (id) => {
  return `${SINGLE_MOVIE_URL}${id}`;
};

const MovieRoulette = () => {
  const [roulette, setState] = useState({
    movieId: 0,
    genre: 0,
  });
  const { movieId, genre } = roulette;

  const classes = useStyles();
  const { h3, button } = classes;
  const isMounted = useRef(false);

  useEffect(() => {
    if (isMounted.current)
      (async () => {
        const res = await getData(getRandomMovieUrl(API_KEY, genre));
        setState({
          ...roulette,
          movieId: res.results[Math.floor(Math.random() * 20)].id,
        });
      })();
    isMounted.current = true;
  }, [genre]);

  const handleGenre = (id) => {
    setState({ ...roulette, genre: id });
  };

  const genreNotSet = genre === 0;
  const genreIsSet = genre > 0;

  return (
    <>
      <h3 className={h3}>Movie Roulette : </h3>
      <RouletteInput handleGenre={handleGenre} genre={genre} />
      {genreIsSet && (
        <Link to={generateMovieUrl(movieId)}>
          <FaDiceD20 className={button}></FaDiceD20>
        </Link>
      )}
      {genreNotSet && (
        <FaDiceD20 onClick={() => alert(ALERT_MESSAGE)} className={button} />
      )}
    </>
  );
};

export default MovieRoulette;
