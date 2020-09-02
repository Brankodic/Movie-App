import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  modal: {
    position: "fixed",
    zIndex: 500,
    top: "30%",
    left: "calc(50% - 150px)",
    transition: "all 0.3s ease-out",
    transform: "translateY(0)",
    borderRadius: 5,
    width: 300,
    height: 300,
    padding: 5,
    opacity: 1,
    background: "linear-gradient(to top left, #006064  0%, #5DC8CD 100%)",
  },
  modalFalse: {
    position: "fixed",
    zIndex: 500,
    top: "30%",
    left: "calc(50% - 150px)",
    transform: "translateY(-100vh)",
    transition: "all 0.3s ease-out",
    borderRadius: 5,
    width: 300,
    height: 300,
    padding: 5,
    background: "linear-gradient(to top left, #006064  0%, #5DC8CD 100%)",
    opacity: 0,
  },
});

export default useStyles;
