import React, { useEffect } from "react";
import style from "./About.module.css";
import image from "../../assets/images/about2.jpg";
import image1 from "../../assets/images/team2.webp";
import ButtomLine from "../../components/buttom-border/ButtomLine";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export const containerVariants = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      delay: 0.3,
      when: "beforeChildren",
      bounce: 0.3,
    },
  },
  clear: {
    x: "-100vw",
    transition: { ease: "easeInOut" },
  },
};

const childVariants = {
  hidden: {
    scale: 0,
  },
  visible: {
    scale: 1,
    transition: {
      type: "spring",
      delay: 0.3,
      damping: 8,
      mass: 0.4,
      when: "beforeChildren",
      // when: "afterChildren",
    },
  },
};

const About: React.FC = () => {
  useEffect(() => window.scrollTo(0, 0), []);
  const navigate = useNavigate();
  return (
    <>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="clear"
        className="container fix-offset"
      >
        <div className="row">
          <div className="col-md-12 mx-auto mt-3 mb-5">
            <div className="row">
              <div className="col-md-10 text-center mx-auto my-3">
                <h1 className="gradient-text">About Us</h1>
                <div className="my-3">
                  <ButtomLine
                    circleSize="12px"
                    lineSize="100px"
                    align="center"
                  />
                </div>
                <motion.p variants={childVariants}>
                  Below is the list of top trusted rooms you can pick from
                </motion.p>
              </div>
            </div>
            <div className="row">
              <div className="d-block d-md-none my-3">
                <div className={`${style.imageDiv} `}>
                  <img src={image} alt="Not found" className="w-100" />
                </div>
              </div>
              <div className="col-md-6 col-sm-12 mt-3 px-4">
                <h3 className="text-dark">Know About</h3>
                <h1>Our Philosophy</h1>
                <ButtomLine />
                <p
                  className="mt-3 text-lg"
                  style={{ lineHeight: "30px", textAlign: "justify" }}
                >
                  FindRoomy is an application that hepls people find a room to
                  rent or find a roommate. It is aimed at reducing the stress
                  people pass through just to find an accommodation.
                </p>
                <button
                  onClick={() => navigate("/login")}
                  className={`custom-button`}
                >
                  Explore More
                </button>
              </div>
              <div className="d-none d-md-block col-md-6 mt-3">
                <div className={`${style.imageDiv} `}>
                  <motion.img
                    whileTap={{ scale: 1.1 }}
                    src={image}
                    alt="Not found"
                    className="w-100"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row bg-lighter" style={{ marginBottom: "100px" }}>
          <div className="col-md-12 mt-5 mb-3">
            <h1 className="text-center">Our Team</h1>
            <div className="my-3">
              <ButtomLine circleSize="12px" lineSize="100px" align="center" />
            </div>
            <p className="text-center">Checkout Our Amazing Team</p>
            <div className="row px-5 mt-5">
              <div className="col-md-4 mb-2">
                <div className="card position-relative pt-3">
                  <img src={image1} alt="notfound" />
                  <div className={style.cardFooter}>
                    <h5>Michael Barley</h5>
                    <p>Implant expert</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-2">
                <div className="card position-relative pt-3">
                  <img src={image1} alt="notfound" />
                  <div className={style.cardFooter}>
                    <h5>Michael Barley</h5>
                    <p>Implant expert</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-2">
                <div className="card position-relative pt-3">
                  <img src={image1} alt="notfound" />
                  <div className={style.cardFooter}>
                    <h5>Michael Barley</h5>
                    <p>Implant expert</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default About;
