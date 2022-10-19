import React, { useEffect } from "react";
import "./Profile.css";
import { useAppSelector } from "../../../context/GlobalState";
import { Link, useNavigate } from "react-router-dom";
import useToast from "../../../hooks/toast/useToast";
import { IRegisterForm } from "../../../utils/types";
import { validateForm } from "../../../utils/formValidator";
import { STATE } from "../../../utils/state";
import CardWithModalDetails from "../../../components/modal/CardWithModalDetails";
import { profileUpdateAction } from "../../../context/actions/AuthAction";

const Profile: React.FC = () => {
  const [openNotification] = useToast();
  const { auth, dispatch }: any = useAppSelector();

  const { listing } = useAppSelector();
  const { allListing, loading } = listing;

  useEffect(() => {
    if (auth.authError) {
      openNotification("Registration Failed:", auth.authError, "error");
      // clearAuthError(dispatch);
    }

    if (auth.isRegister) {
      openNotification(
        "Registration Success:",
        "Account created successfully",
        "success"
      );
    }
  }, [auth.authError, auth.isRegister, dispatch, openNotification]);

  const { firstName, lastName, email, phone, state, gender } =
    auth.userDetails.userInfo;

  const [form, setForm] = React.useState<IRegisterForm>({
    firstName,
    lastName,
    email,
    phone,
    state: state.split(" ")[0],
    gender: gender.charAt(0).toUpperCase() + gender.substr(1),
    password: "",
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleUpdate = () => {
    const { isValid, error } = validateForm(form, true);
    if (!isValid) {
      openNotification(error.title, error.value, "error");
      return false;
    }

    profileUpdateAction(dispatch, form);
  };

  return (
    <>
      <div className="row px-2">
        <div className="mt-4 mb-3 col-12">
          <h3 className="text-dark mb-2">Profile</h3>
          <div>
            <span style={{ marginRight: "10px" }}>Admin</span>
            <span
              style={{
                marginRight: "10px",
                fontWeight: "bold",
                color: "gray",
              }}
            >
              &gt;
            </span>
            <span style={{ marginRight: "10px" }}>Profile</span>
          </div>
        </div>

        <div className="col-12 col-sm-9 col-md-7 mb-5">
          <div className="card">
            <form className="card-body">
              <p
                className="p-2 bg-main"
                style={{
                  color: "white",
                  borderRadius: "6px",
                }}
              >
                User Details
              </p>
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
                    disabled
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
                    {STATE.map((stat, i) => (
                      <option value={stat} key={i}>
                        {stat}
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
                    disabled
                    className="form-select"
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
              </div>
              <div className="mb-4 mb-3">
                <div className="mx-1 w-100 my-form">
                  <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    value={form.password}
                    className="form-control"
                    placeholder=" "
                    autoComplete="password"
                  />
                  <label
                    htmlFor="password"
                    className="form-label"
                    style={{ fontSize: "16px" }}
                  >
                    Password:
                  </label>
                </div>
              </div>
              <button
                onClick={handleUpdate}
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

        <div className="col-12 col-md-12">
          <div className="card">
            <div className="card-body bold bg-lighter">
              <p
                className="p-2 my-2 bg-main"
                style={{
                  color: "white",
                  borderRadius: "6px",
                }}
              >
                Uploaded Items
              </p>
              <div className="px-2 row mt-4" style={{ fontSize: "14px" }}>
                <CardWithModalDetails items={allListing} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
