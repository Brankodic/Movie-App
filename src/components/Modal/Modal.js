import React, { useState } from "react";

import Backdrop from "../BackdropModal/Backdrop";
import RouletteButton from "../RouletteButton/RouletteButton";
import MovieRoulette from "../MovieRoulette/MovieRoulette";
import useStyles from "./style";

const Modal = () => {
  const [state, setState] = useState(false);
  const classes = useStyles();
  const { modal, modalFalse } = classes;

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
