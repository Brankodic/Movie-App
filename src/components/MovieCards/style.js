import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  container: {
    alignSelf: "center",
    justifyContent: "center",
    transition: "1s",
    borderBottomRightRadius: 50,
    boxShadow: "2px 2px 3px rgba(0, 0, 0, 0.6)",
    boxSizing: "border-box",
    width: 400,
    height: 350,
    padding: 0,
    margin: "auto",
    background: "linear-gradient(to top left, #006064  0%, #5DC8CD 100%)",
    "&:hover": {
      transition: "1s",
      transform: "scale(1.02)",
      boxShadow: "4px 4px 5px rgba(0, 0, 0, 0.6)",
      cursor: "pointer",
    },
    "@media (max-width: 1024px)": {
      width: 380,
    },
    "@media (max-width: 640px)": {
      width: "99%",
    },
  },
  movieTitle: {
    position: "relative",
    bottom: "30%",
    paddingBottom: "5px",
    fontSize: "1.2rem",
    textShadow: "2px 2px 2px rgba(10, 10, 10, 0.6)",
    textAlign: "center",
    color: "white",
  },
  year: {
    position: "relative",
    bottom: "30%",
    padding: 5,
    lineHeight: "50%",
    overflow: "hidden",
    textShadow: "2px 2px 2px rgba(0, 0, 0, 0.6)",
    fontSize: "0.95rem",
    textAlign: "center",
    color: "rgb(255, 250, 250)",
  },
  language: {
    position: "relative",
    bottom: "35%",
    padding: 5,
    lineHeight: "50%",
    overflow: "hidden",
    textShadow: "2px 2px 2px rgba(0, 0, 0, 0.6)",
    fontSize: "0.95rem",
    textAlign: "center",
    color: "rgb(255, 250, 250)",
  },
  link: {
    textDecoration: "none",
  },
});

export default useStyles;
