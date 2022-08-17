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
      dispatch({ type: types.STOP_LOADING });
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
      className={`${style.login} container-fluid`}
    >
      <div className="row h-100   px-0  ">
        <div
          className={`${style.imageCon} px-0 mx-0 h-100  col-sm-10 col-md-6 col-lg-6 col-xl-6 mx-auto `}
        >
          <img
            src={card}
            className={`${style.imageCard}  h-100 w-100`}
            alt="contact us"
          />
        </div>
        <div
          className={` px-md-5 col-sm-10  col-md-6 col-lg-6 col-xl-6 mx-auto  ${style.formCard}  `}
        >
          <div className={style.topItem}>
            <div className={`auth-text gradient-text my-4`}>Contact Us</div>
            <h2>
              If You Have Any Query, Please Feel <br /> Free Contact Us
            </h2>
            <p className="text-center">
              We love questions and feedback - and we're always happy to help!
              Send us a message and we'll respond within 24 hours
            </p>
          </div>
          <div>
            <form>
              <div className="d-md-flex my-4">
                <div className="w-100 mx-1 my-form">
                  <input
                    type="text"
                    name="name"
                    onChange={handleChange}
                    value={form.name}
                    className="form-control"
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
                    className="form-control"
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
