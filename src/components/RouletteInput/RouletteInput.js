import React from "react";
import useStyles from "./style";

const GENRE_VALUE = {
  genreNames: ["comedy", "action", "thriller", "horror", "fantasy", "romance"],
  genreId: [35, 28, 53, 27, 14, 10749],
};

const RouletteInput = (props) => {
  const handleGenre = props.handleGenre;
  const { genreNames, genreId } = GENRE_VALUE;
  
  const classes = useStyles();
  const { input } = classes;

  return genreNames.map((genre, i) => (
    <div className={input} key={genre}>
      <label>
        <input
          type="radio"
          id={genreId[i]}
          name="genre"
          value={genre}
          onClick={() => handleGenre(genreId[i])}
        ></input>
        {genre}
      </label>
    </div>
  ));
};

export default RouletteInput;
