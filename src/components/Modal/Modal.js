import React, { useState } from "react";
import useStyles from "./style";

import { Backdrop, ButtonRoulette, MovieRoulette } from "../";

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
      <ButtonRoulette openModal={() => setState(true)} />
    </div>
  );
};

export default Modal;
