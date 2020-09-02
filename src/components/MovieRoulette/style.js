import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  h3: {
    color: "white",
    textShadow: "1px 2px black",
    textAlign: "center",
  },
  button: {
    transition: "0.3s",
    marginLeft: 130,
    marginTop: 30,
    color: "white",
    fontSize: "2.5em",
    "&:hover": {
      transition: "0.3s",
      transform: "scale(1.1)",
      cursor: "pointer",
    },
  },
});

export default useStyles;
