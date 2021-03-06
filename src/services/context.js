import React, { createContext, useReducer } from "react";

let authState = undefined;
const store = createContext(authState);
const { Provider } = store;

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "log in":
        authState = true;
        return authState;
      case "log out":
        authState = false;
        return authState;
    }
  }, authState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, ContextProvider };
