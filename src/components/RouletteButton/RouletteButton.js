import React from "react";
import useStyles from "./style";

const RouletteButton = (props) => {
  const { openModal } = props;
  const classes = useStyles();
  const { roulette } = classes;

  return (
    <button className={roulette} onClick={openModal}>
      Roulette
    </button>
  );
};

export default RouletteButton;
