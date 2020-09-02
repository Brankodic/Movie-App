import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  img: {
    boxShadow: "1px 1px 1px rgba(56, 48, 48, 0.6)",
    height: "calc(100% - 6.8rem)",
    width: "100%",
    objectFit: "cover",
  },
});

export default useStyles;
