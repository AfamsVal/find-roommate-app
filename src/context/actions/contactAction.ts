import { httpRequest } from "./../../https/http";
import { IAction, IContact } from "./../../utils/types";
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
