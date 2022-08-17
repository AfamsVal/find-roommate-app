import { Dispatch, SetStateAction } from "react";
import { NavLink, useLocation } from "react-router-dom";

interface SideNavItemProps {
  setToggleNav: Dispatch<SetStateAction<boolean>>;
  link?: string;
  title: string;
  icon: string;
  iconStyle?: {};
}

const SideNavItem = ({
  setToggleNav,
  link,
  title,
  icon,
  iconStyle,
}: SideNavItemProps) => {
  const location = useLocation();

  return (
    <li onClick={() => setToggleNav(false)} style={{ marginTop: "20px" }}>
      <NavLink
        to={link || ""}
        className={`nav-link ps-5 font-18 ${
          location.pathname === link ? "bg-light" : ""
        }`}
      >
        <i className={`${icon} me-3`}></i>
        {title}
      </NavLink>
    </li>
  );
};

export default SideNavItem;
