import React from "react";
import { Link } from "react-router-dom";

import * as constants from "../../../constants";
import { Image, Rating } from "../";
import useStyles from "./style";

const { IMAGE_PATH, SINGLE_MOVIE_URL } = constants;
const generateMovieUrl = (id) => {
  return `${SINGLE_MOVIE_URL}${id}`;
};

const MovieCards = ({ movie }) => {
  const {
    id,
    poster_path,
    vote_average,
    title,
    release_date,
    original_language,
  } = movie;
  const imageUrl = IMAGE_PATH + poster_path;

  const classes = useStyles();
  const { container, movieTitle, year, language, link } = classes;

  return (
    <Link className={link} to={generateMovieUrl(id)}>
      <div key={id} className={container}>
        <Image imageUrl={imageUrl} />
        <Rating voteAverage={vote_average} />
        <p className={movieTitle}>
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
