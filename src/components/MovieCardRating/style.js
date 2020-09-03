import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  rating: {
    position: "relative",
    left: "94%",
    bottom: "83%",
    boxShadow: "2px 2px 2px rgba(56, 48, 48, 0.6)",
    border: "3px solid rgb(255, 255, 255)",
    borderRadius: "50%",
    height: "25px",
    width: "25px",
    background: "linear-gradient(135deg, #FF3500, #A62300)",
    padding: "1em",
    lineHeight: "150%",
    textAlign: "center",
    textShadow: "2px 2px 2px rgba(0, 0, 0, 0.6)",
    fontSize: "1rem",
    color: "rgb(255, 250, 250)",
    "@media (max-width: 640px)": {
      left: "90%",
    },
  },
});

export default useStyles;
