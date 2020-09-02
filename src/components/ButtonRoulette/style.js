import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  roulette: {
    position: "fixed",
    right: "5%",
    bottom: "2%",
    transition: "0.2s",
    backfaceVisibility: "hidden",
    boxShadow: "2px 2px 3px rgba(0, 0, 0, 0.6)",
    border: "3px solid rgb(255, 255, 255)",
    borderRadius: "50%",
    height: 60,
    width: 60,
    background: "linear-gradient(to top left, #006064  0%, #5DC8CD 100%)",
    fontFamily: '"Alegreya Sans SC", sans-serif',
    fontSize: 12,
    color: "white",
    textShadow: "2px 2px 2px rgba(0, 0, 0, 0.6)",
    "&:hover": {
      transition: "1s",
      transform: "scale(1.02)",
      boxShadow: "4px 4px 5px rgba(0, 0, 0, 0.6)",
      cursor: "pointer",
    },
    "&:focus": {
      outline: "none",
    },
  },
});

export default useStyles;
