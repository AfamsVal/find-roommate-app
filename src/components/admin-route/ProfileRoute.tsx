import React, { useState } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAppSelector } from "../../context/GlobalState";
import AdminSideNav from "../side-nav/AdminSideNav";
import AdminTopNav from "../top-nav/AdminTopNav";
import "./AdminRoute.css";

const ProfileRoute = () => {
  const { auth } = useAppSelector();
  const [toggleNav, setToggleNav] = useState(false);
  //   const { pathname } = useLocation();

  if (!auth?.isAuth) {
    return <Navigate to={`/login`} replace />;
  }

  return (
    <div className="d-flex">
      <AdminSideNav toggleNav={toggleNav} setToggleNav={setToggleNav} />
      <div id="main-area">
        <AdminTopNav toggleNav={toggleNav} setToggleNav={setToggleNav} />
        <div className="container-fluid">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default ProfileRoute;
