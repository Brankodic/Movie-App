import React from "react";
import { createUseStyles } from "react-jss";

const GENRE_VALUE = {
  genreNames: ["comedy", "action", "thriller", "horror", "fantasy", "romance"],
  genreId:[35,28,53,27,14,10749]
};
const useStyles = createUseStyles({
  input: {
    marginLeft: 115,
    marginTop: 7,
  },
});

const RoulleteRadioInput = (props) => {
  const handleGenre = props.handleGenre;
  const classes = useStyles();

  return GENRE_VALUE.genreNames.map((genre,i) => (
    <div key={genre}>
      <label className={classes.label}>
        <input
          className={classes.input}
          type="radio"
          id={GENRE_VALUE.genreId[i]}
          name="genre"
          value={genre}
          onClick={() => handleGenre(GENRE_VALUE.genreId[i])}
        ></input>
        {genre}
      </label>
    </div>
  ));
};

export default RoulleteRadioInput;
