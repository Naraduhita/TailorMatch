import React, { createContext, useContext, useReducer } from "react";
import { jwtDecode } from "jwt-decode";
import AsyncStorage from "@react-native-async-storage/async-storage";
import login from "../api/auth/login";
import register from "../api/auth/register";
import { useNavigation } from "@react-navigation/native";
import { decode } from "base-64";
global.atob = decode;

const initialAuthState = {
  isLoggedIn: false,
  isLoading: false,
  isError: false,
  user: null,
  errorMessages: "",
  SignIn: login,
  SignOut: () => { },
  Register: async () => { },
  CheckToken: async () => null,
  getToken: async () => null,
  getUser: async () => null,
};

const AuthAction = {
  SET_LOADING: "SET_LOADING",
  SIGN_IN_SUCCESS: "SIGN_IN_SUCCESS",
  SIGN_IN_ERROR: "SIGN_IN_ERROR",
  SIGN_OUT: "SIGN_OUT",
  REGISTER_IN_SUCCESS: "REGISTER_IN_SUCCESS",
  REGISTER_IN_ERROR: "REGISTER_IN_ERROR",
  SET_USER: "SET_USER",
};

const AuthReducer = (state, action) => {
  switch (action.type) {
    case AuthAction.SET_LOADING:
      return { ...state, isLoading: true };
    case AuthAction.SIGN_IN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: true,
        isError: false,
        user: action.payload?.user || null,
      };
    case AuthAction.SIGN_IN_ERROR:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: false,
        isError: true,
        errorMessages: action.payload?.errorMsg || "",
      };
    case AuthAction.SIGN_OUT:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: false,
        isError: false,
        user: null,
      };
    case AuthAction.REGISTER_IN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: false,
        isError: false,
        user: null,
      };
    case AuthAction.REGISTER_IN_ERROR:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: false,
        isError: true,
        errorMessages: action.payload?.errorMsg || "",
      };
    case AuthAction.SET_USER:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: true,
        isError: false,
        user: action.payload?.user || null,
      };
    default:
      return state;
  }
};

export const AuthContext = React.createContext(initialAuthState);

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useCameraContext must be used within a CameraProvider");
  }
  return context;
};

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialAuthState);
  const navigation = useNavigation();

  const SignIn = async ({ email, password }) => {
    try {
      dispatch({ type: AuthAction.SET_LOADING });

      const user = await login({ email, password });

      if (user.status !== 201) {
        console.log("error login");
        return user;
      }

      let token = null;
      if ("data" in user && user.status === 201) {
        token = user.data;
      }

      if (token !== null) {
        const decoded_token = jwtDecode(token);

        dispatch({
          type: AuthAction.SIGN_IN_SUCCESS,
          payload: { user: decoded_token },
        });

        const user = JSON.stringify(decoded_token);
        await AsyncStorage.setItem("user", user);
        await AsyncStorage.setItem("token", token);
      }
      return user;
    } catch (error) {
      console.log("error login");
      console.log(error);
      dispatch({
        type: AuthAction.SIGN_IN_ERROR,
        payload: { errorMsg: error.message },
      });
      throw error;
    }
  };

  const SignOut = async () => {
    dispatch({ type: AuthAction.SET_LOADING });
    console.log(initialAuthState.isLoggedIn);
    await AsyncStorage.removeItem("user");
    await AsyncStorage.removeItem("token");
    console.log("masuk sini gaessss");
    dispatch({ type: AuthAction.SIGN_OUT });
    // TODO: redirect to login page
    navigation.navigate("login");
  };

  const Register = async ({ username, email, password, role }) => {
    try {
      dispatch({ type: AuthAction.SET_LOADING });

      const user = await register({ username, email, password, role });
      console.log(user);

      if (user.status !== 201) {
        console.log("error register");
        dispatch({
          type: AuthAction.REGISTER_IN_ERROR,
        });
        if ("message" in user) {
          return user;
        }
      }
      dispatch({ type: AuthAction.REGISTER_IN_SUCCESS });
    } catch (error) {
      dispatch({
        type: AuthAction.REGISTER_IN_ERROR,
        payload: { errorMsg: error.message },
      });
      throw error;
    }
  };

  const CheckToken = async () => {
    dispatch({ type: AuthAction.SET_LOADING });
    const user_token = await AsyncStorage.getItem("user");
    console.log(`user token: ${user_token}`);
    if (user_token && "exp" in JSON.parse(user_token)) {
      const exp = JSON.parse(user_token).exp;
      const now = new Date().getTime();
      if (now > exp * 1000) {
        console.log("masuk sign out");
        SignOut();
      }
    }
    dispatch({
      type: AuthAction.SET_USER,
      payload: { user: user_token ? JSON.parse(user_token) : null },
    });
    return user_token;
  };

  const getToken = async () => {
    const access_token = await AsyncStorage.getItem("token");
    return access_token;
  };

  const getUser = async () => {
    const user = await AsyncStorage.getItem("user");
    return JSON.parse(user);
  };

  return (
    <AuthContext.Provider
      value={{ ...state, SignIn, SignOut, Register, CheckToken, getToken, getUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
