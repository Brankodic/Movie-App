import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { createUseStyles } from "react-jss";
import { FaDiceD20 } from "react-icons/fa";

import RouletteInput from "./RouletteInput/RouletteInput";

const API_KEY = process.env.API_KEY;
const ROULETTE_TEXT = "Movie roulette : ";

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

  const classes = useStyles();

  useEffect(() => {
    async function fetchRandomMovieId() {
      const res = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=${roulette.genre}`
      );
      res
        .json()
        .then((res) => {
          const randomNum = Math.floor(Math.random() * 20);
          setState({
            ...roulette,
            movieId: res.results[randomNum].id,
          });
        })
        .catch((err) => console.log(err));
    }
    fetchRandomMovieId();
  }, [roulette.genre]);

  const handleReroute = (id) => {
    if (roulette.genre === 0) {
      alert("Pls choose a genre.");
    }
  };

  const handleGenre = (id) => {
    setState({ ...roulette, genre: id });
  };

  return (
    <div className={classes.div}>
      <h3 className={classes.h3}>{ROULETTE_TEXT}</h3>
      <RouletteInput handleGenre={handleGenre} genre={roulette.genre} />
      {roulette.movieId > 0 ? (
        <Link to={`/movie${roulette.movieId}`}>
          <FaDiceD20
            onClick={() => handleReroute(roulette.genre)}
            className={classes.button}
          ></FaDiceD20>
        </Link>
      ) : (
        <FaDiceD20
          onClick={() => handleReroute(roulette.genre)}
          className={classes.button}
        />
      )}
    </div>
  );
};

export default MovieRoulette;
