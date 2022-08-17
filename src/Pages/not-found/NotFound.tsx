import React from "react";
import { Link } from "react-router-dom";
import style from "./NotFound.module.css";
const NotFound = () => {
  return (
    <div className={`${style.notFound} container-fluid`}>
      <div className="row h-100 align-content-center">
        <div className={`col-md-12 col-sm-12 ${style.contentItems}`}>
          <i
            className={`${style.fontIcon} fa fa-light fa-exclamation-triangle fa-6x`}
            aria-hidden="true"
          ></i>
          {/* <i className=" fa fa-light fa-triangle-exclamation"></i> */}
          <h1 className={` ${style.errorType} p-4`}>404</h1>
          <h4 className="text-6xl p-4 text-center">Page Not Found</h4>
          <p className={`col-12 col-md-6 text-center ${style.text}`}>
            We are sorry, the page you have looked for does not exist in our
            websie! Maybe go to our home page or try o use a search
          </p>
          {/* <p className={style.textSpan}>home page or try o use a search</p> */}
          <Link
            to="/"
            className="custom-button text-main text-decoration-none mt-2"
          >
            Go Back To Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
