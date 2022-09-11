import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import useToast from "../../hooks/toast/useToast";
import { loginAction } from "../../context/actions/AuthAction";
import { useAppSelector } from "../../context/GlobalState";
import { validateForm } from "../../utils/formValidator";
import { ILogin } from "../../utils/types";
import style from "./Login.module.css";
import { motion } from "framer-motion";

const btnVarient = {
  hover: { scale: 1.1 },
};

const Login: React.FC = () => {
  const [openNotification] = useToast();

  const { auth, dispatch } = useAppSelector();

  console.log("auth", auth);

  const navigate = useNavigate();

  useEffect(() => {
    if (auth.isAuth) {
      auth.userDetails.isAdmin ? navigate("/admin/overview") : navigate("/");
    }

    if (auth.authError) {
      openNotification("Login Failed:", auth.authError, "error");
      dispatch({ type: "CLEAR_AUTH_ERROR" });
    }
  }, [
    auth.isAuth,
    auth.authError,
    auth.userDetails.isAdmin,
    navigate,
    openNotification,
    dispatch,
  ]);

  const [form, setForm] = React.useState<ILogin>({
    email: "",
    password: "",
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    const { isValid, error } = validateForm(form);
    if (!isValid) {
      openNotification(error.title, error.value, "error");
      return false;
    }

    loginAction(dispatch, openNotification, form);
  };

  return (
    <div className={`${style.login} container-fluid`}>
      <div className="row h-100 align-content-center px-3 px-md-0">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 75, delay: 0.2 }}
          className={`px-3 px-md-5 col-sm-10 col-md-6 col-lg-5 col-xl-4 mx-auto authCard`}
        >
          <motion.h2
            initial={{ x: -50, opacity: 0, scale: 0 }}
            animate={{ x: [30, 0], opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 2,
            }}
            // transition={{
            //   type: "spring", stiffness:120
            // }}
            className="gradient-text auth-text"
          >
            Find A Roomate
          </motion.h2>
          <h4 className="text-black text-center my-4 p-sm-2">
            Login To Continue
          </h4>
          <div>
            <form>
              <div className="mb-3 mt-3 my-form">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder=" "
                  value={form.email}
                  onChange={handleChange}
                />
                <label htmlFor="email" className="form-label">
                  Email:
                </label>
              </div>
              <div className="mb-3 my-form">
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder=" "
                  value={form.password}
                  onChange={handleChange}
                />
                <label htmlFor="password" className="form-label">
                  Password:
                </label>
              </div>
              <div className="d-flex my-3 justify-content-between">
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
                  <Link
                    to="/forgot-password"
                    className="text-decoration-none text-main"
                  >
                    Forgot Password?
                  </Link>
                </div>
              </div>
              <motion.button
                onClick={handleLogin}
                type="button"
                className="custom-button"
                variants={btnVarient}
                whileHover="hover"
              >
                Login{" "}
                {auth.authLoading && (
                  <span className="spinner-border spinner-border-sm"></span>
                )}
              </motion.button>
            </form>
            <div className="d-flex justify-content-between">
              <small className="mt-4 text-sm">
                <Link to="/register" className="auth-link">
                  Create Account?
                </Link>
              </small>
              <small className="mt-4 text-sm">
                <Link to="/" className="auth-link">
                  <i className="fa fa-home" /> Back to Home
                </Link>
              </small>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
