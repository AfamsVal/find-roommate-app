import { SetStateAction, Dispatch, useEffect } from "react";
import SideNavItem from "./SideNavItem";
import { SIDE_MENU_ITEMS } from "./sidemenu";
import { Accordion } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { logoutAction } from "../../context/actions/AuthAction";
import { useAppSelector } from "../../context/GlobalState";
import { relative } from "path";

interface SideNavProps {
  toggleNav: boolean;
  setToggleNav: Dispatch<SetStateAction<boolean>>;
}

const AdminSideNav = ({ toggleNav, setToggleNav }: SideNavProps) => {
  const navigate = useNavigate();
  const { auth, dispatch } = useAppSelector();

  return (
    <Accordion defaultActiveKey="sidenav">
      <div id="sidenav" className={`${toggleNav ? "toggled" : ""}`}>
        <nav
          className="d-block"
          style={{
            minHeight: "92vh",
            position: "relative",
          }}
        >
          <ul
            className="navbar-nav mt-5 text-left"
            style={{ justifyContent: "flex-start" }}
          >
            {auth.userDetails.isAdmin
              ? SIDE_MENU_ITEMS.map((menu: any, i: number) => {
                  return (
                    <div key={i}>
                      <SideNavItem
                        title={menu.title}
                        link={menu.link}
                        icon={menu.icon}
                        iconStyle={menu.iconStyle}
                        setToggleNav={setToggleNav}
                      />
                    </div>
                  );
                })
              : SIDE_MENU_ITEMS.map((menu: any, i: number) => {
                  return (
                    menu.isAdmin === false && (
                      <div key={i}>
                        <SideNavItem
                          title={menu.title}
                          link={menu.link}
                          icon={menu.icon}
                          iconStyle={menu.iconStyle}
                          setToggleNav={setToggleNav}
                        />
                      </div>
                    )
                  );
                })}
            <li
              className="cursor-pointer fw-bold text-red ps-5"
              style={{ marginTop: "20px" }}
              onClick={() => {
                if (auth.isAuth) {
                  return logoutAction(dispatch, navigate);
                }
              }}
            >
              <i className="fas fa-power-off me-3 text-red"></i>Logout
            </li>
          </ul>

          <ul
            className="navbar-nav mt-5 text-left"
            style={{
              position: "absolute",
              bottom: "0px",
              marginBottom: "20px",
            }}
          >
            <li className="cursor-pointer fw-bold text-red ps-5">
              <Link to="/" style={{ textDecoration: "none", color: "gray" }}>
                Go To Home
              </Link>{" "}
            </li>
          </ul>
        </nav>
      </div>
    </Accordion>
  );
};

export default AdminSideNav;
