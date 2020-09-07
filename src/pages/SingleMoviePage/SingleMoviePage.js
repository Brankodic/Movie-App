import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { getData, getSingleMovieUrl } from "../../services/api";
import * as constants from "../../../constants";
import useStyles from "./style";

import { ButtonBack, StarRating } from "../../components";

const { API_KEY, IMAGE_PATH } = constants;

const SingleMoviePage = () => {
  const [state, setState] = useState({
    movie: {},
    image: undefined,
    movieUrl: useLocation(),
  });
  const { movie, image, movieUrl } = state;
  const { id, overview, vote_average, popularity, original_language } = movie;

  const classes = useStyles();
  const { div, img, movieOverview, text } = classes;


  useEffect(() => {
    (async () => {
      const res = await getData(
        getSingleMovieUrl(API_KEY, movieUrl.pathname.slice(19))
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
        <p className={movieOverview}>{overview}</p>
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
      <ButtonBack />
      <StarRating movieId={id} />
    </>
  );
};

export default SingleMoviePage;
