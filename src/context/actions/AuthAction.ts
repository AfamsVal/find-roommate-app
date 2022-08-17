import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { NavigateFunction } from "react-router-dom";
import { auth, db } from "../../firebase";
import { IAction, ILogin, ILoginPayload, IRegister } from "../../utils/types";
import * as types from "../types";

const timeStamp = serverTimestamp();
const createdAt = new Date().toISOString();

export const loginAction = async (
  dispatch: ({ type, payload }: IAction<ILoginPayload>) => void,
  user: ILogin
) => {
  try {
    dispatch({ type: types.AUTH_REQUEST });
    await signInWithEmailAndPassword(auth, user.email, user.password);
    dispatch({
      type: types.LOGIN,
      payload: { email: user.email },
    });
  } catch (error: any) {
    dispatch({
      type: types.AUTH_ERROR,
      payload: error.code,
    });
  }
};

export const registerAction = async (
  dispatch: ({ type, payload }: IAction<IRegister>) => void,
  user: IRegister
) => {
  try {
    dispatch({ type: types.AUTH_REQUEST });
    const res = await createUserWithEmailAndPassword(
      auth,
      user.email,
      user.password
    );

    const { password, confirmPwd, ...userDetails } = user;
    await setDoc(doc(db, "users", res?.user?.uid), {
      ...userDetails,
      timeStamp,
      createdAt,
    });

    await signOut(auth);

    dispatch({
      type: "REGISTER",
    });
  } catch (error: any) {
    dispatch({ type: types.AUTH_ERROR, payload: error.code });
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
