import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  backdrop: {
    position: "fixed",
    zIndex: "120",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
});

export default useStyles;
