import React, { useState, useContext, useEffect } from "react";
import Cookies from "js-cookie";
import { FaStar } from "react-icons/fa";
import { useLocation } from "react-router-dom";

import * as constants from "../../../constants";
import { getData, postData } from "../../services/api";
import { store } from "../../services/context";
import useStyles from "./style";

const { API_KEY, API_URL_MAIN } = constants;

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
  const { container, input, star } = classes;

  useEffect(() => {
    setState({
      ...state,
      authStatus: globalState.state,
      movieId: movieUrl.pathname.slice(19),
    });
  }, [globalState]);

  useEffect(() => {
    if (authStatus)
      (async () => {
        const res = await getData(
          `${API_URL_MAIN}${movieId}/account_states?api_key=${API_KEY}&session_id=${sessionId}`
        );
        setState({
          ...state,
          rate: res.rated.value,
        });
      })();
  }, [authStatus]);

  const handlerClicked = (value) => {
    if (authStatus === true) {
      (async () => {
        await postData(
          `${API_URL_MAIN}${movieId}/rating?api_key=${API_KEY}&session_id=${sessionId}`,
          { value: value }
        );
        setState({ ...state, rate: value });
      })();
    }
    setState({ ...state, rate: value });
  };

  const handlerHover = (value) => {
    setState({ ...state, ratingHover: value });
  };

  return (
    <div className={container}>
      <p>
        <strong>User Rating : </strong>
      </p>
      {[...Array(10)].map((n, i) => {
        const ratingValue = i + 1;
        return (
          <label key={i}>
            <input
              className={input}
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => handlerClicked(ratingValue)}
            />
            <FaStar
              className={star}
              color={
                ratingValue <= (ratingHover || rate) ? "#ff1a1a" : "#e4e5e9"
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