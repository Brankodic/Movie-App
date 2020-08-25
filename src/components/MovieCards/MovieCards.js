import React,{ useState } from "react";
import { Link } from "react-router-dom";
import { createUseStyles } from "react-jss";


const useStyles = createUseStyles({
  movie: {
    boxSizing: "border-box",
    alignSelf: "center",
    padding: 0,
    margin: "auto",
    width: 400,
    height: 350,
    boxShadow: "2px 2px 3px rgba(0, 0, 0, 0.6)",
    borderBottomRightRadius: 50,
    justifyContent: "center",
    background: "linear-gradient(to top left, #006064  0%, #5DC8CD 100%)",
    transition: "1s",
    "&:hover": {
      transition: "1s",
      transform: "scale(1.02)",
      boxShadow: "4px 4px 5px rgba(0, 0, 0, 0.6)",
      cursor: "pointer",
    },
  },
  img: {
    height: "calc(100% - 6.8rem)",
    boxShadow: "1px 1px 1px rgba(56, 48, 48, 0.6)",
    width: "100%",
    objectFit: "cover",
  },
  rating: {
    lineHeight: "150%",
    position: "relative",
    height: "25px",
    width: "25px",
    boxShadow: "2px 2px 2px rgba(56, 48, 48, 0.6)",
    textAlign: "center",
    color: "rgb(255, 250, 250)",
    textShadow: "2px 2px 2px rgba(0, 0, 0, 0.6)",
    fontSize: "1rem",
    padding: "1em",
    borderRadius: "50%",
    left: "94%",
    bottom: "83%",
    border: "3px solid rgb(255, 255, 255)",
    background: "linear-gradient(135deg, #FF3500, #A62300)",
  },
  title: {
    color: "white",
    fontSize: "1.2rem",
    textShadow: "2px 2px 2px rgba(10, 10, 10, 0.6)",
    textAlign: "center",
    paddingBottom: "5px",
    position: "relative",
    bottom: "30%",
  },
  year: {
    color: "rgb(255, 250, 250)",
    textShadow: "2px 2px 2px rgba(0, 0, 0, 0.6)",
    fontSize: "0.95rem",
    textAlign: "center",
    padding: 5,
    lineHeight: "50%",
    overflow: "hidden",
    position: "relative",
    bottom: "30%",
  },
  language: {
    color: "rgb(255, 250, 250)",
    textShadow: "2px 2px 2px rgba(0, 0, 0, 0.6)",
    fontSize: "0.95rem",
    textAlign: "center",
    padding: 5,
    lineHeight: "50%",
    overflow: "hidden",
    position: "relative",
    bottom: "35%",
  },
  link:{
    textDecoration: "none",
  }
});

const MovieCards = () => {
  const [movie, setMovie] = useState({
    id: 5555,
    name: "Super Movie",
    rating: 9.9,
    year: 2019,
    language: "English",
    image:
      "https://image.shutterstock.com/image-photo/photo-old-movie-projector-260nw-92369284.jpg",
  });
  const classes = useStyles();

  return (
    <Link className={classes.link} to={`/movie${movie.id}`}>
    <div id={movie.id} className={classes.movie}>
      <img className={classes.img} src={movie.image} alt="movie" />
      <p className={classes.rating}>
        <strong>{movie.rating}</strong>
      </p>
      <p className={classes.title}>
        <strong>{movie.name}</strong>
      </p>
      <p className={classes.year}>
        <i>{movie.year}</i>
      </p>
      <p className={classes.language}>
        <i>{movie.language}</i>
      </p>
    </div>
    </Link>
  );
};

export default MovieCards;