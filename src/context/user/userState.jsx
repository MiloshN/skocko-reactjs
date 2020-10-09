import React, { useReducer } from "react";
import userContext from "./userContext";
import userReducer from "./userReducer";

export const userState = ({ children }) => {
  const initState = {
    user: null,
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [state, dispatch] = useReducer(userReducer, initState);
  return <userContext.Provider value={null}>{children}</userContext.Provider>;
};
