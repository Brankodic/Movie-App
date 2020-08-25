import React, { useState } from "react";
import { createUseStyles } from "react-jss";

import Backdrop from "./Backdrop/Backdrop";
import MovieRoulette from "../MovieRoulette/MovieRoulette";
import RouletteButton from "../Buttons/RouletteButton/RouletteButton";

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
  const [modal, setModal] = useState(false);
  const classes = useStyles();

  return (
    <div>
      <Backdrop modal={modal} closeModal={() => setModal(false)} />
      <div className={modal ? classes.modal : classes.modalFalse}>
        <MovieRoulette />
      </div>
      <RouletteButton openModal={() => setModal(true)} />
    </div>
  );
};

export default Modal;
