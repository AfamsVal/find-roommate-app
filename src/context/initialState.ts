import {
  IAuth,
  IContactState,
  IGlobalState,
  IListingState,
} from "../utils/types";

const authState: IAuth = {
  isAuth: false,
  authError: "",
  isRegister: false,
  isPwdReset: false,
  authLoading: false,
  userDetails: {
    uid: "",
    emailVerified: false,
    firstName: "",
    lastName: "",
    email: "",
    phoneNo: "",
    state: "",
    gender: "",
  },
};

const contactState: IContactState = {
  contactSuccess: false,
  contactError: "",
  contactList: [],
};

const listingState: IListingState = {
  allListing: [],
  type: "all",
  loading: false,
  roomListing: [],
  roommateListing: [],
};
const listingState2: IListingState = {
  allListing: [],
  type: "all",
  loading: false,
  roomListing: [],
  roommateListing: [],
};

export const logoutState: IGlobalState = {
  auth: {
    isAuth: false,
    authError: "",
    isRegister: false,
    isPwdReset: false,
    authLoading: false,
    userDetails: {
      uid: "",
      emailVerified: false,
      firstName: "",
      lastName: "",
      email: "",
      phoneNo: "",
      state: "",
      gender: "",
    },
  },
  contactUs: contactState,
  listing: listingState,
  loading: false,
  error: "",
  success: false,
};

export const initialState: IGlobalState = window.localStorage?.getItem(
  "find-roommate"
)
  ? JSON.parse(localStorage.getItem("find-roommate") + "")
  : {
      auth: authState,
      loading: false,
      error: "",
      success: false,
      contactUs: contactState,
      listing: listingState2,
    };
