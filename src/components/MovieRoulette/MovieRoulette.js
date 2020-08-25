import React from "react";
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
  const classes = useStyles();

  return (
    <div className={classes.div}>
      <h3 className={classes.h3}>{ROULETTE_TEXT}</h3>
      <RouletteInput />
      <FaDiceD20 className={classes.button} />
    </div>
  );
};

export default MovieRoulette;
