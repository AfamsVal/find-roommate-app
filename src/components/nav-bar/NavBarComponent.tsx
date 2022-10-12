import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { logoutAction } from "../../context/actions/AuthAction";
import { useAppSelector } from "../../context/GlobalState";
import { motion } from "framer-motion";

const NavBarComponent = () => {
  const [collapsed, setCollapsed] = useState(true);

  const { auth, dispatch } = useAppSelector();

  const toggleNavbar = () => {
    setCollapsed(!collapsed);
  };

  const show = collapsed ? "" : "show";

  const isCollapse = collapsed ? "collapsed" : "";

  let navigate = useNavigate();

  const handleLogout = () => {
    if (auth.isAuth) {
      return logoutAction(dispatch, navigate);
    }
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-md nav-bg navbar-dark fixed-top">
      <div className="container">
        <Link className="navbar-brand" to="/">
          FindRoomy
        </Link>
        <button
          className={`${isCollapse} navbar-toggler-right navbar-toggler`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavbar"
          onClick={toggleNavbar}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`${show} collapse justify-content-end navbar-collapse `}
          id="collapsibleNavbar"
          onClick={toggleNavbar}
        >
          <ul className="navbar-nav">
            <motion.li
              whileHover={{ scale: 1.1 }}
              className="nav-item mx-3 pt-2 "
            >
              <NavLink
                className={(navData: any): any =>
                  navData.isActive ? "text-accent" : ""
                }
                to="/"
              >
                <i className="fa fa-home"></i> Home
              </NavLink>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1 }}
              className="nav-item mx-3 pt-4 pt-md-2"
            >
              <NavLink
                className={(navData: any): any =>
                  navData.isActive ? "text-accent" : ""
                }
                to="/about-us"
              >
                <i className="fas fa-user-friends"></i> About Us
              </NavLink>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1 }}
              className="nav-item mx-3  pt-4 pt-md-2"
            >
              <NavLink
                className={(navData: any): any =>
                  navData.isActive ? "text-accent" : ""
                }
                to="/faq"
              >
                <i className="fa fa-info-circle"></i> Faq
              </NavLink>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1 }}
              className="nav-item mx-3  pt-4 pt-md-2"
            >
              <NavLink
                className={(navData: any): any =>
                  navData.isActive ? "text-accent" : ""
                }
                to="/contact-us"
              >
                <i className="fa fa-phone-square"></i> Contact-us
              </NavLink>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1 }}
              className="nav-item mx-3 pt-4 pb-3 pb-md-0 pt-md-0"
            >
              <button onClick={handleLogout} className="btn btn-light">
                {auth.isAuth ? "Log out" : "Log In"}
              </button>
            </motion.li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBarComponent;
