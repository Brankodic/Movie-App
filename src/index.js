import React from "react";
import ReactDom from "react-dom";
import { HashRouter as Router, Route,} from "react-router-dom";

import { ContextProvider } from "./services/context";
import Auth from "./components/Auth/Auth";
import Header from "./components/Header/Header";
import MovieListPage from "./pages/MovieListPage/MovieListPage";
import SingleMoviePage from "./pages/SingleMoviePage/SingleMoviePage";

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
