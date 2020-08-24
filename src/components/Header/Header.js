import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  header: {
    textShadow: "2px 2px 1px darkred",
    textAlign: "center",
    width: '100%',
    padding: 15,
    color: "white",
    background: "linear-gradient(to top left, #006699 0%, #009999 100%)",
    position: "sticky",
    top: 0,
    left: 0,
    zIndex: 100,
    fontSize: 30,
    letterSpacing: 30,
  },
  img: {
    position: "absolute",
    zIndex:101,
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
        className={classes.img}
        alt="Icon-popcorn"
        src="https://icons.iconarchive.com/icons/blackvariant/button-ui-requests-2/1024/PopcornTime-icon.png"
      ></img>
      <header
      className={classes.header}>
        <strong>Movie App</strong>
      </header>
    </div>
  );
};

export default header;
