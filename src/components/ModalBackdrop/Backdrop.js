import React from "react";
import useStyles from "./style";

const Backdrop = (props) => {
  const { modal, closeModal } = props;

  const classes = useStyles();
  const { backdrop } = classes;

  return (
    <>({modal && <div className={backdrop} onClick={closeModal}></div>})</>
  );
};

export default Backdrop;
