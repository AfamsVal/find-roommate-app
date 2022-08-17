import React from "react";
import style from "./FirstSection.module.css";
import findRoomyImg from "../../assets/images/find-roomy.gif";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const FirstSection = () => {
  const navigate = useNavigate();
  return (
    <div className={`row ${style.wrapper} mb-3`}>
      <div className={`col-md-6 ${style.getStarted} px-10`}>
        <div className="px-2 px-md-5">
          <p className="text-4xl">Find A Roommate</p>
          <h1 className="text-6xl font-weight-bold py-4">Made Easy</h1>
          <p className="text-2xl">
            We provide the best match that can help you locate the best roomate
            or find a quality room for yourself.
          </p>
          <motion.button
            animate={{ scale: 1.1, originX: 0 }}
            transition={{ yoyo: Infinity, duration: 2 }}
            onClick={() => navigate("/login")}
            className="btn text-2xl button-primary mt-4 px-4 py-2"
          >
            Get Started
          </motion.button>
        </div>
      </div>
      <div className="d-none d-md-block col-md-6 d-flex align-items-center">
        <div className="">
          <img
            src={findRoomyImg}
            alt="find a roommate"
            className={style.findRoomyImg}
          />
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
