import React from "react";
import useStyles from "./style";

const Rating = (props) => {
  const classes = useStyles();
  const { rating } = classes;
  const { voteAverage } = props;

  return (
    <p className={rating}>
      <strong>{voteAverage}</strong>
    </p>
  );
};

export default Rating;
