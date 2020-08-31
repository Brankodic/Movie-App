import React, { useState, useEffect } from "react";
import { createUseStyles } from "react-jss";
import { useLocation } from "react-router-dom";

import { getData } from "../services/api";
import * as constants from "../services/constants";
import BackButton from "../components/Buttons/BackButton/BackButton";
import StarRating from "../components/Buttons/StarRating/StarRating";

const { API_KEY, IMAGE_PATH, API_URL_MAIN } = constants;
const SINGLE_MOVIE_TEXT = ["Rating : ", "Popularity : ", "Language : "];

const useStyles = createUseStyles({
  div: {
    textAlign: "center",
    position: "relative",
    width: 500,
    margin: "auto",
  },
  img: {
    width: "100%",
    height: "100%",
    position: "static",
    textAlign: "center",
    top: 5,
    display: "block",
    marginTop: 20,
    marginLeft: "auto",
    marginTight: "auto",
    boxSizing: "border-box",
    boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.5)",
  },
  overviewClass: {
    animation: "$glowing 5000ms infinite",
    transition: "0.5s",
    backgroundColor: "rgba(170, 170, 170, 0.5)",
    textAlign: "left",
    color: "rgba(0, 0, 0, 0)",
    position: "absolute",
    fontSize: "1px",
    top: "-0.2%",
    width: 20,
    height: "21%",
    padding: 20,
    "&:hover": {
      transition: "0.3s",
      backgroundColor: " rgba(0, 0, 0, 0.5)",
      textAlign: "left",
      color: "white",
      textAlign: "center",
      top: "-2%",
      width: "92%",
      height: "50%",
      fontSize: "1rem",
      maxHeight: 500,
      padding: 20,
    },
  },
  text: {
    animation: "$glowing 5000ms infinite",
    transition: "0.5s",
    backgroundColor: "rgba(170, 170, 170, 0.5)",
    color: "rgba(0, 0, 0, 0)",
    textAlign: "left",
    position: "absolute",
    fontSize: 1,
    top: "76%",
    width: 20,
    height: 140,
    padding: 20,
    "&:hover": {
      transition: "0.3s",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      color: "white",
      fontSize: "1rem",
      width: "92%",
    },
  },

  "@keyframes glowing": {
    "0%": {
      boxShadow: "0 0 -10px #64acbe",
    },
    "40%": {
      boxShadow: "0 0 20px #00aeff",
    },
    "60%": {
      boxShadow: "0 0 20px #ff0000",
    },
    "100%": {
      boxShadow: "0 0 -10px #64acbe",
    },
  },

  "@media (max-width: 515px)": {
    div: {
      width: "98%",
    },
    overviewClass: {
      borderTopRightRadius: "50%",
      borderBottomRightRadius: "50%",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      top: "45%",
      height: "2%",
      width: "3%",
      "&:hover": {
        borderTopRightRadius: "0%",
        borderBottomRightRadius: "0%",
        top: "10%",
        width: "90%",
      },
    },
    text: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      top: "-0.2%",
      width: "90%",
      height: "2%",
      "&:hover": {
        height: "20%",
        width: "90%",
      },
    },
  },
  "@media (max-width: 400px)": {
    overviewClass: {
      "&:hover": {
        width: "89%",
        height: "60%",
      },
    },
    text: {
      width: "89%",
      "&:hover": {
        height: "18%",
        height: 150,
        width: "89%",
      },
    },
  },
  "@media (max-width: 350px)": {
    overviewClass: {
      "&:hover": {
        width: "87%",
      },
    },
    text: {
      width: "87%",
      "&:hover": {
        width: "87%",
      },
    },
  },
});

const SingleMoviePage = () => {
  const [state, setState] = useState({
    movie: {},
    image: undefined,
    movieUrl: useLocation(),
  });

  const { movie, image, movieUrl } = state;
  const classes = useStyles();
  const { div, img, overviewClass, text } = classes;
  const { id, overview, vote_average, popularity, original_language } = movie;

  useEffect(() => {
    (async () => {
      const res = await getData(
        `${API_URL_MAIN}${movieUrl.pathname.slice(19)}?api_key=${API_KEY}`
      );
      setState({
        ...state,
        movie: res,
        image: IMAGE_PATH + res.poster_path,
      });
    })();
  }, [movieUrl]);

  return (
    <>
      <div className={div} key={id}>
        <img className={img} src={image} alt="Movie Poster" />
        <p className={overviewClass}>{overview}</p>
        <div className={text}>
          <p>
            <strong>{SINGLE_MOVIE_TEXT[0]}</strong>
            {vote_average}
          </p>
          <p>
            <strong>{SINGLE_MOVIE_TEXT[1]}</strong>
            {popularity}
          </p>
          <p>
            <strong>{SINGLE_MOVIE_TEXT[2]}</strong>
            {original_language}
          </p>
        </div>
      </div>
      <BackButton />
      <StarRating movieId={id} />
    </>
  );
};

export default SingleMoviePage;
