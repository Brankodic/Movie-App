import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import { FaStar } from "react-icons/fa";

const COLOR_GREY = "#ff1a1a";
const COLOR_RED = "#e4e5e9";
const RADIO_TYPE = "radio";
const RADIO_NAME = "rating";
const USER_RATING_TEXT = "User Rating : ";

const useStyles = createUseStyles({
  container: {
    textAlign: "center",
    margin: "auto",
    width: "50%",
    position: "relative",
  },
  input: {
    display: "none",
  },
  star: {
    cursor: "pointer",
    transition: "color 200ms",
    border: 2,
  },
});

const StarRating = () => {
  const [rating, setRating] = useState({
    rate: 0,
    ratingHover: 0,
  });

  const classes = useStyles();

  const handlerClicked = (value) => {
    const newRating = { ...rating };
    newRating.rate = value;
    setRating(newRating);
  };

  const handlerHover = (value) => {
    const newRating = { ...rating };
    newRating.ratingHover = value;
    setRating(newRating);
  };

  return (
    <div className={classes.container}>
      <p>
        <strong>{USER_RATING_TEXT}</strong>
      </p>
      {[...Array(10)].map((n, i) => {
        const ratingValue = i + 1;
        return (
          <label key={i}>
            <input
              className={classes.input}
              type={RADIO_TYPE}
              name={RADIO_NAME}
              value={ratingValue}
              onClick={() => handlerClicked(ratingValue)}
            />
            <FaStar
              className={classes.star}
              color={
                ratingValue <= (rating.ratingHover || rating.rate)
                  ? COLOR_GREY
                  : COLOR_RED
              }
              size={20}
              onMouseEnter={() => handlerHover(ratingValue)}
              onMouseLeave={() => handlerHover(null)}
            />
          </label>
        );
      })}
    </div>
  );
};

export default StarRating;
