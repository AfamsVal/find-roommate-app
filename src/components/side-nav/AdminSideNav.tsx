import { SetStateAction, Dispatch } from "react";
import SideNavItem from "./SideNavItem";
import { SIDE_MENU_ITEMS } from "./sidemenu";
import { Accordion } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { logoutAction } from "../../context/actions/AuthAction";
import { useAppSelector } from "../../context/GlobalState";

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
        <nav className="d-block">
          <ul
            className="navbar-nav mt-5 text-left"
            style={{ justifyContent: "flex-start" }}
          >
            {SIDE_MENU_ITEMS.map((menu: any, i: number) => (
              <div key={i}>
                <SideNavItem
                  title={menu.title}
                  link={menu.link}
                  icon={menu.icon}
                  iconStyle={menu.iconStyle}
                  setToggleNav={setToggleNav}
                />
              </div>
            ))}
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
        </nav>
      </div>
    </Accordion>
  );
};

export default AdminSideNav;
