import { NavigateFunction } from "react-router-dom";
import { httpRequest, HTTPResponse } from "../../https/http";
import {
  IAction,
  IFilterSize,
  ILogin,
  ILoginPayload,
  IRegister,
} from "../../utils/types";
import * as types from "../types";
import jwt_decode from "jwt-decode";
import { IRestPwd } from "../../Pages/change-password/ChangePassword";

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
  dispatch: ({ type, payload }: IAction<ILoginPayload | string>) => void,
  openNotification: any,
  user: ILogin
) => {
  try {
    dispatch({ type: types.AUTH_REQUEST });
    const result: HTTPResponse<{ token: string }> = await httpRequest({
      url: "user/login",
      method: "POST",
      body: user,
      sanitize: false,
    });

    if (result.status === true) {
      sessionStorage.setItem("i-token", result.data.token);
      var decoded: IResponse = jwt_decode(result.data.token);
      openNotification("Notification:", "Login Successful!", "success");
      dispatch({
        type: types.LOGIN,
        payload: decoded,
      });
    } else {
      openNotification("Login Failed:", result.message, "error");
      dispatch({ type: types.CLEAR_AUTH_ERROR });
    }
  } catch (error: any) {
    openNotification(
      "Login Failed:",
      error.code || "Something went wrong, please try again!",
      "error"
    );
    dispatch({ type: types.CLEAR_AUTH_ERROR });
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
      sanitize: false,
    });

    if (res.status === true) {
      dispatch({
        type: "REGISTER",
      });
    } else {
      dispatch({ type: types.AUTH_ERROR, payload: res.message });
    }
    clearAuthError(dispatch);
  } catch (error: any) {
    dispatch({ type: types.AUTH_ERROR, payload: error });
    clearAuthError(dispatch);
  }
};
export const resetPwdAction = async (
  dispatch: ({ type, payload }: IAction<string>) => void,
  user: IRestPwd,
  openNotification: any,
  navigate: any
) => {
  try {
    dispatch({ type: types.AUTH_REQUEST });
    const res: HTTPResponse<string> = await httpRequest({
      url: "user/reset-password",
      method: "POST",
      body: user,
      sanitize: true,
    });

    if (res.status === true) {
      openNotification("Request Success:", res.message, "success");
      navigate("/login");
    } else {
      openNotification("Request Failed:", res.message, "error");
    }
    clearAuthError(dispatch);
  } catch (error: any) {
    openNotification(
      "Request Failed:",
      error?.message || "Something went wrong, please refresh and try again!",
      "error"
    );
    clearAuthError(dispatch);
  }
};

export const setFormAction = async (
  dispatch: ({ type, payload }: IAction<any>) => void,
  url: string
) => {
  dispatch({ type: types.PROFILE_UPDATE_PIC, payload: { profileURL: url } });
};

export const profileUpdateAction = async (
  dispatch: ({ type, payload }: IAction<string>) => void,
  openNotification: any,
  user: IRegister
) => {
  try {
    dispatch({ type: types.AUTH_REQUEST });
    const res: HTTPResponse<string> = await httpRequest({
      url: "user/update-profile",
      method: "PUT",
      body: user,
    });

    if (res.status === true) {
      dispatch({ type: types.PROFILE_UPDATE, payload: res?.data });
      openNotification("Account Update:", res.message, "success");
    } else {
      openNotification("Account Update:", res.message, "error");
    }
    clearAuthError(dispatch);
  } catch (error: any) {
    openNotification(
      "Account Update:",
      error?.code || "Update failed!",
      "error"
    );
    dispatch({ type: types.AUTH_ERROR, payload: error });
    clearAuthError(dispatch);
  }
};

export const forgotPwdAction = async (
  dispatch: ({ type, payload }: IAction<string>) => void,
  navigate: NavigateFunction,
  email: { email: string }
) => {
  try {
    dispatch({ type: types.AUTH_REQUEST });
    //HTTPS REQUEST
    const res: HTTPResponse<string> = await httpRequest({
      url: "user/forgot-password",
      method: "POST",
      body: email,
    });

    if (res.status === true) {
      dispatch({ type: types.SHOW_SUCCESS, payload: res.message });
      navigate("/change-password");
    } else {
      dispatch({ type: types.AUTH_ERROR, payload: res.message });
    }
    clearAuthError(dispatch);
  } catch (error: any) {
    dispatch({ type: types.AUTH_ERROR, payload: error.code });
    clearAuthError(dispatch);
  }
};

export const clearAuthError = (
  dispatch: ({ type, payload }: IAction) => void
) => {
  dispatch({ type: types.CLEAR_AUTH_ERROR });
};

export const clearError = (dispatch: ({ type, payload }: IAction) => void) => {
  dispatch({ type: types.RESET_ALL });
};

export const logoutAction = async (
  dispatch: ({ type, payload }: IAction<any>) => void,
  navigate: NavigateFunction
) => {
  try {
    //HTTPS REQUEST HERE

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

/////////////////////////////////////
////ADMIN FETCH ALL USERS//////////
export const fetchAllUserAction = async (
  dispatch: ({ type, payload }: IAction<string>) => void,
  details: IFilterSize
) => {
  try {
    dispatch({ type: types.LIST_ITEMS_EMPTY });
    dispatch({ type: types.START_LOADING });
    const res: HTTPResponse<string> = await httpRequest({
      url: "user/users",
      method: "POST",
      body: details,
    });

    if (res.status === true) {
      dispatch({ type: types.LIST_CONTACT_SUCCESS, payload: res.data });
    } else {
      dispatch({ type: types.SHOW_ERROR, payload: res.message });
    }
  } catch (error: any) {
    dispatch({ type: types.SHOW_ERROR, payload: error?.code });
  }
};

/////////////////////////////////////
////ADMIN BLOCK AND UNBLOCK USER//////////
export const blockUnblockAction = async (
  dispatch: ({ type, payload }: IAction<string>) => void,
  openNotification: any,
  details: { type: string; sessionId: number; userId: string }
) => {
  try {
    dispatch({ type: types.START_LOADING_TWO });

    const res: HTTPResponse<string> = await httpRequest({
      url: "user/update-user-permission",
      method: "PUT",
      body: details,
    });

    if (res.status === true) {
      openNotification("Success:", res.message, "success");
      fetchAllUserAction(dispatch, { start: 0, limit: 50 });
    } else {
      openNotification("Request failed:", res.message, "error");
    }
    dispatch({ type: types.RESET_ALL });
  } catch (error: any) {
    openNotification("Request failed:", error?.code, "error");
  }
};
