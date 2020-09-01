import React from "react";
import { createUseStyles } from "react-jss";

const POPCORN_IMAGE_LINK =
  "https://icons.iconarchive.com/icons/blackvariant/button-ui-requests-2/1024/PopcornTime-icon.png";

const useStyles = createUseStyles({
  header: {
    position: "sticky",
    zIndex: 100,
    top: 0,
    left: 0,
    background: "linear-gradient(to top left, #006064  0%, #5DC8CD 100%)",
    width: "100%",
    padding: 15,
    fontFamily: " 'Luckiest Guy', cursive",
    color: "white",
    textShadow: "2px 2px 1px #A62300",
    textAlign: "center",
    fontSize: 30,
    letterSpacing: 30,
  },
  img: {
    position: "absolute",
    zIndex: 101,
    top: 10,
    left: 30,
    width: 50,
    height: 50,
    padding: 0,
    margin: 0,  
  },
});

const Header = () => {
  const classes = useStyles();
  const { img, header } = classes;

  return (
    <div>
      <img className={img} alt="Icon-popcorn" src={POPCORN_IMAGE_LINK}></img>
      <header className={header}>Movie App</header>
    </div>
  );
};

export default Header;
