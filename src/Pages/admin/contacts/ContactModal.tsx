import { useEffect, useState } from "react";
import { Modal } from "antd";
import PropTypes from "prop-types";

const ContactModal = ({ type, children, data }: any) => {
  console.log("data::", data);
  const [loading, setLoading] = useState<boolean>(false);
  const [visible, setModal] = useState(false);

  const [contact, setContact] = useState({
    key: "",
    name: "",
    email: "",
    subject: "",
    details: "",
    message: "",
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
                Contact Details
              </h1>
              <p className="mt-2 text-black">
                <strong> Name:</strong> {contact.name}
              </p>
              <p className="mt-2 text-black">
                <strong> Email:</strong> {contact.email}
              </p>
              <p className="mt-2 text-black">
                <strong> Subject:</strong> {contact.subject}
              </p>
              <p className="mt-2 text-black">{contact.details}</p>
            </div>

            <div className="mt-2">
              <textarea
                className="w-100 resize-none mt-2 py-2 px-2 rounded-lg"
                value={contact.message}
                name="note"
                rows={5}
                placeholder="Message here..."
                onChange={({ target }) =>
                  setContact({ ...contact, message: target.value })
                }
              />
            </div>

            <div className="mt-5">
              <button
                onClick={submitFormHandle}
                className="btn custom-button px-4"
              >
                {loading && (
                  <i className="fa fa-spin fa-spinner mr-2 font-bold text-lg" />
                )}
                Reply
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

ContactModal.propTypes = {
  children: PropTypes.array,
  type: PropTypes.string.isRequired,
  data: PropTypes.object,
  disabled: PropTypes.bool,
};

export default ContactModal;
