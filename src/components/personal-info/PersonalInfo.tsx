import React, { useState } from "react";
import useToast from "../../hooks/toast/useToast";
import { validateForm } from "../../utils/formValidator";
import { IProfileInfo } from "../../utils/types";

const PersonalInfo = () => {
  const [openNotification] = useToast();
  const [loading, setLoading] = useState<boolean>(false);

  const [form, setForm] = React.useState<IProfileInfo>({
    name: "",
    email: "",
    phone: "",
    password: "",
    newPassword: "",
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

    // contactUsAction(dispatch, form);
  };

  return (
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
                  value={form.phone}
                  className="form-control"
                  placeholder=" "
                />
                <label htmlFor="subject" className="form-label">
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
                  Old Password:
                </label>
              </div>
            </div>

            <div className="mb-4 d-md-flex">
              <div className="w-100 mx-1 my-form">
                <input
                  type="password"
                  name="newPassword"
                  onChange={handleChange}
                  value={form.newPassword}
                  className="form-control"
                  placeholder=" "
                />
                <label htmlFor="subject" className="form-label">
                  New Password:
                </label>
              </div>
            </div>

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
          </form>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
