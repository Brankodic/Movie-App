import React, { useState, useContext, useEffect } from "react";
import Cookies from "js-cookie";
import { createUseStyles } from "react-jss";
import { FaStar } from "react-icons/fa";
import { useLocation } from "react-router-dom";

import { store } from "../../../services/AuthContextProvider";

const API_KEY = process.env.API_KEY;
const COLOR_GREY = "#ff1a1a";
const COLOR_RED = "#e4e5e9";
const RADIO_TYPE = "radio";
const RADIO_NAME = "rating";
const URL_MAIN = "https://api.themoviedb.org/3/movie/";
const USER_RATING_TEXT = "User Rating : ";

const useStyles = createUseStyles({
  container: {
    textAlign: "center",
    margin: "auto",
    width: "50%",
    position: "relative",
  },
  input: {
    display: "none",
  },
  star: {
    cursor: "pointer",
    transition: "color 200ms",
    border: 2,
  },
});

const StarRating = () => {
  const [state, setState] = useState({
    rate: undefined,
    ratingHover: undefined,
    authStatus: undefined,
    sessionId: Cookies.get("session_id"),
    movieId: undefined,
  });

  const movieUrl = useLocation();
  const { rate, ratingHover, authStatus, sessionId, movieId } = state;
  const globalState = useContext(store);
  const classes = useStyles();

  useEffect(() => {
    setState({
      ...state,
      authStatus: globalState.state,
      movieId: movieUrl.pathname.slice(19),
    });
  }, [globalState]);

  useEffect(() => {
    if (authStatus === true) {
      async function getRating() {
        const res = await fetch(
          `${URL_MAIN}${movieId}/account_states?api_key=${API_KEY}&session_id=${sessionId}`
        )
          .then((res) => res.json())
          .then((data) => {
            setState({ ...state, rate: data.rated.value });
          })
          .catch((err) => console.log(err));
      }
      getRating();
    }
  }, [authStatus]);

  const handlerClicked = (value) => {
    if (authStatus === true) {
      async function postRating() {
        const res = await fetch(
          `${URL_MAIN}${movieId}/rating?api_key=${API_KEY}&session_id=${sessionId}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify({ value: value }),
          }
        ).catch((err) => console.log(err));
        setState({ ...state, rate: value });
      }
      postRating();
    }
    setState({ ...state, rate: value });
  };

  const handlerHover = (value) => {
    setState({ ...state, ratingHover: value });
  };

  return (
    <div className={classes.container}>
      <p>
        <strong>{USER_RATING_TEXT}</strong>
      </p>
      {[...Array(10)].map((n, i) => {
        const ratingValue = i + 1;
        return (
          <label key={i}>
            <input
              className={classes.input}
              type={RADIO_TYPE}
              name={RADIO_NAME}
              value={ratingValue}
              onClick={() => handlerClicked(ratingValue)}
            />
            <FaStar
              className={classes.star}
              color={
                ratingValue <= (ratingHover || rate) ? COLOR_GREY : COLOR_RED
              }
              size={20}
              onMouseEnter={() => handlerHover(ratingValue)}
              onMouseLeave={() => handlerHover(null)}
            />
          </label>
        );
      })}
    </div>
  );
};

export default StarRating;
