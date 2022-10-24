import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  clearAuthError,
  forgotPwdAction,
} from "../../context/actions/AuthAction";
import { useAppSelector } from "../../context/GlobalState";
import useToast from "../../hooks/toast/useToast";
import { validateForm } from "../../utils/formValidator";
import style from "./ForgotPassword.module.css";

const ForgotPassword = () => {
  const { auth, dispatch } = useAppSelector();
  const [email, setEmail] = React.useState<string>("");
  const navigate = useNavigate();

  const [openNotification] = useToast();


  useEffect(() => {
    console.log('err:', auth)
    if (auth.authError) {
      openNotification("Registration Failed:", auth.authError, "error");
      clearAuthError(dispatch);
    }
  }, [auth.authError, dispatch, openNotification]);



  const handleChange = (e: any) => {
    setEmail(e.target.value);
  };

  const handleSubmit = () => {
    const { isValid, error } = validateForm({ email });
    if (!isValid) {
      openNotification(error.title, error.value, "error");
      return false;
    }

    forgotPwdAction(dispatch,navigate, {email});
  };
  return (
    <div className={`${style.login} container-fluid`}>
      <div className="row h-100 align-content-center">
        <div
          className={`px-3 px-md-5 col-sm-10 col-md-6 col-lg-5 col-xl-4 mx-auto authCard`}
        >
          <h2 className="gradient-text auth-text">Find A Roomate</h2>
          <h4 className="text-black text-center my-4">
            {" "}
            Recover Your Password
          </h4>
          <div>
            <form>
              <div className="mb-3 mt-3 my-form">
                <input
                  type="email"
                  className="form-control"
                  placeholder=" "
                  name="email"
                  onChange={handleChange}
                  value={email}
                />
                <label htmlFor="email" className="form-label">
                  Enter e-mail:
                </label>
              </div>
              <div>
                <Link to="/login" className={style.backBtn}>
                  Back to Login
                  <i
                    className={`${style.fontIcon} fa fa-light fa-long-arrow-right fa-6x`}
                    aria-hidden="true"
                  ></i>
                </Link>
              </div>
              <div className="d-flex mt-5">
                <button
                  onClick={handleSubmit}
                  type="button"
                  className="custom-button"
                >
                  Reset Now{" "}
                  {auth.authLoading && (
                    <span className="spinner-border spinner-border-sm"></span>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
