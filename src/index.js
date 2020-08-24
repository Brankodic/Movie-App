import React from "react";
import ReactDom from "react-dom";
import MovieListPage from "./pages/MovieListPage";

const App = () => {
  return <MovieListPage />;
};

ReactDom.render(<App />, document.getElementById("root"));
