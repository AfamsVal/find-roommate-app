import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const CallToActionBtn: React.FC = () => {
  const navigate = useNavigate();
  // const variants: any = {
  //   initial: { x: -1000 },
  //   animate: {
  //     x: [10, 0, -10, 0],
  //     transition: {
  //       type: "spring",
  //       duration: 3,
  //       delay: 2,
  //       damping: 10,
  //       stiffness: 100,
  //     },
  //   },
  // };
  return (
    <div className="d-flex flex-column flex-md-row justify-content-center pt-5">
      <motion.div
        whileHover={{ scale: 1.1 }}
        onClick={() => navigate("find-room")}
        className="custom-button mx-3 mb-3 text-center"
      >
        <i className="fas fa-search"></i> FIND ROOM
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.1 }}
        onClick={() => navigate("find-roommate")}
        className="custom-button mx-3 mb-3 text-center"
      >
        <i className="fas fa-search"></i> FIND ROOMMATE
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.1 }}
        onClick={() => navigate("upload-items")}
        className="custom-button mx-3 mb-3 text-center"
      >
        <i className="fas fa-cloud-upload-alt"></i> UPLOAD ITEM
      </motion.div>
    </div>
  );
};

export default CallToActionBtn;
