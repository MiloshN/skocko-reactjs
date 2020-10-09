import React, { useReducer } from "react";
import userContext from "./userContext";
import userReducer from "./userReducer";

export const userState = ({ children }) => {
  const initState = {
    user: null,
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [state, dispatch] = useReducer(userReducer, initState);

  const isUser = () => {
    dispatch({
      type: "USER_LOGINED",
    });
  };

  return (
    <userContext.Provider
      value={{
        users: state.user,
        isUser,
      }}
    >
      {children}
    </userContext.Provider>
  );
};
