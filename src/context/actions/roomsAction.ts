import { httpRequest, HTTPResponse } from "./../../https/http";
import {
  addDoc,
  collection,
  doc,
  limit,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../../firebase";
import { IAction, IRoomDetails, ISearchQuery } from "../../utils/types";
import * as types from "../types";

const collectionRef = collection(db, "rooms");

export const uploadRoomAction = async (
  dispatch: ({ type, payload }: IAction<IRoomDetails>) => void,
  form: IRoomDetails,
  openNotification: (
    title: string,
    value: string,
    type: string,
    duration?: number
  ) => void
) => {
  dispatch({ type: types.ADDING_NEW_ROOM });

  const res: HTTPResponse<string> = await httpRequest({
    url: "room/create-room",
    method: "POST",
    body: form,
  });

  if (res.status === true) {
    dispatch({ type: types.ADD_NEW_ROOM_COMPLETED });
    openNotification(
      "Submission Successful",
      "Thank you for the submission. Admin will review this within 48 hours for approval",
      "success",
      10
    );
  }

  try {
  } catch (error: any) {
    openNotification(
      "Request Failed",
      "Something went wrong, please try again!",
      "error"
    );
  }
};

interface IFetchData {
  data: {};
}

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
        payload: res?.data?.data,
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
  try {
    dispatch({ type: types.FETCHING_ROOM_LISTING });

    const q = query(
      collectionRef,
      orderBy("createdAt", "desc"),
      where("category", "==", "room"),
      limit(30)
    );
    // const unSubDocs =
    onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      dispatch({
        type: types.FETCHED_ROOM_LISTING,
        payload: data.length ? data : [],
      });
    });
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
  try {
    dispatch({ type: types.FETCHING_ROOMMATE_LISTING });

    const q = query(
      collectionRef,
      orderBy("createdAt", "desc"),
      where("category", "==", "roommate"),
      limit(30)
    );
    // const unSubDocs =
    onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      dispatch({
        type: types.FETCHED_ROOMMATE_LISTING,
        payload: data.length ? data : [],
      });
    });
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
    const collRef = doc(db, "rooms", id);

    onSnapshot(collRef, (snapshot) => {
      const data = { ...snapshot.data(), id: snapshot.id };
      dispatch({ type: types.FETCHED_LISTING, payload: data });
    });

    // Method 2
    // const snapshot = await getDoc(collRef);
    // const data = { ...snapshot.data(), id: snapshot.id };
    // dispatch({ type: types.FETCHED_ITEM, payload: data });
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
  input: ISearchQuery
) => {
  try {
    // dispatch({ type: types.FETCHING_ALL_LISTING });

    console.log("action");
    const q = query(
      collectionRef,
      where("rentPerYear", "<=", input.max),
      // where("rentPerYear", ">=", input.min),
      where("university", "==", input.university)
    );
    // const unSubDocs =
    onSnapshot(q, (snapshot) => {
      const res = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      const data = res.filter(
        (item: any) => Number(item.rentPerYear) >= Number(input.min)
      );
      dispatch({
        type: types.FETCHED_ALL_LISTING,
        payload: data.length ? data : [],
      });
    });
  } catch (err) {
    console.log(err);
  }
};
