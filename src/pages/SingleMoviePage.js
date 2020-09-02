import React, { useState, useEffect } from "react";
import { createUseStyles } from "react-jss";
import { useLocation } from "react-router-dom";

import { getData } from "../services/api";
import * as constants from "../../constants";
import BackButton from "../components/BackButton/BackButton";
import StarRating from "../components/StarRating/StarRating";

const { API_KEY, IMAGE_PATH, API_URL_MAIN } = constants;

const useStyles = createUseStyles({
  div: {
    position: "relative",
    width: 500,
    margin: "auto",
    textAlign: "center",
  },
  img: {
    position: "static",
    top: 5,
    display: "block",
    boxSizing: "border-box",
    boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.5)",
    width: "100%",
    height: "100%",
    marginTop: 20,
    marginLeft: "auto",
    marginTight: "auto",
    textAlign: "center",
  },
  overviewClass: {
    position: "absolute",
    top: "-0.2%",
    animation: "$glowing 5000ms infinite",
    transition: "0.5s",
    width: 20,
    height: "21%",
    padding: 20,
    backgroundColor: "rgba(170, 170, 170, 0.5)",
    textAlign: "left",
    color: "rgba(0, 0, 0, 0)",
    fontSize: "1px",
    "&:hover": {
      top: "-2%",
      transition: "0.3s",
      width: "92%",
      height: "50%",
      maxHeight: 500,
      padding: 20,
      backgroundColor: " rgba(0, 0, 0, 0.5)",
      textAlign: "left",
      color: "white",
      fontSize: "1rem",
    },
  },
  text: {
    position: "absolute",
    top: "76%",
    animation: "$glowing 5000ms infinite",
    transition: "0.5s",
    width: 20,
    height: 140,
    padding: 20,
    backgroundColor: "rgba(170, 170, 170, 0.5)",
    color: "rgba(0, 0, 0, 0)",
    textAlign: "left",
    fontSize: 1,
    "&:hover": {
      transition: "0.3s",
      width: "92%",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      color: "white",
      fontSize: "1rem",
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
  const {
    id,
    overview,
    vote_average,
    popularity,
    original_language,
  } = movie;

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
            <strong>Average Rating : </strong>
            {vote_average}
          </p>
          <p>
            <strong>Popularity : </strong>
            {popularity}
          </p>
          <p>
            <strong>Language : </strong>
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
