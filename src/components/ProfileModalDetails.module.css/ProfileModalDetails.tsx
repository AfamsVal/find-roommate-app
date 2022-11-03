import React, { useState, useEffect } from "react";
import { Modal } from "antd";
import style from "./ProfileModalDetails.module.css";
import RoomCard from "../card/RoomCard";
import { IRoomDetails } from "../../utils/types";
import { formatCurrency } from "../../utils/formValidator";
import {
  blockRoomAction,
  takenRoomAction,
} from "../../context/actions/roomsAction";
import useToast from "../../hooks/toast/useToast";
import { useAppSelector } from "../../context/GlobalState";
import { Link } from "react-router-dom";

interface IProps {
  items: IRoomDetails[];
}
const ProfileModalDetails: React.FC<IProps> = ({ items }) => {
  const [openNotification] = useToast();
  const [visible, setVisible] = useState(false);
  const [details, setDetails] = useState<IRoomDetails | null>(null);

  const [img, setImg] = useState<string>("");

  const handleClose = () => {
    setVisible(false);
    setDetails(null);
    setImg("");
  };

  const {
    loadingTwo,
    loadingThree,
    dispatch,
    auth: {
      userDetails: { userId },
    },
  } = useAppSelector();

  const handleDelete = (type: string, roomId: string) => {
    blockRoomAction(dispatch, openNotification, { userId, roomId, type });
  };

  const handleTaken = (roomId: string) => {
    takenRoomAction(dispatch, openNotification, roomId, userId);
  };

  return (
    <>
      {items.length > 0 &&
        items.map((item: IRoomDetails) => (
          <div
            key={item?.key}
            className="col-12 col-sm-6 col-md-4 col-lg-3"
            onClick={() => setVisible(true)}
          >
            <RoomCard item={item} modalItem={(obj) => setDetails(obj)} />
          </div>
        ))}
      <Modal
        title={`FindRoomy`}
        centered
        style={{ marginTop: "15vh", marginBottom: "20px" }}
        visible={visible}
        onOk={handleClose}
        onCancel={handleClose}
        width={1000}
        footer={[]}
      >
        <div
          className="container"
          style={{ zIndex: "999", position: "relative" }}
        >
          <div className="row">
            <div className="col-md-6 col-12">
              <div className={`${style.topImage} `}>
                <img
                  src={img || details?.image}
                  style={{ width: "90%" }}
                  alt={details?.hostelName}
                />
                <div className={`${style.bage} px-3 py-2`}>
                  <i className="fa fa-home"></i>{" "}
                  {details?.taken
                    ? "Taken"
                    : details?.isVerified === "1"
                    ? "Verified"
                    : "Not Verified"}
                </div>
              </div>
              {details?.images.length > 0 && (
                <div className="row">
                  <div className="col-12">
                    <div className="more-images d-flex flex-wrap mb-3">
                      {details?.images.map(
                        (item: { url: string; id: string }, i: number) => (
                          <div
                            key={i}
                            onClick={() => setImg(item?.url)}
                            className={`${style.bottomImage}  mt-3 p-2 cursor-pointer `}
                            style={{
                              width: "100px",
                              height: "80px",
                            }}
                          >
                            <img
                              src={item?.url}
                              className="w-100 h-100"
                              alt="not found"
                            />
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="col-md-6 col-12">
              <div className={`${style.leftTopContainer} `}>
                {details?.hostelName && (
                  <h2 className={style.items}>
                    {details?.hostelName.toUpperCase()}
                  </h2>
                )}

                <p>({details?.address})</p>
                <h3 className={style.pricing}>
                  {" "}
                  ₦{formatCurrency(String(details?.rentPerYear))}.00
                </h3>
                <div>
                  <hr />
                </div>
                <p>
                  <span className={style.items}>UPLOADED BY:</span>{" "}
                  <span>{details?.uploadedBy}</span>
                </p>
                <p>
                  <span className={style.items}>PHONE:</span>{" "}
                  <span>{details?.phone}</span>
                </p>
                <p>
                  <span className={style.items}>UNIVERSITY: </span>
                  <span className={style.cap}>{details?.university}</span>
                </p>
                <p>
                  <span className={style.items}>EMAIL:</span>{" "}
                  <span>{details?.email}</span>
                </p>

                {details?.category && (
                  <p>
                    <span className={style.items}>TYPE:</span>{" "}
                    <span className={style.cap}>{details?.category}</span>
                  </p>
                )}
                <p>
                  <span className={style.items}>DESCRIPTION: </span>
                  <span className={style.cap}>{details?.descriptions}</span>
                </p>
                <p>
                  {details?.roomType === "0" ? (
                    <span className="card-badge">Self Contain</span>
                  ) : (
                    <span className="card-badge">
                      {details?.roomType} Bedroom
                    </span>
                  )}
                  <span className="card-badge">
                    {details?.bathRoomNo} Bathroom
                  </span>
                  <span className="card-badge">{details?.toiletNo} Toilet</span>
                  <span className="card-badge">{details?.houseType}</span>
                  <span className="card-badge">
                    {" "}
                    Has Tiles ({details?.hasTiles})
                  </span>
                  <span className="card-badge">
                    {" "}
                    Has Water ({details?.hasWater})
                  </span>
                </p>
                <div className="pt-3">
                  <button
                    onClick={() =>
                      handleDelete("blocked", details?.key as string)
                    }
                    className="btn btn-lg px-3 text-white bg-danger mr-2"
                  >
                    <i className="fas fa-trash-alt" />{" "}
                    {Number(details?.blocked) > 0 ? "Deleted" : "Delete"}
                    {loadingThree && (
                      <i className="fa fa-spin fa-spinner mr-2 font-bold text-lg" />
                    )}
                  </button>{" "}
                  &nbsp; &nbsp;
                  {details?.taken !== "1" && (
                    <button
                      onClick={() => handleTaken(details?.key as string)}
                      className="btn btn-lg px-3 text-white bg-warning"
                    >
                      <i className="fas fa-check-circle" /> Taken
                      {loadingTwo && (
                        <i className="fa fa-spin fa-spinner mr-2 font-bold text-lg" />
                      )}
                    </button>
                  )}
                  &nbsp; &nbsp;
                  <Link
                    to={`/upload-items/${details?.key}`}
                    className="btn btn-lg px-3 text-white bg-info"
                  >
                    <i className="fas fa-edit" /> Edit
                    {loadingTwo && (
                      <i className="fa fa-spin fa-spinner mr-2 font-bold text-lg" />
                    )}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ProfileModalDetails;
