import React from "react";
import useStyles from "./style";

const Image = (props) => {
  const { imageUrl } = props;

  const classes = useStyles();
  const { img } = classes;
  
  return <img alt="Movie Image" className={img} src={imageUrl} />;
};

export default Image;
