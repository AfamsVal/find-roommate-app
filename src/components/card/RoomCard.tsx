import React from "react";
import style from "./RoomCard.module.css";
import { IRoomDetails } from "../../utils/types";
import { formatCurrency } from "../../utils/formValidator";
import { motion } from "framer-motion";
interface IProp {
  item: IRoomDetails;
  modalItem: (item: IRoomDetails) => void;
}
const RoomCard: React.FC<IProp> = ({ item, modalItem }) => {
  return (
    <motion.div
      className="row mb-4"
      onClick={() => modalItem(item)}
      initial={{ x: -1000, opacity: 0 }}
      animate={{ x: [50, 0, 10, 0], opacity: 1 }}
      transition={{
        type: "tween",
        duration: 2,
        delay: 1,
      }}
    >
      <div className={`col-11 mx-auto cursor-pointer ${style.topBorderRadius}`}>
        <div className="row">
          <div
            className={`col-md-12 ${style.topImage}`}
            style={{ backgroundImage: `url(${item?.image})` }}
          >
            <div className={`${style.Verified}  px-2 py-1`}>
              <i className="fa fa-home"></i>{" "}
              {item.isVerified ? "Verified" : "Not Verified"}
            </div>
          </div>
        </div>
        <div className={`row ${style.cardDetails}`}>
          <div className="col-md-12">
            <div className="d-flex justify-content-around bg-dark text-light px-3 py-2 mt-2">
              <span className="font-bold">
                ₦{formatCurrency(String(item?.rentPerYear))}.00
              </span>
              <span>|</span>
              <span>{item.category?.toUpperCase()}</span>
            </div>
            <h5
              className={`text-main mb-0 mt-1 text-center text-uppercase text-lg font-bold`}
              title={item?.hostelName ? item?.hostelName : item?.applicantName}
            >
              {item?.hostelName ? item?.hostelName.substring(0, 15) : ""}
              {item?.hostelName.length > 15 && "..."}
              {/* //below two for roommate */}
              {item?.applicantName ? item?.applicantName.substring(0, 15) : ""}
              {item?.applicantName.length > 15 && "..."}
            </h5>
            <div className={style.cardDate}>
              <span>
                {/* <i className="fa fa-save"></i> {item.timeStamp.toDate()} */}
                <i className="fa fa-save"></i>{" "}
                {new Date(item.createdAt).toLocaleDateString()}
              </span>
              <span>
                <i className="fa fa-map-marker-alt"></i> {item?.state}
              </span>
            </div>

            <p className={`${style.desc} mt-2`} title={item?.descriptions}>
              {item?.descriptions.substring(0, 80)}{" "}
              {item?.descriptions.length > 80 && "..."}
            </p>

            <hr />
          </div>

          <div className="col-md-12">
            <div className="row">
              <small
                className="col-4 p-1 border text-center d-flex align-items-center justify-content-center"
                style={{ fontSize: "12px" }}
              >
                <span>
                  <i className="fa fa-bed"></i> {item?.roomType}{" "}
                  {`Room${item.roomType === "1" ? "" : "s"}`}
                </span>
              </small>
              <small
                className="col-4 p-1 border text-center d-flex align-items-center justify-content-center"
                style={{ fontSize: "12px" }}
              >
                <span>
                  <i className="fa fa-bath"></i> {item?.bathRoomNo} Bath
                </span>
              </small>
              <small
                className="col-4 p-1 border text-center d-flex align-items-center justify-content-center"
                style={{ fontSize: "12px" }}
              >
                <span>
                  <i className="fa fa-toilet"></i> {item?.toiletNo} Toilet
                </span>
              </small>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default RoomCard;
