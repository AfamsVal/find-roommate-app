import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import useToast from "../../hooks/toast/useToast";
import {
  clearAuthError,
  registerAction,
} from "../../context/actions/AuthAction";
import { useAppSelector } from "../../context/GlobalState";
import { validateForm } from "../../utils/formValidator";
import { STATE } from "../../utils/state";
import { IRegisterForm } from "../../utils/types";
import style from "./Register.module.css";
import { motion } from "framer-motion";

const Register: React.FC = () => {
  const [openNotification] = useToast();
  const navigate = useNavigate();
  const { auth, dispatch } = useAppSelector();

  useEffect(() => {
    if (auth.authError) {
      openNotification("Registration Failed:", auth.authError, "error");
      clearAuthError(dispatch);
    }

    if (auth.isRegister) {
      openNotification(
        "Registration Success:",
        "Account created successfully",
        "success"
      );
      clearAuthError(dispatch);
      setTimeout(() => navigate("/login"), 1000);
    }
  }, [auth.authError, auth.isRegister, dispatch, navigate, openNotification]);

  const [form, setForm] = React.useState<IRegisterForm>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    state: "",
    gender: "",
    password: "",
    confirmPwd: "",
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = () => {
    const { isValid, error } = validateForm(form, true);
    if (!isValid) {
      openNotification(error.title, error.value, "error");
      return false;
    }

    registerAction(dispatch, form);
  };

  return (
    <div className={`${style.login} container-fluid`}>
      <div className="row h-100 align-content-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", delay: 0.3 }}
          className={`px-3 px-md-5 col-sm-10 col-md-7 col-lg-7 col-xl-5 mx-auto authCard`}
        >
          <h2 className="gradient-text auth-text">Find A Roomate</h2>
          <h4 className="text-black text-center my-4">Sign Up To Continue</h4>
          <div>
            <form>
              <div className="d-md-flex my-4">
                <div className="w-100 mx-1 my-form">
                  <input
                    type="text"
                    name="firstName"
                    onChange={handleChange}
                    value={form.firstName}
                    className="form-control"
                    placeholder=" "
                  />
                  <label htmlFor="First Name" className="form-label">
                    First Name:
                  </label>
                </div>
                <div className="w-100 mx-1 mt-4 mt-md-0 my-form">
                  <input
                    type="text"
                    name="lastName"
                    onChange={handleChange}
                    value={form.lastName}
                    className="form-control"
                    placeholder=" "
                  />
                  <label htmlFor="email" className="form-label">
                    Last Name:
                  </label>
                </div>
              </div>

              <div className="mb-4 d-md-flex mb-3">
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
                <div className="mx-1 w-100 mt-4 mt-md-0 my-form">
                  <input
                    type="text"
                    name="phone"
                    onChange={handleChange}
                    value={form.phone}
                    className="form-control"
                    placeholder=" "
                  />
                  <label htmlFor="Phone No" className="form-label">
                    Phone No:
                  </label>
                </div>
              </div>
              <div className="mb-4 d-md-flex mb-3">
                <div className="mx-1 w-100">
                  <select
                    onChange={handleChange}
                    value={form.state}
                    name="state"
                    className="form-select"
                  >
                    <option value="">Select State</option>
                    {STATE.map((state, i) => (
                      <option value={state} key={i}>
                        {state}
                      </option>
                    ))}
                    <option value="others">Others</option>
                  </select>
                </div>
                <div className="mx-1 mt-4 mt-md-0 w-100">
                  <select
                    value={form.gender}
                    onChange={handleChange}
                    name="gender"
                    className="form-select"
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
              </div>
              <div className="mb-4 d-md-flex">
                <div className="mx-1 w-100 my-form">
                  <input
                    onChange={handleChange}
                    value={form.password}
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder=" "
                  />
                  <label htmlFor="password" className="form-label">
                    Password:
                  </label>
                </div>
                <div className="mx-1 mt-4 mt-md-0 w-100 my-form">
                  <input
                    onChange={handleChange}
                    value={form.confirmPwd}
                    type="password"
                    name="confirmPwd"
                    className="form-control"
                    placeholder=" "
                  />
                  <label htmlFor="Confirm Password" className="form-label">
                    Confirm-Password:
                  </label>
                </div>
              </div>
              <div className="d-md-flex my-3 justify-content-between">
                <div className="form-check mb-3 boc">
                  <label className="form-check-label">
                    <input
                      className="form-check-input p-2"
                      type="checkbox"
                      name="remember"
                    />{" "}
                    Remember me
                  </label>
                </div>
                <div>
                  <Link className="text-decoration-none text-main" to="/login">
                    {" "}
                    Already A Member?
                  </Link>
                </div>
              </div>
              <button
                onClick={handleRegister}
                type="button"
                className="custom-button"
              >
                Sign Up{" "}
                {auth.authLoading && (
                  <span className="spinner-border spinner-border-sm"></span>
                )}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Register;
