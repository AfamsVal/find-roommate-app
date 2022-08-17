import React from "react";
import style from "./BadgeRight.module.css";

const BadgeRight: React.FC = () => {
  return (
    <div className={`${style.bageRight}  bg-dark text-light px-3 py-2`}>
      <div className={style.triangleRight}></div>{" "}
      <span className="mx-3">Premium1 Listing</span>
    </div>
  );
};

export default BadgeRight;
