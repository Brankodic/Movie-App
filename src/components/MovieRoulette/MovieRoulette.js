import React, { useState, useEffect, useRef } from "react";
import { FaDiceD20 } from "react-icons/fa";
import { Link } from "react-router-dom";

import * as constants from "../../../constants";
import { getData } from "../../services/api";
import RouletteInput from "../RouletteInput/RouletteInput";
import useStyles from "./style";

const { API_KEY, SINGLE_MOVIE_URL } = constants;
const ALERT_MESSAGE = "Please choose a genre";
const GET_RANDOM_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=`; 

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
        const res = await getData(`${GET_RANDOM_URL}${genre}`);
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

  return (
    <div>
      <h3 className={h3}>Movie Roulette : </h3>
      <RouletteInput handleGenre={handleGenre} genre={genre} />
      {movieId > 0 ? (
        <Link to={`${SINGLE_MOVIE_URL}${movieId}`}>
          <FaDiceD20 className={button}></FaDiceD20>
        </Link>
      ) : (
        <FaDiceD20
          onClick={() => alert(ALERT_MESSAGE)}
          className={button}
        />
      )}
    </div>
  );
};

export default MovieRoulette;
