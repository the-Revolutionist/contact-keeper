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
import setAuthToken from "../../utils/setAuthToken";

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

  //^<---------------     ACTIONS     ----------------------------->^\\

  //*   LOAD USER
  const loadUser = async () => {
    //TODO --load token into global headers
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    try {
      const res = await axios.get("/api/auth");
      dispatch({
        type: USER_LOADED,
        payload: res.data,
      });
    } catch (error) {
      dispatch({ type: AUTH_ERROR });
    }
  };
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
      loadUser();
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
  const clearErrors = () => dispatch({ type: CLEAR_ERRORS });

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
        clearErrors,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
