import { createUseStyles } from "react-jss";

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
    "@media (max-width: 1250px)": {
      gridTemplateColumns: "auto auto",
    },
    "@media (max-width: 640px)": {
      gridTemplateColumns: "auto",
    },
  },
});

export default useStyles;
