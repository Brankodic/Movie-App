import React from "react";
import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";

import * as constants from "../../../constants";

const { IMAGE_PATH, SINGLE_MOVIE_URL } = constants;
const LANGUAGE_TEXT = "Language : ";

const useStyles = createUseStyles({
  container: {
    alignSelf: "center",
    justifyContent: "center",
    transition: "1s",
    borderBottomRightRadius: 50,
    boxShadow: "2px 2px 3px rgba(0, 0, 0, 0.6)",
    boxSizing: "border-box",
    width: 400,
    height: 350,
    padding: 0,
    margin: "auto",
    background: "linear-gradient(to top left, #006064  0%, #5DC8CD 100%)",
    "&:hover": {
      transition: "1s",
      transform: "scale(1.02)",
      boxShadow: "4px 4px 5px rgba(0, 0, 0, 0.6)",
      cursor: "pointer",
    },
  },
  img: {
    boxShadow: "1px 1px 1px rgba(56, 48, 48, 0.6)",
    height: "calc(100% - 6.8rem)",
    width: "100%",
    objectFit: "cover",
  },
  rating: {
    position: "relative",
    left: "94%",
    bottom: "83%",
    boxShadow: "2px 2px 2px rgba(56, 48, 48, 0.6)",
    border: "3px solid rgb(255, 255, 255)",
    borderRadius: "50%",
    height: "25px",
    width: "25px",
    background: "linear-gradient(135deg, #FF3500, #A62300)",
    padding: "1em",
    lineHeight: "150%",
    textAlign: "center",
    textShadow: "2px 2px 2px rgba(0, 0, 0, 0.6)",
    fontSize: "1rem",
    color: "rgb(255, 250, 250)",
  },
  titleClass: {
    position: "relative",
    bottom: "30%",
    paddingBottom: "5px",
    fontSize: "1.2rem",
    textShadow: "2px 2px 2px rgba(10, 10, 10, 0.6)",
    textAlign: "center",
    color: "white", 
  },
  year: {
    position: "relative",
    bottom: "30%",
    padding: 5,
    lineHeight: "50%",
    overflow: "hidden",
    textShadow: "2px 2px 2px rgba(0, 0, 0, 0.6)",
    fontSize: "0.95rem",
    textAlign: "center",
    color: "rgb(255, 250, 250)",
  },
  language: {
    position: "relative",
    bottom: "35%",
    padding: 5,
    lineHeight: "50%",
    overflow: "hidden",
    textShadow: "2px 2px 2px rgba(0, 0, 0, 0.6)",
    fontSize: "0.95rem",
    textAlign: "center",
    color: "rgb(255, 250, 250)",
  },
  link: {
    textDecoration: "none",
  },
});

const MovieCards = ({ movie }) => {
  const classes = useStyles();
  const {
    id,
    poster_path,
    vote_average,
    title,
    release_date,
    original_language,
  } = movie;
  const { container, img, rating, titleClass, year, language, link } = classes;

  return (
    <Link className={link} to={`${SINGLE_MOVIE_URL}${id}`}>
      <div key={id} className={container}>
        <img className={img} src={IMAGE_PATH + poster_path} alt="movie" />
        <p className={rating}>
          <strong>{String(vote_average)}</strong>
        </p>
        <p className={titleClass}>
          <strong>{title}</strong>
        </p>
        <p className={year}>
          <i>({release_date.slice(0, 4)})</i>
        </p>
        <p className={language}>
          <i>
            {LANGUAGE_TEXT}
            {original_language}
          </i>
        </p>
      </div>
    </Link>
  );
};

export default MovieCards;
