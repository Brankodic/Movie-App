import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { getData } from "../../services/api";
import * as constants from "../../../constants";
import BackButton from "../../components/BackButton/BackButton";
import StarRating from "../../components/StarRating/StarRating";
import useStyles from "./style";

const { API_KEY, IMAGE_PATH, API_URL_MAIN } = constants;

const SingleMoviePage = () => {
  const [state, setState] = useState({
    movie: {},
    image: undefined,
    movieUrl: useLocation(),
  });

  const { movie, image, movieUrl } = state;
  const classes = useStyles();
  const { div, img, movieOverview, text } = classes;
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
      <BackButton />
      <StarRating movieId={id} />
    </>
  );
};

export default SingleMoviePage;
