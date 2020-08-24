import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  Header: {
    fontFamily: " 'Luckiest Guy', cursive",
    textShadow: "2px 2px 1px darkred",
    textAlign: "center",
    width: "100%",
    padding: 15,
    color: "white",
    background: "linear-gradient(to top left, #006064  0%, #5DC8CD 100%)",
    position: "sticky",
    top: 0,
    left: 0,
    zIndex: 100,
    fontSize: 30,
    letterSpacing: 30,
  },
  Img: {
    position: "absolute",
    zIndex: 101,
    top: 10,
    left: 30,
    padding: 0,
    margin: 0,
    width: 50,
    height: 50,
  },
});

const header = () => {
  const classes = useStyles();
  return (
    <div>
      <img
        className={classes.Img}
        alt="Icon-popcorn"
        src="https://icons.iconarchive.com/icons/blackvariant/button-ui-requests-2/1024/PopcornTime-icon.png"
      ></img>
      <header className={classes.Header}>Movie App</header>
    </div>
  );
};

export default header;
