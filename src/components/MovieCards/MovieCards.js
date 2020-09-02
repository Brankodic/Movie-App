import React from "react";
import { Link } from "react-router-dom";

import * as constants from "../../../constants";
import useStyles from "./style";

const { IMAGE_PATH, SINGLE_MOVIE_URL } = constants;

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
          <strong>{vote_average}</strong>
        </p>
        <p className={titleClass}>
          <strong>{title}</strong>
        </p>
        <p className={year}>
          <i>({release_date.slice(0, 4)})</i>
        </p>
        <p className={language}>
          <i>Language : {original_language}</i>
        </p>
      </div>
    </Link>
  );
};

export default MovieCards;
