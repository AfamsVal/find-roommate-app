import { useEffect, useState } from "react";
import { Modal } from "antd";
import PropTypes from "prop-types";
import { IRoomDetails } from "../../../utils/types";

const RoomModal = ({ type, children, data }: any) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [visible, setModal] = useState(false);

  const [room, setRoom] = useState<IRoomDetails>({
    address: "",
    bathRoomNo: "",
    category: "",
    createdAt: "",
    descriptions: "",
    email: "",
    hasTiles: "",
    hasWater: "",
    hostelName: "",
    houseType: "",
    image: "",
    images: [],
    isVerified: "",
    key: "",
    phone: "",
    rentPerYear: "",
    roomType: "",
    state: "",
    toiletNo: "",
    uid: "",
    university: "",
    updatedAt: "",
    uploadedBy: "",
  });

  useEffect(() => {
    setRoom(data);
  }, [data]);

  const showModal = () => {
    setModal(true);
  };

  const handleCancel = () => {
    setModal(false);
    // dispatch.applications.setAdminModalTask(true)
  };

  const submitFormHandle = () => {
    // dispatch(room)
  };

  return (
    <>
      <button onClick={showModal} className="btn btn-outline-primary">
        {children}
      </button>
      <Modal visible={visible} onCancel={handleCancel} footer={false}>
        <div className="container">
          <div className="row mt-2 block w-full text-white">
            <div className="col-12">
              <h1 className="text-black text-2xl mt-2 font-bold">
                Room Details
              </h1>

              <p
                className="mt-2 text-black pt-3"
                style={{ borderTop: "2px solid #ccc" }}
              >
                <strong> Property Name:</strong> {room.hostelName}
              </p>
              <p className="mt-2 text-black">
                <strong> Amount:</strong> ₦{room.rentPerYear}
              </p>
              <p className="mt-2 text-black">
                <strong> Phone:</strong> {room.phone}
              </p>
              <p className="mt-2 text-black">
                <strong> Type:</strong> {room.roomType}
              </p>
              <p className="mt-2 text-black">
                <strong> Uploaded By:</strong> {room.uploadedBy}
              </p>
              <p className="mt-2 text-black">
                <strong> Email:</strong> {room.email}
              </p>
              <p className="col-6 mt-2 text-black">
                <strong> Bathroom:</strong> {room.bathRoomNo}
              </p>
              <p className="col-6 mt-2 text-black">
                <strong> Room Type:</strong> {room.roomType}
              </p>
              <p className="col-6 mt-2 text-black">
                <strong> No of Toilet:</strong> {room.toiletNo}
              </p>
              <p className="mt-2 text-black">
                <strong> University:</strong> {room.university}
              </p>
              <p className="mt-2 text-black">
                <strong> State:</strong> {room.state}
              </p>
              <p className="mt-2 text-black">
                <strong> Location:</strong> {room.address}
              </p>
              <p className="mt-2 text-black">
                <strong> House Type:</strong> {room.houseType}
              </p>
              <p className="col-6 mt-2 text-black">
                <strong> Has Water:</strong> {room.hasWater}
              </p>
              <p className="col-6 mt-2 text-black">
                <strong> Has Tiles:</strong> {room.hasTiles}
              </p>
              <p className="mt-2 text-black">
                <strong> Details:</strong> {room.descriptions}
              </p>
            </div>

            <div className="col-12">
              <div className="row">
                {room.images.length &&
                  room.images.map((img: { id: number; url: string }) => (
                    <div className="col-4" key={img.id}>
                      <img src={img.url} alt="rooms" className="w-100" />
                    </div>
                  ))}
              </div>
            </div>
            <div className="col-12 mt-3">
              <div className="mt-2">
                <button
                  onClick={submitFormHandle}
                  className="btn btn-danger px-4"
                  style={{ marginRight: "10px" }}
                >
                  {loading && (
                    <i className="fa fa-spin fa-spinner mr-2 font-bold text-lg" />
                  )}
                  Block Room
                </button>
                <button
                  onClick={submitFormHandle}
                  className="btn btn-success px-4"
                >
                  {loading && (
                    <i className="fa fa-spin fa-spinner mr-2 font-bold text-lg" />
                  )}
                  Approve Room
                </button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

RoomModal.propTypes = {
  children: PropTypes.array,
  type: PropTypes.string.isRequired,
  data: PropTypes.object,
  disabled: PropTypes.bool,
};

export default RoomModal;
