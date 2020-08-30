import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  backdrop: {
    width: "100%",
    height: "100%",
    position: "fixed",
    zIndex: "120",
    left: "0",
    top: "0",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
});
const Backdrop = (props) => {
  const classes = useStyles();
  const { backdrop } = classes;
  const { modal, closeModal } = props;

  return modal ? (
    <div className={backdrop} onClick={() => closeModal()}></div>
  ) : null;
};

export default Backdrop;
