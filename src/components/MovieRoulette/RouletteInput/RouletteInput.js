import React from "react";
import { createUseStyles } from "react-jss";

const GENRE_VALUE = [
  "comedy",
  "action",
  "thriller",
  "horror",
  "fantasy",
  "romance",
];
const useStyles = createUseStyles({
  input: {
    marginLeft: 115,
    marginTop:7,
  },
});

const RoulleteRadioInput = () => {
  const list = GENRE_VALUE;
  const classes = useStyles();

  return list.map((genre) => (
    <div>
      <label className={classes.label}>
        <input
          className={classes.input}
          type="radio"
          id={genre}
          name="genre"
          value={genre}
        ></input>
        {genre}
      </label>
    </div>
  ));
};

export default RoulleteRadioInput;