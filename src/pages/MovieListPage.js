import React from "react";
import { createUseStyles } from "react-jss";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "../components/Header/Header";
import MovieCards from "../components/MovieCards/MovieCards";
import Modal from "../components/Modal/Modal";
import AuthButton from "../components/Buttons/AuthButton/AuthButton";
import LoadMoreButton from "../components/Buttons/LoadMoreButton/LoadMoreButton";

const useStyles = createUseStyles({
  movies: {
    display: "grid",
    gridTemplateColumns: "auto auto auto",
    gridGap: "4rem",
    width: "85%",
    alignContent: "space-around",
    margin: "0 auto",
    marginBottom: "8em",
    marginTop: "4em",
  },
});
const MovieListPage = () => {
  const classes = useStyles();
  return (
    <Router>
      <Route exact path="/">
        <Header />
        <div className={classes.movies}>
          <MovieCards />
        </div>
        <Modal />
        <AuthButton />
        <LoadMoreButton />
      </Route>
    </Router>
  );
};

export default MovieListPage;
