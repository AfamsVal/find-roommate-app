import { useEffect, useState } from "react";
import { Modal } from "antd";
import PropTypes from "prop-types";
import profileImg from "../../../assets/images/profile.webp";
import { useAppSelector } from "../../../context/GlobalState";
import useToast from "../../../hooks/toast/useToast";
import { blockUnblockAction } from "../../../context/actions/AuthAction";

const UserModal = ({ type, children, data }: any) => {
  const { dispatch } = useAppSelector();
  const [openNotification] = useToast();
  const [loading, setLoading] = useState<boolean>(false);
  const [visible, setModal] = useState(false);

  const [contact, setContact] = useState({
    key: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    gender: "",
    state: "",
  });

  useEffect(() => {
    setContact(data);
  }, [data]);

  const showModal = () => {
    setModal(true);
  };

  const handleCancel = () => {
    setModal(false);
  };

  const submitBtnHandle = (userId: string, type: string) => {
    blockUnblockAction(dispatch, openNotification, { userId, type });
  };

  return (
    <>
      <button onClick={showModal} className="btn btn-outline-primary">
        {children}
      </button>
      <Modal visible={visible} onCancel={handleCancel} footer={false}>
        <div className="container">
          <div className="row mt-2">
            <div className="block w-full text-white">
              <h1 className="text-black text-2xl mt-2 font-bold">
                User Details
              </h1>
              <div>
                <img src={profileImg} width="120" alt="profile" />
              </div>
              <div>
                <hr style={{ borderBottom: "1px solid #999" }} />
              </div>
              <div className="mt-2 mb-3">
                <h2 className="ml-2 pl-1 text-main">
                  {data.lastName} {data.firstName}
                </h2>
                <em className="text-lighter">
                  <span>Created: </span>
                  {new Date(data.createdAt).toLocaleString("en-US", {
                    day: "numeric",
                    month: "numeric",
                    year: "numeric",
                    hour: "numeric",
                    minute: "numeric",
                    hour12: true,
                  })}
                </em>
              </div>
              <p className="mt-2 text-black">
                <strong> Email:</strong> {contact.email}
              </p>
              <p className="mt-2 text-black">
                <strong> Phone:</strong> {contact.phone}
              </p>
              <p className="mt-2 text-black">
                <strong> Gender:</strong> {contact.gender}
              </p>
              <p className="mt-2 text-black">
                <strong> State:</strong> {contact.state}
              </p>
            </div>

            <div className="mt-2">
              <button
                onClick={() =>
                  submitBtnHandle(
                    data.key,
                    data.isBlocked === "1" ? "unblocked" : "blocked"
                  )
                }
                className={`btn px-4 ${
                  data.isBlocked === "1" ? "btn-danger" : "btn-warning"
                }`}
              >
                {data.isBlocked === "1" ? "Unblock User" : "Block User"}{" "}
                {loading && (
                  <i className="fa fa-spin fa-spinner mr-2 font-bold text-lg" />
                )}
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

UserModal.propTypes = {
  children: PropTypes.array,
  type: PropTypes.string.isRequired,
  data: PropTypes.object,
  disabled: PropTypes.bool,
};

export default UserModal;
