import React, { useState } from "react";
import { Modal } from "antd";
import style from "./CardWithModalDetails.module.css";
import RoomCard from "../card/RoomCard";
import { IRoomDetails } from "../../utils/types";
import { formatCurrency } from "../../utils/formValidator";
import BreakLine from "../break-line/BreakLine";
import ErrorBoundary from "../error-boundary/ErrorBoundary";

interface IProps {
  items: IRoomDetails[];
}
const CardWithModalDetails: React.FC<IProps> = ({ items }) => {
  const [visible, setVisible] = useState(false);
  const [details, setDetails] = useState<IRoomDetails | null>(null);

  const [img, setImg] = useState<string>("");

  const handleClose = () => {
    setVisible(false);
    setDetails(null);
    setImg("");
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
            <ErrorBoundary>
              <RoomCard item={item} modalItem={(obj) => setDetails(obj)} />
            </ErrorBoundary>
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
                  {details?.taken === "1"
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
                  <span className={style.items}>UNIVERSITY: </span>
                  <span className={style.cap}>{details?.university}</span>
                </p>
                <p>
                  <span className={style.items}>EMAIL:</span>{" "}
                  <span>{details?.email}</span>
                </p>
                <p>
                  <span className={style.items}>LOCATION:</span>{" "}
                  <span>{details?.address}</span>
                </p>

                {details?.category && (
                  <p>
                    <span className={style.items}>TYPE:</span>{" "}
                    <span className={style.cap}>{details?.category}</span>
                  </p>
                )}
                <p>
                  <span className={style.items}>DESCRIPTION: </span>
                  <span className={style.cap} style={{ display: "block" }}>
                    <BreakLine
                      newLine={true}
                      str={details?.descriptions || "kjdsjjdfjsdj"}
                    />
                  </span>
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
                  <a
                    href={`tel:${details?.phone}`}
                    className="btn btn-lg px-5 py-3 text-white bg-dark"
                  >
                    {details?.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default CardWithModalDetails;
