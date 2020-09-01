import React from "react";
import { createUseStyles } from "react-jss";

const MOVIE_APP_TEXT = "Movie App";
const POPCORN_IMAGE_LINK =
  "https://icons.iconarchive.com/icons/blackvariant/button-ui-requests-2/1024/PopcornTime-icon.png";

const useStyles = createUseStyles({
  header: {
    fontFamily: " 'Luckiest Guy', cursive",
    textShadow: "2px 2px 1px #A62300",
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
    "@media (max-width: 1024px)": {
      padding: 13,
      fontSize: 20,
      letterSpacing: 15,
    },
    "@media (max-width: 640px)": {
      fontSize: 15,
      letterSpacing: 10,
    },
  },
  img: {
    position: "absolute",
    zIndex: 101,
    top: 10,
    left: 30,
    padding: 0,
    margin: 0,
    width: 50,
    height: 50,
    "@media (max-width: 1024px)": {
      top: 3,
      left: 10,
      width: 40,
      height: 40,
    },
  },
});

const Header = () => {
  const classes = useStyles();
  const { img, header } = classes;

  return (
    <div>
      <img className={img} alt="Icon-popcorn" src={POPCORN_IMAGE_LINK}></img>
      <header className={header}>{MOVIE_APP_TEXT}</header>
    </div>
  );
};

export default Header;
