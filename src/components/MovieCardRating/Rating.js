import React from "react";
import useStyles from "./style";

const Rating = (props) => {
  const { voteAverage } = props;

  const classes = useStyles();
  const { rating } = classes;

  return (
    <p className={rating}>
      <strong>{voteAverage}</strong>
    </p>
  );
};

export default Rating;
