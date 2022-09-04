import { IAction, IGlobalState } from "./../utils/types";
import { initialState, logoutState } from "./initialState";
import * as types from "./types";

const save = (data: IGlobalState) => {
  localStorage.setItem("find-roommate", JSON.stringify(data));
};

export const allReducer = (state = initialState, action: IAction) => {
  let data = null;
  switch (action.type) {
    case types.START_LOADING:
      return {
        ...state,
        loading: true,
      };
    case types.STOP_LOADING:
      return {
        ...state,
        loading: false,
      };
    case types.SHOW_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case types.RESET_SUCCESS:
      return {
        ...state,
        success: false,
      };
    case types.CLEAR_ERROR:
      return {
        ...state,
        error: "",
      };
    case types.LOGIN:
      data = {
        ...state,
        auth: {
          ...state.auth,
          isAuth: true,
          authLoading: false,
          authError: "",
          userDetails: { ...state.auth.userDetails, ...action.payload },
        },
      };
      save(data);
      return data;
    case types.REGISTER:
      return {
        ...state,
        auth: {
          ...state.auth,
          isRegister: true,
          authLoading: false,
          authError: "",
        },
      };
    case types.FORGOT_PWD:
      return {
        ...state,
        auth: { ...state.auth, authLoading: false, isPwdReset: true },
      };
    case types.AUTH_REQUEST:
      return {
        ...state,
        auth: { ...state.auth, authLoading: true },
      };
    case types.CLEAR_AUTH_ERROR:
      return {
        ...state,
        auth: {
          ...state.auth,
          isRegister: false,
          isPwdReset: false,
          authError: "",
        },
      };

    case types.LOGOUT:
      return logoutState;

    case types.AUTH_ERROR:
      return {
        ...state,
        auth: { ...state.auth, authError: action.payload, authLoading: false },
      };

    case types.CONTACT_US_SUBMITTED:
      return {
        ...state,
        contactUs: { ...state.contactUs, contactSuccess: true },
      };
    case types.CONTACT_US_RESET:
      return {
        ...state,
        contactUs: { ...state.contactUs, contactSuccess: false },
      };

    //ROOMS REDUCER///////////
    ///////////////////////////////////////

    case types.ROOM_ERROR:
      return { ...state, error: action.payload };

    case types.SEARCHING_ROOM:
      return {
        ...state,
        listing: { ...state.listing, searching: action.payload },
      };

    case types.ADDING_NEW_ROOM:
      return {
        ...state,
        loading: true,
        success: false,
      };

    case types.ADD_NEW_ROOM_COMPLETED:
      return {
        ...state,
        loading: false,
        success: true,
      };

    case types.FETCHING_ALL_LISTING:
      data = {
        ...state,
        listing: {
          ...state.listing,
          loading: true,
        },
      };
      save(data);
      return data;

    case types.FETCHED_ALL_LISTING:
      data = {
        ...state,
        listing: {
          ...state.listing,
          allListing: action.payload,
          loading: false,
        },
      };
      save(data);
      return data;

    case types.FETCHING_ROOM_LISTING:
      data = {
        ...state,
        listing: {
          ...state.listing,
          loading: true,
        },
      };
      save(data);
      return data;

    case types.FETCHED_ROOM_LISTING:
      data = {
        ...state,
        listing: {
          ...state.listing,
          roomListing: action.payload,
          loading: false,
        },
      };
      save(data);
      return data;

    case types.FETCHING_ROOMMATE_LISTING:
      data = {
        ...state,
        listing: {
          ...state.listing,
          loading: true,
        },
      };
      save(data);
      return data;

    case types.FETCHED_ROOMMATE_LISTING:
      data = {
        ...state,
        listing: {
          ...state.listing,
          roommateListing: action.payload,
          loading: false,
        },
      };

      save(data);
      return data;

    default:
      return state;
  }
};
