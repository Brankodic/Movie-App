import React, { useState } from "react";
import { createUseStyles } from "react-jss";

import Backdrop from "./Backdrop/Backdrop";
import RouletteButton from "../Buttons/RouletteButton/RouletteButton";
import MovieRoulette from "../MovieRoulette/MovieRoulette";

const useStyles = createUseStyles({
  modal: {
    position: "fixed",
    zIndex: 500,
    background: "linear-gradient(to top left, #006064  0%, #5DC8CD 100%)",
    width: 300,
    height: 300,
    left: "calc(50% - 150px)",
    padding: 5,
    top: "30%",
    transition: "all 0.3s ease-out",
    borderRadius: 5,
    transform: "translateY(0)",
    opacity: 1,
  },
  modalFalse: {
    position: "fixed",
    zIndex: 500,
    background: "linear-gradient(to top left, #006064  0%, #5DC8CD 100%)",
    width: 300,
    height: 300,
    left: "calc(50% - 150px)",
    padding: 5,
    top: "30%",
    transition: "all 0.3s ease-out",
    borderRadius: 5,
    transform: "translateY(-100vh)",
    opacity: 0,
  },
});

const Modal = () => {
  const [state, setState] = useState(false);
  const classes = useStyles();
  const { modal , modalFalse} = classes;

  return (
    <div>
      <Backdrop modal={state} closeModal={() => setState(false)} />
      <div className={state ? modal : modalFalse}>
        <MovieRoulette />
      </div>
      <RouletteButton openModal={() => setState(true)} />
    </div>
  );
};

export default Modal;
