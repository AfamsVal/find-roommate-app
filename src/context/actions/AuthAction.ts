import { sendPasswordResetEmail, signOut } from "firebase/auth";
import { NavigateFunction } from "react-router-dom";
import { auth } from "../../firebase";
import { httpRequest, HTTPResponse } from "../../https/http";
import { IAction, ILogin, ILoginPayload, IRegister } from "../../utils/types";
import * as types from "../types";
import jwt_decode from "jwt-decode";

interface IResponse extends ILoginPayload {
  aud: string;
  data: {};
  exp: number;
  iat: number;
  isAdmin: number;
  iss: string;
  nbf: number;
  userId: number;
}

export const loginAction = async (
  dispatch: ({ type, payload }: IAction<ILoginPayload>) => void,
  user: ILogin
) => {
  try {
    dispatch({ type: types.AUTH_REQUEST });
    const result: HTTPResponse<{ token: string }> = await httpRequest({
      url: "user/login",
      method: "POST",
      body: user,
    });

    if (result.status === true) {
      sessionStorage.setItem("i-token", result.data.token);
      var decoded: IResponse = jwt_decode(result.data.token);
      dispatch({
        type: types.LOGIN,
        payload: decoded,
      });
    }
  } catch (error: any) {
    dispatch({
      type: types.AUTH_ERROR,
      payload: error.code,
    });
  }
};

export const registerAction = async (
  dispatch: ({ type, payload }: IAction<string>) => void,
  user: IRegister
) => {
  try {
    dispatch({ type: types.AUTH_REQUEST });
    const { confirmPwd, ...userDetails } = user;
    const res: HTTPResponse<string> = await httpRequest({
      url: "user/register",
      method: "POST",
      body: userDetails,
    });
    if (res.status === true) {
      dispatch({
        type: "REGISTER",
      });
    } else {
      dispatch({ type: types.AUTH_ERROR, payload: res.message });
    }
  } catch (error: any) {
    dispatch({ type: types.AUTH_ERROR, payload: error });
  }
};

export const forgotPwdAction = async (
  dispatch: ({ type, payload }: IAction<string>) => void,
  email: string
) => {
  try {
    dispatch({ type: types.AUTH_REQUEST });
    await sendPasswordResetEmail(auth, email);
    dispatch({ type: types.FORGOT_PWD });
  } catch (error: any) {
    dispatch({ type: types.AUTH_ERROR, payload: error.code });
  }
};

export const clearAuthError = (
  dispatch: ({ type, payload }: IAction) => void
) => {
  dispatch({ type: types.CLEAR_AUTH_ERROR });
};

export const clearError = (dispatch: ({ type, payload }: IAction) => void) => {
  dispatch({ type: types.CLEAR_ERROR });
};

export const logoutAction = async (
  dispatch: ({ type, payload }: IAction<any>) => void,
  navigate: NavigateFunction
) => {
  try {
    await signOut(auth);
    localStorage.removeItem("find-roommate");
    dispatch({
      type: "LOGOUT",
    });
    setTimeout(() => navigate("/login"), 0);
  } catch (error: any) {
    dispatch({
      type: "AUTH_ERROR",
      payload: error.code,
    });
  }
};
