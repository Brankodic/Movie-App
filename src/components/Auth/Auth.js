import React, { useState, useEffect, useContext } from "react";
import Cookies from "js-cookie";
import { createUseStyles } from "react-jss";

import * as constants from "../../../constants";
import { getData, postData } from "../../services/api";
import { store } from "../../services/context";

const { API_KEY } = constants;
const API_AUTH_URL = "https://api.themoviedb.org/3/authentication/";

const useStyles = createUseStyles({
  auth: {
    position: "fixed",
    left: "5%",
    bottom: "2%",
    transition: "0.2s",
    backfaceVisibility: "hidden",
    boxShadow: "2px 2px 3px rgba(0, 0, 0, 0.6)",
    border: "3px solid rgb(255, 255, 255)",
    borderRadius: "50%",
    height: 60,
    width: 60,
    background: "linear-gradient(to top left, #006064  0%, #5DC8CD 100%)",
    fontFamily: '"Alegreya Sans SC", sans-serif',
    color: "white",
    textShadow: "2px 2px 2px rgba(0, 0, 0, 0.6)",
    "&:hover": {
      transition: "1s",
      transform: "scale(1.02)",
      boxShadow: "4px 4px 5px rgba(0, 0, 0, 0.6)",
      cursor: "pointer",
    },
    "&:focus": {
      outline: "none",
    },
  },
});

const Auth = () => {
  const [state, setState] = useState({
    sessionId: Cookies.get("session_id"),
    token: Cookies.get("request_token"),
    loggedIn: undefined,
  });

  const { sessionId, token, loggedIn } = state;
  const globalState = useContext(store);
  const { dispatch } = globalState;
  const classes = useStyles();
  const { auth } = classes;

  useEffect(() => {
    if (sessionId === undefined) {
      dispatch({ type: "log out" });
      setState({ ...state, loggedIn: false });
    } else {
      dispatch({ type: "log in" });
      setState({ ...state, loggedIn: true });
    }
  }, [sessionId]);

  useEffect(() => {
    if (token !== undefined && sessionId === undefined)
      (async () => {
        const res = await postData(
          `${API_AUTH_URL}session/new?api_key=${API_KEY}&request_token=${token}`
        );
        if (res.session_id != undefined) {
          Cookies.set("session_id", res.session_id);
          setState({
            ...state,
            sessionId: res.session_id,
          });
        } else {
          Cookies.remove("request_token");
        }
      })();
  }, [token, sessionId]);

  const handleLogin = () => {
    (async () => {
      const res = await getData(`${API_AUTH_URL}token/new?api_key=${API_KEY}`);
      Cookies.set("request_token", `${res.request_token}`);
      window.location = `https://www.themoviedb.org/authenticate/${res.request_token}?redirect_to=http://localhost:8080/#/approved`;
    })();
  };

  const handleLogout = () => {
    Cookies.remove("session_id");
    Cookies.remove("request_token");
    setState({
      ...state,
      sessionId: undefined,
      token: undefined,
    });
  };

  return loggedIn ? (
    <button onClick={handleLogout} className={auth}>
      Logout
    </button>
  ) : (
      <button onClick={handleLogin} className={auth}>
        Login
      </button>
    );
};

export default Auth;
