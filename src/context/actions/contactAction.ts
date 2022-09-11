import { httpRequest } from "./../../https/http";
import {
  IAction,
  IAdminReply,
  IChangePwd,
  IContact,
  IFilterSize,
  IProfileInfo,
} from "./../../utils/types";
import * as types from "../types";
import { HTTPResponse } from "../../https/http";

export const contactUsAction = async (
  dispatch: ({ type, payload }: IAction<IContact>) => void,
  details: IContact
) => {
  try {
    dispatch({ type: types.START_LOADING });

    const res: HTTPResponse<string> = await httpRequest({
      url: "contact-us/create-contact",
      method: "POST",
      body: details,
    });
    if (res.status === true) {
      dispatch({ type: types.CONTACT_US_SUBMITTED });
    }
  } catch (error: any) {
    dispatch({ type: types.CONTACT_ERROR, payload: error?.code });
  }
};

export const updateProfileAction = async (
  dispatch: ({ type, payload }: IAction<IProfileInfo | string>) => void,
  details: IProfileInfo
) => {
  try {
    dispatch({ type: types.START_LOADING });

    const res: HTTPResponse<string> = await httpRequest({
      url: "user/update-profile",
      method: "PUT",
      body: details,
    });

    if (res.status === true) {
      dispatch({ type: types.UPDATE_PROFILE_SUCCESS, payload: res.data });
    } else {
      dispatch({ type: types.SHOW_ERROR, payload: res.message });
    }
  } catch (error: any) {
    dispatch({ type: types.SHOW_ERROR, payload: error?.code });
  }
};

/////////////////////////////////////
////ADMIN CHANGE PASSWORD//////////
export const adminPwdChangeAction = async (
  dispatch: ({ type, payload }: IAction<IChangePwd | string>) => void,
  details: IChangePwd
) => {
  try {
    dispatch({ type: types.START_LOADING_TWO });

    const res: HTTPResponse<string> = await httpRequest({
      url: "user/reset-password",
      method: "POST",
      body: details,
    });

    if (res.status === true) {
      dispatch({ type: types.UPDATE_PROFILE_SUCCESS, payload: res.data });
    } else {
      dispatch({ type: types.SHOW_ERROR, payload: res.message });
    }
  } catch (error: any) {
    dispatch({ type: types.SHOW_ERROR, payload: error?.code });
  }
};

/////////////////////////////////////
////ADMIN FETCH ALL COTACTS//////////
export const fetchAllContactAction = async (
  dispatch: ({ type, payload }: IAction<string>) => void,
  details: IFilterSize
) => {
  try {
    dispatch({ type: types.LIST_ITEMS_EMPTY });
    dispatch({ type: types.START_LOADING });

    const res: HTTPResponse<string> = await httpRequest({
      url: "contact-us/all-contact",
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
////ADMIN REPLY CONTACT//////////
export const adminReplyContactAction = async (
  dispatch: ({ type, payload }: IAction<string>) => void,
  openNotification: any,
  details: IAdminReply
) => {
  try {
    dispatch({ type: types.START_LOADING_TWO });

    const res: HTTPResponse<string> = await httpRequest({
      url: "contact-us/admin-reply",
      method: "PUT",
      body: details,
    });

    if (res.status === true) {
      openNotification("Success:", "Sent successfully", "success");
      dispatch({ type: types.RESET_ALL });
      fetchAllContactAction(dispatch, { start: 0, limit: 50 });
    } else {
      dispatch({ type: types.SHOW_ERROR, payload: res.message });
    }
  } catch (error: any) {
    dispatch({ type: types.SHOW_ERROR, payload: error?.code });
  }
};
