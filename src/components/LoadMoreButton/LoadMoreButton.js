import React from "react";
import useStyles from "./style";

const LoadMoreButton = (props) => {
  const { load } = props;
  const classes = useStyles();
  const { loadButton } = classes;

  return (
    <button className={loadButton} onClick={load}>
      Load More
    </button>
  );
};

export default LoadMoreButton;
