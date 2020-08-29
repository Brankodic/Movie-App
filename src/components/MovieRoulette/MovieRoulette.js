import React, { useState, useEffect, useRef } from "react";
import { createUseStyles } from "react-jss";
import { FaDiceD20 } from "react-icons/fa";
import { Link } from "react-router-dom";

import RouletteInput from "./RouletteInput/RouletteInput";

const ALERT_MESSAGE = "Please choose a genre";
const API_KEY = process.env.API_KEY;
const GET_RANDOM_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=`;
const ROULETTE_TEXT = "Movie roulette : ";
const SINGLE_MOVIE_URL = '/single-movie-page/';

const useStyles = createUseStyles({
  h3: {
    color: "white",
    textShadow: "1px 2px black",
    textAlign: "center",
  },
  button: {
    color: "white",
    marginLeft: 130,
    marginTop: 30,
    fontSize: "2.5em",
    transition: "0.3s",
    "&:hover": {
      transition: "0.3s",
      transform: "scale(1.1)",
      cursor: "pointer",
    },
  },
});

const MovieRoulette = () => {
  const [roulette, setState] = useState({
    movieId: 0,
    genre: 0,
  });
  
  const { movieId, genre } = roulette;
  const classes = useStyles();
  const isMounted = useRef(false);

  useEffect(() => {
    if (isMounted.current) {
      async function getRandomMovieId() {
        const res = await fetch(`${GET_RANDOM_URL}${genre}`);
        res
          .json()
          .then((res) => {
            setState({
              ...roulette,
              movieId: res.results[Math.floor(Math.random() * 20)].id,
            });
          })
          .catch((err) => console.log(err));
      }
      getRandomMovieId();
    } else {
      isMounted.current = true;
    }
  }, [roulette.genre]);

  const handleGenre = (id) => {
    setState({ ...roulette, genre: id });
  };

  return (
    <div className={classes.div}>
      <h3 className={classes.h3}>{ROULETTE_TEXT}</h3>
      <RouletteInput handleGenre={handleGenre} genre={genre} />
      {roulette.movieId > 0 ? (
        <Link to={`${SINGLE_MOVIE_URL}${movieId}`}>
          <FaDiceD20 className={classes.button}></FaDiceD20>
        </Link>
      ) : (
        <FaDiceD20
          onClick={() => alert(ALERT_MESSAGE)}
          className={classes.button}
        />
      )}
    </div>
  );
};

export default MovieRoulette;
