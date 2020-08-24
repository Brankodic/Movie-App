import React from "react";

import Header from "../components/Header/Header";
import MovieCard from "../components/MovieCard/MovieCard";
import Modal from "../components/Modal/Modal"
import AuthButton from "../components/Buttons/AuthButton/AuthButton";
import LoadMoreButton from "../components/Buttons/LoadMoreButton/LoadMoreButton";
import RandomMovieButton from "../components/Buttons/RandomMovieButton/RandomMovieButton";

const MovieListPage = () => {
  return (
    <>
      <Header />
      <MovieCard />
      <Modal />
      <AuthButton />
      <LoadMoreButton />
      <RandomMovieButton />
    </>
  );
};

export default MovieListPage;
