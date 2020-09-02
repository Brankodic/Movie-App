import React from "react";
import useStyles from "./style";

const Image = (props) => {
  const classes = useStyles();
  const { img } = classes;
  const { imageUrl } = props;
  
  return <img alt="Movie Image" className={img} src={imageUrl} />;
};

export default Image;
