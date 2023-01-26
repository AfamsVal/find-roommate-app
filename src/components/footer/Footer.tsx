import React from "react";
// import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
// import { NavLink, } from "react-router-dom";
import style from "./Footer.module.css";
const Footer: React.FC = () => {
  return (
    <div
      className={` ${style.container} container-fluid position-relative text-white`}
    >
      <div
        className={` ${style.maine}   row position-absolute`}
        style={{ marginTop: "-30px" }}
      >
        <div className={`  col-md-12 d-flex`}>
          <div className={` ${style.innerf} `}></div>

          <div className={` ${style.inners} text-white`}>
            <h2 className="text-white ">Get in touch</h2>
          </div>
        </div>
      </div>

      <div
        className={`row ${style.footerContent} h-90 bg-dark pt-4 px-2 px-md-4`}
      >
        <div className={` ${style.col1} col-md-3 `}>
          <h4 className="font-weight-bold text-white py-1">ABOUT US</h4>
          <h1 className="font-weight-bold text-white">FIND A ROOM</h1>
          <p className="text-height-3 text-secondary">
            FindRoomy is an application that hepls people find a room to rent or
            find a roommate. It is aimed at reducing the stress people pass
            through just to find an accommodation.
          </p>
        </div>
        <div className={` ${style.col1} col-md-3 text-warning`}>
          <h3>CONTACT INFO</h3>
          <h6>ADDRESS</h6>
          <p>Owerri, Imo State</p>
          <h6>PHONE</h6>
          <p>
            <a
              href="tel:+2347014858673"
              style={{ textDecoration: "none", color: "gray" }}
            >
              +234 701 485 8673
            </a>
          </p>
          <h6>EMAIL</h6>
          <p>
            <a
              href="mailto:info@findroomy.com"
              style={{ textDecoration: "none", color: "gray" }}
            >
              info@findroomy.com
            </a>
          </p>
        </div>
        <div className={` ${style.col1} col-md-3 `}>
          <h3>CUSTOMER SERVICE</h3>
          <div className="text-white ">
            <ul className="list-unstyled">
              <li className="mb-3">
                <Link className="text-decoration-none text-white  " to="/">
                  {" "}
                  Home
                </Link>
              </li>

              <li className="mb-3">
                <Link
                  className="text-decoration-none text-white "
                  to="/about-us"
                >
                  {" "}
                  About Us
                </Link>
              </li>

              <li className="mb-3">
                <Link className="text-decoration-none text-white " to="/faq">
                  {" "}
                  FAQ
                </Link>
              </li>
              <li className="mb-3">
                <Link
                  className="text-decoration-none text-white "
                  to="/contact-us"
                >
                  {" "}
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={` ${style.col1} col-md-3 `}>
          <h3>POPUPLAR TAGS</h3>
          <div className="d-flex ">
            <div className={style.box}>School</div>
            <div className={style.box}>Hostel</div>
            <div className={style.box}>Lodge</div>
            <div className={style.box}>Landload</div>
          </div>

          <div className="d-flex mt-2 pb-sm-5">
            <div className={style.box}>Individual</div>
            <div className={style.box}>Student</div>
          </div>
        </div>
      </div>
      <div className={`row ${style.footerButtom} bg-dark  px-2 px-md-4`}>
        <div className="col-md-12 text-white d-flex align-items-center">
          <p> &#169; Find A ROOM 2022. All Right Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
