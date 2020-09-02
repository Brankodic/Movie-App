import React from "react";
import useStyles from "./style";

const POPCORN_IMAGE_LINK =
  "https://icons.iconarchive.com/icons/blackvariant/button-ui-requests-2/1024/PopcornTime-icon.png";

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
