import { useContext, createContext, useReducer, useEffect } from "react";
import { allReducer } from "./allReducer";
import { initialState } from "./initialState";

const GlobalContext = createContext(initialState);

export const useAppSelector = () => {
  return useContext(GlobalContext);
};

const GlobalState = ({ children }: any) => {
  const [state, dispatch] = useReducer(allReducer, initialState);

  return (
    <GlobalContext.Provider
      value={{
        auth: state.auth,
        loading: state.loading,
        loadingTwo: state.loadingTwo,
        loadingThree: state.loadingThree,
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
