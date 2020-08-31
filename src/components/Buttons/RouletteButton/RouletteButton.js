import React from "react";
import { createUseStyles } from "react-jss";

const ROULETTE_BUTTON_TEXT = "Roulette";

const useStyles = createUseStyles({
  roulette: {
    fontFamily: '"Alegreya Sans SC", sans-serif',
    fontSize: 12,
    position: "fixed",
    border: "3px solid rgb(255, 255, 255)",
    right: "5%",
    bottom: "2%",
    height: 60,
    width: 60,
    borderRadius: "50%",
    boxShadow: "2px 2px 3px rgba(0, 0, 0, 0.6)",
    background: "linear-gradient(to top left, #006064  0%, #5DC8CD 100%)",
    transition: "0.2s",
    color: "white",
    textShadow: "2px 2px 2px rgba(0, 0, 0, 0.6)",
    backfaceVisibility: "hidden",
    "&:hover": {
      transition: "1s",
      transform: "scale(1.02)",
      boxShadow: "4px 4px 5px rgba(0, 0, 0, 0.6)",
      cursor: "pointer",
    },
    "&:focus": {
      outline: "none",
    },
  },
});

const RouletteButton = (props) => {
  const { openModal } = props;
  const classes = useStyles();
  const { roulette } = classes;

  return (
    <button className={roulette} onClick={() => openModal()}>
      {ROULETTE_BUTTON_TEXT}
    </button>
  );
};

export default RouletteButton;
