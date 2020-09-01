import React from "react";
import ReactDom from "react-dom";
import { HashRouter as Router, Route,} from "react-router-dom";

import { AuthProvider } from "./services/AuthContextProvider";
import Auth from "./components/Auth/Auth";
import Header from "./components/Header/Header";
import MovieListPage from "./pages/MovieListPage";
import SingleMoviePage from "./pages/SingleMoviePage";

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Header />
        <Route exact path="/">
          <MovieListPage />
        </Route>
        <Route path="/single-movie-page">
          <SingleMoviePage />
        </Route>
        <Auth />
      </AuthProvider>
    </Router>
  );
};

ReactDom.render(<App />, document.getElementById("root"));
