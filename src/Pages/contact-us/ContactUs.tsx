import React, { useEffect } from "react";
import useToast from "../../hooks/toast/useToast";
import { validateForm } from "../../utils/formValidator";
import { IContact } from "../../utils/types";
import style from "./ContactUs.module.css";
import card from "../../assets/images/contact.jpg";
import { contactUsAction } from "../../context/actions/contactAction";
import { useAppSelector } from "../../context/GlobalState";
import { clearError } from "../../context/actions/AuthAction";
import * as types from "../../context/types";
import { motion } from "framer-motion";
import { containerVariants } from "../about/About";

const ContactUs: React.FC = () => {
  const [openNotification] = useToast();
  const { dispatch, loading, error, contactUs } = useAppSelector();

  const [form, setForm] = React.useState<IContact>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  useEffect(() => {
    if (error) {
      openNotification("Failed Response:", error, "error");
      clearError(dispatch);
    }

    if (contactUs.contactSuccess) {
      setForm({ name: "", email: "", subject: "", message: "" });
      openNotification(
        "Success Response:",
        "Your feedback was recieved successfully. Thanks!",
        "success",
        15
      );

      dispatch({ type: types.CONTACT_US_RESET });
      dispatch({ type: types.RESET_ALL });
    }
  }, [contactUs.contactSuccess, error, dispatch, openNotification]);

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleContact = () => {
    const { isValid, error } = validateForm(form);
    if (!isValid) {
      openNotification(error.title, error.value, "error");
      return false;
    }

    contactUsAction(dispatch, form);
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="clear"
      className={`${style.login} container-fluid fix-offset`}
      style={{ marginBottom: "50px" }}
    >
      <div className="row px-0">
        <div
          className={`${style.imageCon} d-none d-md-block col-md-6 mx-auto d-md-flex align-items-center`}
        >
          <img
            src={card}
            className={`${style.imageCard} w-75 mx-auto`}
            alt="contact us"
          />
        </div>
        <div className={`px-md-5 col-sm-10 col-md-6 mx-auto  mt-5 `}>
          <div>
            <div className={`auth-text gradient-text mb-5`}>Contact Us</div>
            <h4 className="text-center text-dark">
              If You Have Any Query, Please Feel <br /> Free to Contact Us
            </h4>
          </div>
          <div>
            <form>
              <div className="d-md-flex mt-5">
                <div className="w-100 mx-1 my-form">
                  <input
                    type="text"
                    name="name"
                    onChange={handleChange}
                    value={form.name}
                    className="form-control mb-4"
                    placeholder=" "
                  />
                  <label htmlFor="FullName" className="form-label">
                    Name:
                  </label>
                </div>

                <div className="mx-1 w-100 my-form">
                  <input
                    type="text"
                    name="email"
                    onChange={handleChange}
                    value={form.email}
                    className="form-control mb-4"
                    placeholder=" "
                  />
                  <label htmlFor="email" className="form-label">
                    Email:
                  </label>
                </div>
              </div>

              <div className="mb-4 d-md-flex">
                <div className="w-100 mx-1 my-form">
                  <input
                    type="text"
                    name="subject"
                    onChange={handleChange}
                    value={form.subject}
                    className="form-control"
                    placeholder=" "
                  />
                  <label htmlFor="subject" className="form-label">
                    Subject:
                  </label>
                </div>
              </div>
              <div className="mb-4 d-md-flex">
                <div className="w-100 mx-1 my-form">
                  <textarea
                    name="message"
                    onChange={handleChange}
                    value={form.message}
                    className="form-control resize-none"
                    placeholder="Message here..."
                    rows={5}
                  />
                </div>
              </div>

              <button
                onClick={handleContact}
                type="button"
                className="custom-button  d-block mx-auto"
              >
                Send Message{" "}
                {loading && (
                  <span className="spinner-border spinner-border-sm"></span>
                )}
              </button>
            </form>
          </div>
        </div>
        {/* col7 end */}
      </div>
    </motion.div>
  );
};

export default ContactUs;
