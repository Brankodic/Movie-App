import React from "react";
import ReactDom from "react-dom";
import { HashRouter as Router, Route, Redirect } from "react-router-dom";

import Header from "./components/Header/Header";
import MovieListPage from "./pages/MovieListPage";
import SingleMoviePage from "./pages/SingleMoviePage";
import AuthButton from "./components/Buttons/AuthButton/AuthButton";

const App = () => {
  return (
    <Router>
      <Header />
      <Route exact path="/">
        <MovieListPage />
      </Route>
      <Route path="/movie5555">
        <SingleMoviePage />
      </Route>
      <AuthButton />
      <Redirect to="/" />
    </Router>
  );
};

ReactDom.render(<App />, document.getElementById("root"));
