import React from "react";
import { Link } from "react-router-dom";
import useStyles from "./style"

const BackButton = () => {
  const classes = useStyles();
  const { back } = classes;

  return (
    <Link to="/">
      <button className={back}>Back</button>
    </Link>
  );
};

export default BackButton;
