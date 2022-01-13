import {
  AUTH_ERROR,
  CLEAR_ERRORS,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  USER_LOADED,
} from "../types";
import { useContext, useEffect, useReducer } from "react";

import AuthContext from "./authContext";
import authReducer from "./authReducer";
import axios from "axios";

export const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    loading: true,
    error: null,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  //*   LOAD USER
  //*   REGISTER USER
  //*   LOGIN USER
  //*   LOGOUT
  //*   CLEAR ERROR

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        error: state.error,
        user: state.user,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
