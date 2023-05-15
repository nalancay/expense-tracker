import { createContext, useEffect, useReducer } from "react";
import { auth } from "../firebase/config";

const AUTH_TYPES = {
  AUTH_IS_READY: Symbol(),
  LOGIN: Symbol(),
  LOGOUT: Symbol(),
};

const authReducer = (state, action) => {
  switch (action.type) {
    case AUTH_TYPES.AUTH_IS_READY:
      return { ...state, user: action.payload, authIsReady: true };
    case AUTH_TYPES.LOGIN:
      return { ...state, user: action.payload };
    case AUTH_TYPES.LOGOUT:
      return { ...state, user: null };
    default:
      return state;
  }
};

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const initialState = {
    user: null,
    authIsReady: false,
  };
  const [state, dispatch] = useReducer(authReducer, initialState);

  const logout = () => dispatch({ type: AUTH_TYPES.LOGOUT });

  const login = (res) =>
    dispatch({ type: AUTH_TYPES.LOGIN, payload: res.user });

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      dispatch({ type: AUTH_TYPES.AUTH_IS_READY, payload: user });
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{ ...state, dispatch, functions: { logout, login } }}
    >
      {children}
    </AuthContext.Provider>
  );
};
