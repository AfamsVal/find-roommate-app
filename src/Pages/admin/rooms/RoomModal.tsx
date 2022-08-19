import { useEffect, useState } from "react";
import { Modal } from "antd";
import PropTypes from "prop-types";

const RoomModal = ({ type, children, data }: any) => {
  console.log("data::", data);
  const [loading, setLoading] = useState<boolean>(false);
  const [visible, setModal] = useState(false);

  const [contact, setContact] = useState({
    key: "",
    name: "",
    amount: "",
    type: "",
    phone: "",
    agentName: "",
    email: "",
    rentAmount: "",
    roomType: "",
    noOfBathroom: "",
    noOfToilet: "",
    university: "",
    state: "",
    location: "",
    houseType: "",
    hasWater: "",
    hasLight: "",
    moreInfo: "",
  });

  useEffect(() => {
    setContact(data);
  }, [data]);

  const showModal = () => {
    setModal(true);
  };

  const handleCancel = () => {
    setModal(false);
    // dispatch.applications.setAdminModalTask(true)
  };

  const submitFormHandle = () => {
    // dispatch(contact)
  };

  return (
    <>
      <button onClick={showModal} className="btn btn-outline-primary">
        {children}
      </button>
      <Modal visible={visible} onCancel={handleCancel} footer={false}>
        <div className="container">
          <div className="row mt-2 block w-full text-white">
            <h1 className="text-black text-2xl mt-2 font-bold">Room Details</h1>

            <p
              className="mt-2 text-black pt-3"
              style={{ borderTop: "2px solid #ccc" }}
            >
              <strong> Property Name:</strong> {contact.name}
            </p>
            <p className="mt-2 text-black">
              <strong> Amount:</strong> {contact.email}
            </p>
            <p className="mt-2 text-black">
              <strong> Phone:</strong> {contact.phone}
            </p>
            <p className="mt-2 text-black">
              <strong> Type:</strong> {contact.type}
            </p>
            <p className="mt-2 text-black">
              <strong> Agent Name:</strong> {contact.agentName}
            </p>
            <p className="mt-2 text-black">
              <strong> Email:</strong> {contact.email}
            </p>
            <p className="col-6 mt-2 text-black">
              <strong> Rent Amount:</strong> {contact.rentAmount}
            </p>
            <p className="col-6 mt-2 text-black">
              <strong> Bathroom:</strong> {contact.noOfBathroom}
            </p>
            <p className="col-6 mt-2 text-black">
              <strong> Room Type:</strong> {contact.roomType}
            </p>
            <p className="col-6 mt-2 text-black">
              <strong> No of Toilet:</strong> {contact.noOfToilet}
            </p>
            <p className="mt-2 text-black">
              <strong> University:</strong> {contact.university}
            </p>
            <p className="mt-2 text-black">
              <strong> State:</strong> {contact.state}
            </p>
            <p className="mt-2 text-black">
              <strong> Location:</strong> {contact.location}
            </p>
            <p className="mt-2 text-black">
              <strong> House Type:</strong> {contact.houseType}
            </p>
            <p className="col-6 mt-2 text-black">
              <strong> Has Water:</strong> {contact.hasWater}
            </p>
            <p className="col-6 mt-2 text-black">
              <strong> Has Light:</strong> {contact.hasLight}
            </p>
            <p className="mt-2 text-black">
              <strong> Details:</strong> {contact.moreInfo}
            </p>

            <div className="mt-2">
              <button
                onClick={submitFormHandle}
                className="btn btn-danger px-4"
                style={{ marginRight: "10px" }}
              >
                {loading && (
                  <i className="fa fa-spin fa-spinner mr-2 font-bold text-lg" />
                )}
                Reject Room
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
