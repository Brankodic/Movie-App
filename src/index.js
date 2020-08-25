import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import MovieListPage from "./pages/MovieListPage";
import SingleMoviePage from "./pages/SingleMoviePage"

const App = () => {
  return (
    <Router>
      <Route exact path="/">
        <MovieListPage />{" "}
      </Route>
      <Route exact path="/movie5555">
        <SingleMoviePage/>
      </Route>
    </Router>
  );
};

ReactDom.render(<App />, document.getElementById("root"));
