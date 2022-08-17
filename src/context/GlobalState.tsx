import { onAuthStateChanged } from "firebase/auth";
import { useContext, createContext, useReducer, useEffect } from "react";
import { auth } from "../firebase";
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
        const unsub = onAuthStateChanged(auth, (data) => {
          if (data) {
            if (
              state.auth.isAuth === false &&
              state.auth.isRegister === false
            ) {
              return dispatch({
                type: types.LOGIN,
                payload: {
                  uid: data.uid,
                  emailVerified: data.emailVerified,
                  refreshToken: data.refreshToken,
                  photoURL: data.photoURL,
                },
              });
            }
          } else {
            dispatch({ type: types.LOGOUT });
          }
        });
        return () => {
          unsub();
        };
      } catch (error) {
        dispatch({ type: types.AUTH_ERROR, payload: "Something went wrong!" });
      }
    };
    checkUser();
  }, [state.auth.isAuth, state.auth.isRegister]);

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
