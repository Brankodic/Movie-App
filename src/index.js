import React from "react";
import ReactDom from "react-dom";
import { HashRouter as Router, Route } from "react-router-dom";

import { ContextProvider } from "./services/context";
import { Auth, Header } from "./components";
import { MovieListPage, SingleMoviePage } from "./pages";

const App = () => {
  return (
    <Router>
      <ContextProvider>
        <Header />
        <Route exact path="/">
          <MovieListPage />
        </Route>
        <Route path="/single-movie-page">
          <SingleMoviePage />
        </Route>
        <Auth />
      </ContextProvider>
    </Router>
  );
};

ReactDom.render(<App />, document.getElementById("root"));
