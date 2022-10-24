import React from "react";
import { Link } from "react-router-dom";
import style from "./ChangePassword.module.css";

const ChangePassword = () => {
//   const [form, setForm] = React.useState<IRegisterForm>({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     state: "",
//     gender: "",
//     password: "",
//     confirmPwd: "",
//   });

//   const handleChange = (e: any) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleRegister = () => {
//     const { isValid, error } = validateForm(form, true);
//     if (!isValid) {
//       openNotification(error.title, error.value, "error");
//       return false;
//     }

//     registerAction(dispatch, form);
//   };

  return (
    <div className={`${style.login} container-fluid`}>
      <div className="row h-100 align-content-center">
        <div
          className={`px-3 px-md-5 col-sm-10 col-md-6 col-lg-5 col-xl-4 mx-auto authCard`}
        >
          <h2 className="gradient-text auth-text">Find A Roomate</h2>
          <h4 className="text-black text-center my-4 p-sm-2">
            Change Password
          </h4>
          <div>
            <form>
              <div className="mb-3 my-form">
                <input
                  type="number"
                  className="form-control"
                  id="pwd"
                  placeholder=" "
                  name="pswd"
                />
                <label htmlFor="pwd" className="form-label">
                  Enter OTP:
                </label>
              </div>
              <div className="mb-3 my-form">
                <input
                  type="password"
                  className="form-control"
                  id="pwd"
                  placeholder=" "
                  name="pswd"
                />
                <label htmlFor="pwd" className="form-label">
                  New Password:
                </label>
              </div>
              <div className="mb-3 my-form">
                <input
                  type="password"
                  className="form-control"
                  id="pwd"
                  placeholder=" "
                  name="pswd"
                />
                <label htmlFor="pwd" className="form-label">
                  Confirm New Password:
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
                  <Link to="/login" className="text-decoration-none text-main">
                    Login?
                  </Link>
                </div>
              </div>

              <button type="button" className="custom-button">
                Change Password
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
