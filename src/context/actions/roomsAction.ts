import { httpRequest, HTTPResponse } from "./../../https/http";
import {
  IAction,
  IFilterSize,
  IRoomDetails,
  ISearchQuery,
} from "../../utils/types";
import * as types from "../types";

export const uploadRoomAction = async (
  dispatch: ({ type, payload }: IAction<IRoomDetails>) => void,
  form: IRoomDetails,
  openNotification: (
    title: string,
    value: string,
    type: string,
    duration?: number
  ) => void,
  isEdit = false
) => {
  try {
    dispatch({ type: types.ADDING_NEW_ROOM });
    const res: HTTPResponse<string> = await httpRequest({
      url: isEdit ? "room/update-room" : "room/create-room",
      method: isEdit ? "PUT" : "POST",
      body: form,
    });

    if (res.status === true) {
      dispatch({ type: types.ADD_NEW_ROOM_COMPLETED });
      openNotification(
        isEdit ? "Updated Successful" : "Submission Successful",
        "Thank you for the submission. Admin will review this within 48 hours for approval",
        "success",
        10
      );
    }
    if (res.status !== true) {
      openNotification("Request failed:", res.message, "error", 10);
      dispatch({ type: types.SHOW_ERROR });
    }
  } catch (error: any) {
    openNotification(
      "Request Failed",
      "Something went wrong, please try again!",
      "error"
    );
    dispatch({ type: types.SHOW_ERROR });
  }
};

export const getAllListing = async (
  dispatch: ({ type, payload }: IAction) => void,
  range: any
) => {
  try {
    dispatch({ type: types.FETCHING_ALL_LISTING });

    const res: HTTPResponse<any> = await httpRequest({
      url: "room/all-rooms",
      method: "POST",
      body: range,
    });

    if (res.status) {
      dispatch({
        type: types.FETCHED_ALL_LISTING,
        payload: res?.data,
      });
    }
  } catch (err) {
    console.log(err);
  }
};

export const getProfileListing = async (
  dispatch: ({ type, payload }: IAction) => void,
  range: any
) => {
  try {
    dispatch({ type: types.FETCHING_ALL_LISTING });
    const res: HTTPResponse<any> = await httpRequest({
      url: "room/profile-rooms",
      method: "POST",
      body: range,
    });

    if (res.status) {
      dispatch({
        type: types.FETCHED_ALL_LISTING,
        payload: res?.data,
      });
    }
  } catch (err) {
    console.log(err);
  }
};

export const getRoomStatistics = async (
  dispatch: ({ type, payload }: IAction) => void
) => {
  try {
    const res: HTTPResponse<any> = await httpRequest({
      url: "room/room-statistics",
      method: "GET",
    });

    if (res.status) {
      dispatch({
        type: types.FETCHED_STATISTICS,
        payload: res?.data,
      });
    }
  } catch (err) {
    console.log(err);
  }
};

export const getAllRoomsAction = async (
  dispatch: any,
  openNotification: any
) => {
  const body = {
    selectedType: "room",
    start: 0,
    limit: 5000,
  };
  try {
    dispatch({ type: types.FETCHING_ROOM_LISTING });

    const res: HTTPResponse<{}[]> = await httpRequest({
      url: "room/selected-category",
      method: "POST",
      body,
    });

    if (res.status === true) {
      dispatch({
        type: types.FETCHED_ROOM_LISTING,
        payload: res.data,
      });
    }
  } catch (error: any) {
    openNotification(
      "Request Failed",
      "Something went wrong, please try again!",
      "error"
    );
  }
};

export const getAllRoommatesAction = async (
  dispatch: any,
  openNotification: any
) => {
  const body = {
    selectedType: "roommate",
    start: 0,
    limit: 5000,
  };
  try {
    dispatch({ type: types.FETCHING_ROOMMATE_LISTING });
    const res: HTTPResponse<{}[]> = await httpRequest({
      url: "room/selected-category",
      method: "POST",
      body,
    });

    if (res.status === true) {
      dispatch({
        type: types.FETCHED_ROOMMATE_LISTING,
        payload: res.data,
      });
    }
  } catch (error: any) {
    openNotification(
      "Request Failed",
      "Something went wrong, please try again!",
      "error"
    );
  }
};

