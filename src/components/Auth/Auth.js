import React, { useState, useEffect, useContext } from "react";
import Cookies from "js-cookie";

import * as constants from "../../../constants";
import {
  getData,
  postData,
  getSessionIdUrl,
  getTokenUrl,
} from "../../services/api";
import { store } from "../../services/context";
import useStyles from "./style";

const { API_KEY, REDIRECT_AUTH_URL } = constants;

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
        const res = await postData(getSessionIdUrl(API_KEY, token));
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
      const res = await getData(getTokenUrl(API_KEY));
      Cookies.set("request_token", `${res.request_token}`);
      window.location = `https://www.themoviedb.org/authenticate/${res.request_token}?redirect_to=${REDIRECT_AUTH_URL}`;
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

  return (
    <>
      {loggedIn && (
        <button onClick={handleLogout} className={auth}>
          Logout
        </button>
      )}
      {!loggedIn && (
        <button onClick={handleLogin} className={auth}>
          Login
        </button>
      )}
    </>
  );
};

export default Auth;
