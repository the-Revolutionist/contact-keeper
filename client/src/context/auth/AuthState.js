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
import { useContext, useReducer } from "react";

import AuthContext from "./authContext";
import authReducer from "./authReducer";
import axios from "axios";

export const AuthState = (props) => {
  const authContext = useContext(AuthContext);

  const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    loading: true,
    error: null,
    user: null,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  //*   LOAD USER
  const loadUser = () => {};
  //*   REGISTER USER
  const register = async (formData) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post("/api/users", formData, config);
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: REGISTER_FAIL,
        payload: error.response.data.msg,
      });
    }
  };
  //*   LOGIN USER
  const login = () => {};
  //*   LOGOUT USER
  const logout = () => {};
  //*   CLEAR ERROR
  const clearError = () => {};

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        error: state.error,
        user: state.user,
        loadUser,
        register,
        login,
        logout,
        clearError,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
