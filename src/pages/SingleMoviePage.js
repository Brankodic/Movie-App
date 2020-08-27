import React, { useState, useEffect } from "react";
import { createUseStyles } from "react-jss";
import { useLocation } from "react-router-dom";

import BackButton from "../components/Buttons/BackButton/BackButton";
import StarRating from "../components/Buttons/StarRating/StarRating";

const API_KEY = process.env.API_KEY;
const IMAGE_PATH = "https://image.tmdb.org/t/p/w500";
const SINGLE_MOVIE_TEXT = ["Rating : ", "Popularity : ", "Language : "];

const useStyles = createUseStyles({
  div: {
    textAlign: "center",
    position: "relative",
    width: 500,
    margin: "auto",
  },
  image: {
    width: "100%",
    height: "100%",
    position: "static",
    textAlign: "center",
    top: 5,
    display: "block",
    marginTop: 50,
    marginLeft: "auto",
    marginTight: "auto",
    boxSizing: "border-box",
    boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.5)",
  },
  overview: {
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
});

const SingleMoviePage = () => {
  const [state, setState] = useState({ movie: {}, image: "" });

  const movie = state.movie;
  const image = state.image;
  const classes = useStyles();
  const movieUrl = useLocation();

  useEffect(() => {
    async function fetchMovie() {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${movieUrl.pathname.slice(19)}?api_key=${API_KEY}&language=en-US`
      );
      res
        .json()
        .then((res) => {
          setState({
            ...state,
            movie: res,
            image: IMAGE_PATH + res.poster_path,
          });
        })
        .catch((err) => console.log(err));
    }
    fetchMovie();
  }, [movieUrl]);

  return (
    <>
      <div className={classes.div} key={movie.id}>
        <img className={classes.image} src={image} alt="Movie Poster" />
        <p className={classes.overview}>{movie.overview}</p>
        <div className={classes.text}>
          <p>
            <strong>{SINGLE_MOVIE_TEXT[0]}</strong>
            {movie.vote_average}
          </p>
          <p>
            <strong>{SINGLE_MOVIE_TEXT[1]}</strong>
            {movie.popularity}
          </p>
          <p>
            <strong>{SINGLE_MOVIE_TEXT[2]}</strong>
            {movie.original_language}
          </p>
        </div>
      </div>
      <BackButton />
      <StarRating />
    </>
  );
};

export default SingleMoviePage;
