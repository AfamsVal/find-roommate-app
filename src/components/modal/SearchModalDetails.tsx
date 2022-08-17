import React, { useEffect, useState } from "react";
import { Modal } from "antd";
import style from "./SearchModalDetails.module.css";
import { IRoomDetails } from "../../utils/types";
import { formatCurrency } from "../../utils/formValidator";
import Loader from "../loader/Loader";

interface IProps {
  itemId: string;
  children: JSX.Element;
}

const SearchModalDetails: React.FC<IProps> = ({ itemId, children }) => {
  const [visible, setVisible] = useState(false);
  const [details, setDetails] = useState<IRoomDetails | null>(null);
  const [img, setImg] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const handleClose = () => {
    setVisible(false);
    setDetails(null);
  };

  const showModal = () => {
    setVisible(true);
    setLoading(true);
    console.log("itemId", itemId);
  };

  return (
    <>
      <div onClick={showModal}>{children}</div>
      <Modal
        title={`FindRoomy | ${
          details?.hostelName ? (
            <h2 className={style.items}>{details?.hostelName}</h2>
          ) : (
            ""
          )
        }
        ${
          details?.applicantName ? (
            <h2 className={style.items}>{details?.applicantName}</h2>
          ) : (
            ""
          )
        }`}
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
          {loading ? (
            <div className="row">
              <div className="col-12" style={{ overflow: "hidden" }}>
                <Loader />
              </div>
            </div>
          ) : (
            <div className="row">
              <div className="col-md-6 col-12">
                <div className={`${style.topImage} `}>
                  <img
                    src={img || details?.images[0].url}
                    style={{ width: "90%" }}
                    alt={details?.hostelName}
                  />
                  <div className={`${style.bage} px-3 py-2`}>
                    <i className="fa fa-home"></i>{" "}
                    {details?.isVerified ? "Verified" : "Not Verified"}
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="more-images d-flex flex-wrap mb-3">
                      {details?.images.map(
                        (item: { url: string; id: string }, i: number) => (
                          <div
                            key={i}
                            onClick={() => setImg(item.url)}
                            className={`${style.bottomImage}  mt-3 p-2 cursor-pointer `}
                            style={{
                              width: "100px",
                              height: "80px",
                            }}
                          >
                            <img
                              src={item.url}
                              className="w-100 h-100"
                              alt="not found"
                            />
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-12">
                <div className={`${style.leftTopContainer} `}>
                  {details?.hostelName && (
                    <h2 className={style.items}>{details?.hostelName}</h2>
                  )}
                  {details?.applicantName && (
                    <h2 className={style.items}>{details?.applicantName}</h2>
                  )}
                  <p>({details?.address})</p>
                  <h3 className={style.pricing}>
                    {" "}
                    ₦{formatCurrency(String(details?.rentPerYear))}.00
                  </h3>
                  <div>
                    <hr />
                  </div>
                  {details?.applicantName && (
                    <p>
                      <span className={style.items}>AGENT NAME:</span>{" "}
                      <span>{details?.applicantName}</span>
                    </p>
                  )}
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
                    <span className="card-badge">
                      {details?.bathRoomNo} Bathroom
                    </span>
                    <span className="card-badge">
                      {details?.toiletNo} Toilet
                    </span>
                    <span className="card-badge">{details?.houseType}</span>
                    <span className="card-badge">{details?.houseType}</span>
                    <span className="card-badge">{details?.category}</span>
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
                    <button className="btn btn-lg px-5 py-3 text-white bg-dark">
                      {details?.phone}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </Modal>
    </>
  );
};

export default SearchModalDetails;