export const getSingleListing = async (
  dispatch: ({ type, payload }: IAction) => void,
  openNotification: (
    title: string,
    value: string,
    type: string,
    duration?: number
  ) => void,
  id: string
) => {
  try {
    dispatch({ type: types.FETCHING_LISTING });

    const res: HTTPResponse<{}[]> = await httpRequest({
      url: `room/single-room?id=${id}`,
    });

    if (res.status === true) {
      dispatch({ type: types.FETCHED_LISTING, payload: res.data });
    }
  } catch (err) {
    openNotification(
      "Request Failed",
      "Something went wrong, please try again!",
      "error"
    );
  }
};

export const searchRoomListing = async (
  dispatch: ({ type, payload }: IAction) => void,
  body: ISearchQuery
) => {
  try {
    dispatch({ type: types.SEARCHING_ROOM, payload: true });
    const res: HTTPResponse<{}[]> = await httpRequest({
      url: "room/search-room",
      method: "POST",
      body,
    });

    if (res.status === true) {
      dispatch({
        type:
          body.selectedType === "room"
            ? types.FETCHED_ROOM_LISTING
            : body.selectedType === "roommate"
            ? types.FETCHED_ROOMMATE_LISTING
            : types.FETCHED_ALL_LISTING,
        payload: res.data,
      });
      // dispatch({ type: types.SEARCHING_ROOM, payload: false });
    }
  } catch (err) {
    console.log(err);
  }
};

/////////////////////////////////////
////ADMIN FETCH ALL ROOMS//////////
export const fetchAllAdminRoomsAction = async (
  dispatch: ({ type, payload }: IAction<string>) => void,
  details: IFilterSize
) => {
  try {
    dispatch({ type: types.LIST_ITEMS_EMPTY });
    dispatch({ type: types.START_LOADING });

    const res: HTTPResponse<string> = await httpRequest({
      url: "room/admin-rooms",
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
////ADMIN BLOCK AND UNBLOCK ROOMS//////////
export const blockRoomAction = async (
  dispatch: ({ type, payload }: IAction<string>) => void,
  openNotification: any,
  details: { type: string; userId: number; roomId: number | string }
) => {
  try {
    if (details.type === "unverified" || details.type === "verified") {
      dispatch({ type: types.START_LOADING_TWO });
    } else {
      dispatch({ type: types.START_LOADING_THREE });
    }
    const res: HTTPResponse<string> = await httpRequest({
      url: "room/update-room-permission",
      method: "PUT",
      body: details,
    });

    if (res.status === true) {
      dispatch({ type: types.RESET_ALL });
      openNotification("Success:", res.message, "success");
      fetchAllAdminRoomsAction(dispatch, { start: 0, limit: 500 });
      getProfileListing(dispatch, {
        uid: details?.userId,
        start: 0,
        limit: 5000,
      });
    } else {
      dispatch({ type: types.RESET_ALL });
      openNotification("Request failed:", res.message, "error");
    }
  } catch (error: any) {
    openNotification("Request failed:", error?.code, "error");
    dispatch({ type: types.RESET_ALL });
  }
};

/////////////////////////////////////
////ADMIN PROFILE ROOM TAKEN//////////
export const takenRoomAction = async (
  dispatch: ({ type, payload }: IAction<string>) => void,
  openNotification: any,
  roomId: number | string,
  userId: number | string
) => {
  try {
    dispatch({ type: types.START_LOADING_TWO });

    const res: HTTPResponse<string> = await httpRequest({
      url: "room/taken-room-permission",
      method: "PUT",
      body: { roomId, userId },
    });

    if (res.status === true) {
      dispatch({ type: types.RESET_ALL });
      openNotification("Success:", res.message, "success");
      getProfileListing(dispatch, {
        uid: userId,
        start: 0,
        limit: 5000,
      });
    } else {
      dispatch({ type: types.RESET_ALL });
      openNotification("Request failed:", res.message, "error");
    }
  } catch (error: any) {
    openNotification("Request failed:", error?.code, "error");
    dispatch({ type: types.RESET_ALL });
  }
};
