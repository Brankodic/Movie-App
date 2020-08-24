import React from "react";
import { createUseStyles } from "react-jss";

import Header from "../components/Header/Header";
import MovieCards from "../components/MovieCards/MovieCards";
import Modal from "../components/Modal/Modal";
import AuthButton from "../components/Buttons/AuthButton/AuthButton";
import LoadMoreButton from "../components/Buttons/LoadMoreButton/LoadMoreButton";
import RouletteButton from "../components/Buttons/RouletteButton/RouletteButton";

const useStyles = createUseStyles({
  Movies: {
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
    <>
      <Header />
      <div className={classes.Movies}>
        <MovieCards />
      </div>
      <Modal />
      <AuthButton />
      <LoadMoreButton />
      <RouletteButton />
    </>
  );
};

export default MovieListPage;
