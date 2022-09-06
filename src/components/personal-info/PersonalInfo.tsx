import React, { useEffect } from "react";
import { updateProfileAction } from "../../context/actions/contactAction";
import { useAppSelector } from "../../context/GlobalState";
import useToast from "../../hooks/toast/useToast";
import { validateForm } from "../../utils/formValidator";
import { IProfileInfo } from "../../utils/types";
import * as types from "../../context/types";

const PersonalInfo = () => {
  const [openNotification] = useToast();
  const { auth, dispatch, loading, loadingTwo, success, error } =
    useAppSelector();

  const { userInfo, userId }: any = auth.userDetails;

  const [form, setForm] = React.useState<IProfileInfo>({
    firstName: userInfo.firstName,
    lastName: userInfo.lastName,
    email: userInfo.email,
    phone: userInfo.phone,
    password: "",
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleContact = () => {
    const { isValid, error } = validateForm(form);
    if (!isValid) {
      openNotification(error.title, error.value, "error");
      return false;
    }
    updateProfileAction(dispatch, { id: userId, ...form });
  };

  useEffect(() => {
    if (error) {
      openNotification("Request Error:", error, "error");
    }

    if (success) {
      openNotification(
        "Request Success:",
        "Account Updated Successfully!",
        "success"
      );
    }
    dispatch({ type: types.RESET_ALL });
  }, [success, error, dispatch]);

  return (
    <>
      {/* 
      ////////////
      PERSONAL INFORMATION
      ////////////////////// */}
      <div className="col-12 col-md-12">
        <h4 className="mx-2 mt-3 p-3 personal-info-title">
          Personal Information
        </h4>
        <div className={`px-2 col-sm-10  col-md-6`}>
          <div className="d-flex flex-column justify-center "></div>
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
                  <label htmlFor="firstName" className="form-label">
                    First Name:
                  </label>
                </div>

                <div className="mx-1 w-100 my-form">
                  <input
                    type="text"
                    name="lastName"
                    onChange={handleChange}
                    value={form.lastName}
                    className="form-control"
                    placeholder=" "
                  />
                  <label htmlFor="lastName" className="form-label">
                    Last Name:
                  </label>
                </div>
              </div>

              <div className="mb-4 d-md-flex">
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
                <div className="w-100 mx-1 my-form">
                  <input
                    type="text"
                    name="phone"
                    onChange={handleChange}
                    value={form.phone}
                    className="form-control"
                    placeholder=" "
                  />
                  <label htmlFor="phone" className="form-label">
                    Phone No:
                  </label>
                </div>
              </div>

              <div className="mb-4 d-md-flex">
                <div className="w-100 mx-1 my-form">
                  <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    value={form.password}
                    className="form-control"
                    placeholder=" "
                  />
                  <label htmlFor="subject" className="form-label">
                    Enter Password:
                  </label>
                </div>
              </div>
              <div className="px-1">
                <button
                  onClick={handleContact}
                  type="button"
                  className="custom-button"
                >
                  Update Now{" "}
                  {loading && (
                    <span className="spinner-border spinner-border-sm"></span>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* 
      ////////////
      SECURITY INFORMATION
      ////////////////////// */}

      <div className="col-12 col-md-12 my-5">
        <h4 className="mx-2 mt-5 p-3 personal-info-title">Change Password</h4>
        <div className={`px-2 col-sm-10  col-md-6`}>
          <div className="d-flex flex-column justify-center "></div>
          <div>
            <form>
              <div className="mb-4 d-md-flex mt-3">
                <div className="w-100 mx-1 my-form">
                  <input
                    type="password"
                    name="oldPassword"
                    onChange={handleChange}
                    value={form.oldPassword}
                    className="form-control"
                    placeholder=" "
                  />
                  <label htmlFor="subject" className="form-label">
                    Old Password:
                  </label>
                </div>
              </div>

              <div className="mb-4 d-md-flex">
                <div className="w-100 mx-1 my-form">
                  <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    value={form.password}
                    className="form-control"
                    placeholder=" "
                  />
                  <label htmlFor="subject" className="form-label">
                    New Password:
                  </label>
                </div>
              </div>
              <div className="mb-4 d-md-flex">
                <div className="w-100 mx-1 my-form">
                  <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    value={form.password}
                    className="form-control"
                    placeholder=" "
                  />
                  <label htmlFor="subject" className="form-label">
                    Confirm Password:
                  </label>
                </div>
              </div>

              <div className="px-1">
                <button
                  onClick={handleContact}
                  type="button"
                  className="custom-button"
                >
                  Update Now{" "}
                  {loadingTwo && (
                    <span className="spinner-border spinner-border-sm"></span>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonalInfo;
