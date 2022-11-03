import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { resetPwdAction } from "../../context/actions/AuthAction";
import { useAppSelector } from "../../context/GlobalState";
import useToast from "../../hooks/toast/useToast";
import { validateForm } from "../../utils/formValidator";
import style from "./ChangePassword.module.css";

export interface IRestPwd {
  password?: string;
  code?: string;
  confirmPwd?: string;
  oldPassword?: string;
  newPassword?: string;
  isLogin?: boolean;
}

const ChangePassword = () => {
  const [openNotification] = useToast();
  const { dispatch } = useAppSelector();
  const navigate = useNavigate();

  const [form, setForm] = React.useState<IRestPwd>({
    password: "",
    code: "",
    confirmPwd: "",
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { isValid, error } = validateForm(form, true);
    if (!isValid) {
      openNotification(error.title, error.value, "error");
      return false;
    }

    const newForm = {
      oldPassword: "",
      newPassword: form.password,
      isLogin: false,
      code: form.code,
    };
    resetPwdAction(dispatch, newForm, openNotification, navigate);
  };

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
            <form onSubmit={handleSubmit}>
              <div className="mb-3 my-form">
                <input
                  type="text"
                  className="form-control"
                  placeholder=" "
                  onChange={handleChange}
                  value={form.code}
                  name="code"
                />
                <label htmlFor="pwd" className="form-label">
                  Enter OTP:
                </label>
              </div>
              <div className="mb-3 my-form">
                <input
                  type="password"
                  className="form-control"
                  placeholder=" "
                  onChange={handleChange}
                  value={form.password}
                  name="password"
                />
                <label htmlFor="pwd" className="form-label">
                  New Password:
                </label>
              </div>
              <div className="mb-3 my-form">
                <input
                  type="password"
                  className="form-control"
                  placeholder=" "
                  onChange={handleChange}
                  value={form.confirmPwd}
                  name="confirmPwd"
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

              <button type="submit" className="custom-button">
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
