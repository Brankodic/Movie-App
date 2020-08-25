import React from "react";
import { Link } from "react-router-dom";
import {createUseStyles} from "react-jss";

const BACK_BUTTON_TEXT = "Back";

const useStyles= createUseStyles ({
    back:{
            fontFamily: '"Alegreya Sans SC", sans-serif',
            position: 'fixed',
            border: '3px solid rgb(255, 255, 255)',
            right: '5%',
            bottom: '2%',
            height: 60,
            width: 60,
            borderRadius: '50%',
            boxShadow: '2px 2px 3px rgba(0, 0, 0, 0.6)',
            background: 'linear-gradient(to top left, #006064  0%, #5DC8CD 100%)',
            transition: '0.2s',
            color: 'white',
            textShadow: '2px 2px 2px rgba(0, 0, 0, 0.6)',
            backfaceVisibility: 'hidden',
         "&:hover" : {
            transition: '0.2s',
            transform: 'scale(1.01)',
            cursor: 'pointer',
            boxShadow: '4px 4px 5px rgba(0, 0, 0, 0.6)',
            backfaceVisibility: 'hidden',
          },
          "&:focus" :{
            outline: 'none',
          }
          
    }
})

const BackButton = () => {
    const classes= useStyles();

  return (
    <Link to="/">
      <button className={classes.back}>{BACK_BUTTON_TEXT}</button>
    </Link>
  );
};

export default BackButton;
