import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  header: {
    position: "sticky",
    zIndex: 100,
    top: 0,
    left: 0,
    background: "linear-gradient(to top left, #006064  0%, #5DC8CD 100%)",
    width: "100%",
    padding: 15,
    fontFamily: " 'Luckiest Guy', cursive",
    color: "white",
    textShadow: "2px 2px 1px #A62300",
    textAlign: "center",
    fontSize: 30,
    letterSpacing: 30,
  },
  img: {
    position: "absolute",
    zIndex: 101,
    top: 10,
    left: 30,
    width: 50,
    height: 50,
    padding: 0,
    margin: 0,
  },
});

export default useStyles;
