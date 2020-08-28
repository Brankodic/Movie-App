import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";

import AuthButton from "../components/Buttons/AuthButton/AuthButton";

const API_KEY = process.env.API_KEY;

const Auth = () => {
  const [state, setState] = useState({
    sessionId:Cookies.get("session_id") ,
    token: Cookies.get("request_token") ,
    loggedIn: undefined,
  });

  useEffect(() => {
    if (state.token !== undefined) {
      async function getSessId() {
        const res = await fetch(
          `https://api.themoviedb.org/3/authentication/session/new?api_key=${API_KEY}&request_token=${state.token}`,
          {
            method: "POST",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            Cookies.set("session_id", `${data.session_id}`);
            setState({
              ...state,
              sessionId: Cookies.get("session_id") ,
              loggedIn: true,
            });
          })
          .catch((err) => console.log(err));
      }
      getSessId();
    }
    if (state.sessionId === undefined) {
      setState({ ...state, loggedIn: false });
    } else {
      setState({ ...state, loggedIn: true });
    }
  }, []);

  const handleLogin = () => {
    async function fetchToken() {
      const res = await fetch(
        `https://api.themoviedb.org/3/authentication/token/new?api_key=${API_KEY}`
      );
      res
        .json()
        .then((res) => {
          Cookies.set("request_token", `${res.request_token}`);
          window.location = `https://www.themoviedb.org/authenticate/${res.request_token}?redirect_to=http://localhost:8080/#/approved`;
        })
        .catch((err) => console.log(err));
    }
    fetchToken();
  };

  const handleLogout = () => {
    Cookies.remove("session_id");
    Cookies.remove("request_token");
    setState({
      ...state,
      sessionId:  undefined ,
      token:  undefined ,
      loggedIn: false,
    });
  };

  return (
    <AuthButton
      authStatus={state.loggedIn}
      handleLogin={handleLogin}
      handleLogout={handleLogout}
    />
  );
};

export default Auth;
