import React from "react";
import ReactDom from "react-dom";
import { HashRouter as Router, Route, Redirect } from "react-router-dom";

import AuthButton from "./components/Buttons/AuthButton/AuthButton";
import Header from "./components/Header/Header";
import MovieListPage from "./pages/MovieListPage";
import SingleMoviePage from "./pages/SingleMoviePage";

const App = () => {
  return (
    <Router>
      <Header />
      <Route exact path="/">
        <MovieListPage />
      </Route>
      <Route path="/single-movie-page">
        <SingleMoviePage />
      </Route>
      <AuthButton />
      <Redirect to="/" />
    </Router>
  );
};

ReactDom.render(<App />, document.getElementById("root"));
