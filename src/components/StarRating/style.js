import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  container: {
    position: "relative",
    width: "50%",
    margin: "auto",
    textAlign: "center",
  },
  input: {
    display: "none",
  },
  star: {
    transition: "color 200ms",
    border: 2,
    cursor: "pointer",
  },
});

export default useStyles;
