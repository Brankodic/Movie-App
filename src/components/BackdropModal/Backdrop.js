import React from "react";
import useStyles from "./style"

const Backdrop = (props) => {
  const classes = useStyles();
  const { backdrop } = classes;
  const { modal, closeModal } = props;

  return modal ? (
    <div className={backdrop} onClick={closeModal}></div>
  ) : null;
};

export default Backdrop;
