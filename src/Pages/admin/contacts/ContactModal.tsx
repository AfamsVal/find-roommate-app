import { useEffect, useState } from "react";
import { Modal } from "antd";
import PropTypes from "prop-types";
import useToast from "../../../hooks/toast/useToast";
import { useAppSelector } from "../../../context/GlobalState";
import {
  adminReplyContactAction,
  fetchAllContactAction,
} from "../../../context/actions/contactAction";
import * as types from "../../../context/types";

const ContactModal = ({ type, children, data }: any) => {
  const [openNotification] = useToast();

  const [visible, setModal] = useState(false);
  const { loadingTwo, dispatch, auth, success } = useAppSelector();
  const [text, setText] = useState("");
  const [contact, setContact] = useState({
    key: "",
    name: "",
    email: "",
    subject: "",
    details: "",
    message: "",
    reply: "",
    createdAt: "",
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

  const replyFormHandle = () => {
    if (!text) {
      return openNotification(
        "Validation Error:",
        "Reply message is required!",
        "error"
      );
    }

    dispatch(
      adminReplyContactAction(dispatch, openNotification, {
        contactId: contact.key,
        adminUID: auth.userDetails.userId,
        reply: text,
      })
    );
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
              <h1 className="text-main text-2xl mt-2 font-bold">
                Contact Details
              </h1>
              <p>
                <strong className="text-main"> Date: </strong>

                <em className="text-lighter">
                  {new Date(contact.createdAt).toLocaleString("en-US", {
                    day: "numeric",
                    month: "numeric",
                    year: "numeric",
                    hour: "numeric",
                    minute: "numeric",
                    hour12: true,
                  })}
                </em>
              </p>
              <p className="mt-2 text-black">
                <strong className="text-main"> Name: </strong> {contact.name}
              </p>
              <p className="mt-2 text-black">
                <strong className="text-main"> Email: </strong> {contact.email}
              </p>
              <p className="mt-2 text-black text-bold font-bold">
                <strong className="text-main"> Subject: </strong>
                {contact.subject}
              </p>
              <p className="mt-2 text-black special-font">{contact.message}</p>
              <div>
                <hr style={{ borderBottom: "gray 1px solid" }} />
              </div>

              <p className="mt-2 text-black text-bold font-bold">Reply: </p>

              <p className="mt-2 text-lighter font-bold">
                <em>{contact.reply ? contact.reply : "No reply yet..."}</em>
              </p>
            </div>

            <div className="mt-2">
              <textarea
                className="w-100 resize-none py-2 px-2 rounded-lg"
                value={text}
                rows={4}
                placeholder="Message here..."
                onChange={({ target }) => setText(target.value)}
              />
            </div>

            <div className="mt-3">
              <button
                disabled={contact?.reply !== ""}
                onClick={replyFormHandle}
                className="btn custom-button px-4"
              >
                {contact?.reply === "" ? "Reply" : "Treated"}{" "}
                {loadingTwo && (
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

ContactModal.propTypes = {
  children: PropTypes.array,
  type: PropTypes.string.isRequired,
  data: PropTypes.object,
  disabled: PropTypes.bool,
};

export default ContactModal;
