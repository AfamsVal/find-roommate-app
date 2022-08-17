import React from "react";
import { Navigate } from "react-router-dom";
import Footer from "../footer/Footer";
import NavBarComponent from "../nav-bar/NavBarComponent";

const ProtectedRoute = ({ auth, children }: any) => {
  // const { auth, user } = useAppSelector(state => state.auth);

  if (!auth) return <Navigate to={`/login`} replace />;

  return (
    <>
      <NavBarComponent />
      {children}
      <Footer/>
    </>
  );
};

export default ProtectedRoute;
