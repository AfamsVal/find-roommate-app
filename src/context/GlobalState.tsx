import { useContext, createContext, useReducer, useEffect } from "react";
import { allReducer } from "./allReducer";
import { initialState } from "./initialState";
import * as types from "./types";

const GlobalContext = createContext(initialState);

export const useAppSelector = () => {
  return useContext(GlobalContext);
};

const GlobalState = ({ children }: any) => {
  const [state, dispatch] = useReducer(allReducer, initialState);

  useEffect(() => {
    const checkUser = async () => {
      try {
        if (1) {
        } else {
          dispatch({ type: types.LOGOUT });
        }
      } catch (error) {
        dispatch({ type: types.AUTH_ERROR, payload: "Something went wrong!" });
      }
    };
    checkUser();
  }, [state.auth.isAuth]);

  return (
    <GlobalContext.Provider
      value={{
        auth: state.auth,
        loading: state.loading,
        error: state.error,
        success: state.success,
        contactUs: state.contactUs,
        listing: state.listing,
        dispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
