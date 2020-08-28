import React, {createContext, useReducer} from 'react';

const authState = undefined;
const store = createContext(authState);
const { Provider } = store;

const AuthProvider = ( { children } ) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch(action.type) {
      case 'log in':
        let authState = true;
        return authState;
        case 'log out':
         authState = false;
          return authState;
    };
  }, authState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store , AuthProvider }