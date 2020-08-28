import React from "react";

const authContext = React.createContext({
  loggedIn: false,
  setLoggedIn: () => {},
});

export default authContext;