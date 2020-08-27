import React, { useState, useEffect } from "react";
import { createUseStyles } from "react-jss";
import { FaDiceD20 } from "react-icons/fa";

import RouletteInput from "./RouletteInput/RouletteInput";

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
    genre: 0,
  });

  const classes = useStyles();

  const handleReroute = (id) => {
    if (roulette.genre === 0) {
      alert("Pls choose a genre.");
    }
    // fetch request for a random movie
  };

  const handleGenre = (id) => {
    setState({ ...roulette, genre: id });
  };

  return (
    <div className={classes.div}>
      <h3 className={classes.h3}>{ROULETTE_TEXT}</h3>
      <RouletteInput handleGenre={handleGenre} genre={roulette.genre} />
      <FaDiceD20
        onClick={() => handleReroute(roulette.genre)}
        className={classes.button}
      />
    </div>
  );
};

export default MovieRoulette;
