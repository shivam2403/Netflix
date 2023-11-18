import AuthReducer from "./AuthReducer";
import { createContext, useEffect, useReducer } from "react";



// const storedUser = localStorage.getItem("user");
// let user = null;
// if (storedUser && storedUser !== "undefined") {
//   user = JSON.parse(storedUser);
// }
// const INITIAL_STATE = {
//   user: user,
//   isFetching: false,
//   error: false,
// };
// ---or---
const storedUser = localStorage.getItem('user');
const INITIAL_STATE = {
  user: storedUser ? JSON.parse(storedUser) : null,
  isFetching: false,
  error: false,
};


export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};