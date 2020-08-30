import React, { useState, useEffect, useContext } from "react";
import Cookies from "js-cookie";

import AuthButton from "../components/Buttons/AuthButton/AuthButton";
import * as constants from "./constants";
import{getData} from "./api"
import { store } from "./AuthContextProvider";

const { API_KEY } = constants;
const API_AUTH_URL = "https://api.themoviedb.org/3/authentication/";

const Auth = () => {
  const [state, setState] = useState({
    sessionId: Cookies.get("session_id"),
    token: Cookies.get("request_token"),
    loggedIn: undefined,
  });

  const { sessionId, token, loggedIn } = state;
  const globalState = useContext(store);
  const { dispatch } = globalState;

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
    if (token !== undefined && sessionId === undefined) {
      async function getSessId() {
        await fetch(
          `${API_AUTH_URL}session/new?api_key=${API_KEY}&request_token=${token}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify({ request_token: token }),
          }
        )
          .then((res) => res.json())
          .then((data) => {
            Cookies.set("session_id", data.session_id);
            setState({
              ...state,
              sessionId: data.session_id,
            });
          })
          .catch((err) => console.log(err));
      }
      getSessId();
    }
  }, [token,sessionId]);

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

  return (
    <AuthButton
      authStatus={loggedIn}
      handleLogin={handleLogin}
      handleLogout={handleLogout}
    />
  );
};

export default Auth;
