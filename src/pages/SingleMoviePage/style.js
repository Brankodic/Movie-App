import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  div: {
    position: "relative",
    width: 500,
    margin: "auto",
    textAlign: "center",
  },
  img: {
    position: "static",
    top: 5,
    display: "block",
    boxSizing: "border-box",
    boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.5)",
    width: "100%",
    height: "100%",
    marginTop: 20,
    marginLeft: "auto",
    marginTight: "auto",
    textAlign: "center",
  },
  movieOverview: {
    position: "absolute",
    top: "-0.2%",
    animation: "$glowing 5000ms infinite",
    transition: "0.5s",
    width: 20,
    height: "21%",
    padding: 20,
    backgroundColor: "rgba(170, 170, 170, 0.5)",
    textAlign: "left",
    color: "rgba(0, 0, 0, 0)",
    fontSize: "1px",
    "&:hover": {
      top: "-2%",
      transition: "0.3s",
      width: "92%",
      height: "50%",
      maxHeight: 500,
      padding: 20,
      backgroundColor: " rgba(0, 0, 0, 0.5)",
      textAlign: "left",
      color: "white",
      fontSize: "1rem",
    },
  },
  text: {
    position: "absolute",
    top: "76%",
    animation: "$glowing 5000ms infinite",
    transition: "0.5s",
    width: 20,
    height: 140,
    padding: 20,
    backgroundColor: "rgba(170, 170, 170, 0.5)",
    color: "rgba(0, 0, 0, 0)",
    textAlign: "left",
    fontSize: 1,
    "&:hover": {
      transition: "0.3s",
      width: "92%",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      color: "white",
      fontSize: "1rem",
    },
  },
  "@keyframes glowing": {
    "0%": {
      boxShadow: "0 0 -10px #64acbe",
    },
    "40%": {
      boxShadow: "0 0 20px #00aeff",
    },
    "60%": {
      boxShadow: "0 0 20px #ff0000",
    },
    "100%": {
      boxShadow: "0 0 -10px #64acbe",
    },
  },
});

export default useStyles;
