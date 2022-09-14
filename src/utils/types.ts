export interface IRegisterForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  state: string;
  gender: string;
  password: string;
  confirmPwd: string;
}

export interface IPlaces {
  id?: number;
  name?: string;
  listing?: number;
  price?: number;
  image?: string;
  address?: string;
  description?: string;
  rating?: number;
  reviews?: number;
  extras?: string[];
  owner?: { id?: number; name?: string; image?: string };
  booked?: boolean;
  images?: string[];
}

export interface IAction<T = any> {
  type: string;
  payload?: T;
}

export interface IAuth {
  isAuth: boolean;
  isRegister: boolean;
  authError?: string;
  authLoading: boolean;
  isPwdReset: boolean;
  userDetails: {
    aud: string;
    userInfo: {};
    exp: number;
    iat: number;
    isAdmin: number;
    iss: string;
    nbf: number;
    userId: number;
  };
}
export interface IGlobalState {
  auth: IAuth;
  loading: boolean;
  loadingTwo: boolean;
  error: string;
  success: string;
  contactUs: IContactState;
  listing: IListingState;
  dispatch?: any;
}

export interface IRegister {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  state: string;
  gender: string;
  password: string;
  confirmPwd: string;
}

export interface ILogin {
  email: string;
  password: string;
}
export interface ILoginPayload {
  email: string;
  password?: string;
}

export interface IContact {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface IContactState {
  contactSuccess: boolean;
  contactError: string;
  contactList: {}[];
}

export interface IUpload {
  id: string;
  url: string;
}

export interface IRoomDetails {
  address: string;
  descriptions: string;
  email: string;
  hasTiles: string;
  hasWater: string;
  hostelName: string;
  houseType: string;
  id?: string;
  image?: string;
  images?: any;
  isVerified?: boolean;
  phone: string;
  rentPerYear?: any;
  roomType: string;
  state: string;
  bathRoomNo: string;
  toiletNo: string;
  timeStamp?: any;
  createdAt?: any;
  uid?: number;
  university: string;
  category?: string;
}

export interface IListingState {
  allListing: IRoomDetails[];
  type: string;
  loading?: boolean;
  roomListing: IRoomDetails[];
  roommateListing: IRoomDetails[];
  searching: boolean;
}

export interface ISearch {
  category: string;
  createdAt: string;
  id: string;
  name: string;
  state: string;
}

export interface ISearchStorage {
  data: ISearch[];
  lastTime: string;
}

export interface ISearchQuery {
  input?: string;
  university: string;
  min?: number;
  max?: number;
  selectedType?: string;
  start?: number;
  limit?: number;
}

export interface IProfileInfo {
  id?: number;
  userId?: number;
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  gender?: string;
  state?: string;
  password?: string;
  oldPassword?: string;
}

export interface IChangePwd {
  code?: string;
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
  isLogin?: boolean;
}

export interface IAdminReply {
  contactId: string;
  adminUID: number;
  reply: string;
}

export interface IFilterSize {
  start: number;
  limit: number;
}

export interface DataType {
  key: React.Key;
  name: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
  gender?: string;
  details?: string;
  state?: string;
}
export interface IAdminUsers {
  key: React.Key;
  name: string;
  amount?: string;
  type?: string;
  phone?: string;
  agentName?: string;
  datakey?: string;
}
