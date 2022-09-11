import { useEffect, useState } from "react";
import { Modal } from "antd";
import PropTypes from "prop-types";

const UserModal = ({ type, children, data }: any) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [visible, setModal] = useState(false);

  const [contact, setContact] = useState({
    key: "",
    name: "",
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
          <div className="row mt-2">
            <div className="block w-full text-white">
              <h1 className="text-black text-2xl mt-2 font-bold">
                User Details
              </h1>
              <p className="mt-2 text-black">
                <strong> Name:</strong> {contact.name}
              </p>
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
                onClick={submitFormHandle}
                className="btn btn-danger px-4"
              >
                {loading && (
                  <i className="fa fa-spin fa-spinner mr-2 font-bold text-lg" />
                )}
                Block User
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
