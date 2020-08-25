import React, { useState } from "react";
import { createUseStyles } from "react-jss";

import BackButton from "../components/Buttons/BackButton/BackButton";

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
    animation: "glowing 5000ms infinite",
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
    animation: " glowing 5000ms infinite",
    transition: "0.5s",
    backgroundColor: "rgba(170, 170, 170, 0.5)",
    color: "rgba(0, 0, 0, 0)",
    textAlign: "left",
    position: "absolute",
    fontSize: 1,
    top: "76%",
    width: 20,
    height: 130,
    padding: 20,
    "&:hover": {
      transition: "0.3s",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      color: "white",
      fontSize: "1rem",
      height: "18.3%",
      width: "92%",
    },
  },
});

const SingleMoviePage = () => {
  const [movie, setMovie] = useState({
    id: 5555,
    name: "Super Movie",
    rating: 9.9,
    year: 2019,
    language: "English",
    overview: "Blablablablablablablablablabla",
    popularity: 9000,
    image:
      "https://i1.wp.com/image.tmdb.org/t/p/w500/b4thKm1P0F1SYeL11uyVAlGhzR6.jpg",
  });

  const text = SINGLE_MOVIE_TEXT;
  const classes = useStyles();

  return (
    <>
      <div className={classes.div} key={movie.id}>
        <img className={classes.image} src={movie.image} alt="Movie Poster" />
        <p className={classes.overview}>{movie.overview}</p>
        <div className={classes.text}>
          <p>
            <strong>{text[0]}</strong>
            {movie.rating}
          </p>
          <p>
            <strong>{text[1]}</strong>
            {movie.popularity}
          </p>
          <p>
            <strong>{text[2]}</strong>
            {movie.language}
          </p>
        </div>
      </div>
      <BackButton />
    </>
  );
};

export default SingleMoviePage;
