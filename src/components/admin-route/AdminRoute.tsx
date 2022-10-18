import React, { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import AdminSideNav from "../side-nav/AdminSideNav";
import AdminTopNav from "../top-nav/AdminTopNav";
import "./AdminRoute.css";

const AdminRoute = ({ auth, children }: any) => {
  const [toggleNav, setToggleNav] = useState(false);
  if (!auth?.isAuth && !auth?.userDetails?.isAdmin) {
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

export default AdminRoute;
