import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { IAction, IContact } from "./../../utils/types";
import * as types from "../types";
import { db } from "../../firebase";

const timeStamp = serverTimestamp();
const createdAt = new Date().toISOString();

export const contactUsAction = async (
  dispatch: ({ type, payload }: IAction<IContact>) => void,
  details: IContact
) => {
  try {
    dispatch({ type: types.START_LOADING });
    const collectionRef = collection(db, "contact-us");
    const data = await addDoc(collectionRef, {
      ...details,
      timeStamp,
      createdAt,
    });
    if (data?.id) {
      const userInfo = doc(db, "contact-us", data.id);
      await updateDoc(userInfo, { id: data.id });
      dispatch({ type: types.CONTACT_US_SUBMITTED });
    }
  } catch (error: any) {
    dispatch({ type: types.CONTACT_ERROR, payload: error?.code });
  }
};
