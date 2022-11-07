import React, { useEffect, useState } from "react";
import "./Profile.css";
import { useAppSelector } from "../../../context/GlobalState";
import useToast from "../../../hooks/toast/useToast";
import { IRegisterForm, IUpload } from "../../../utils/types";
import { validateForm } from "../../../utils/formValidator";
import { STATE } from "../../../utils/state";
import { profileUpdateAction } from "../../../context/actions/AuthAction";
import { getProfileListing } from "../../../context/actions/roomsAction";
import Loader from "../../../components/loader/Loader";
import EmptyState from "../../../components/loader/EmptyState";
import ProfileModalDetails from "../../../components/ProfileModalDetails.module.css/ProfileModalDetails";
import UploadProfile from "../users/UploadProfile";
import profileImg from "../../../assets/images/profile.webp";

const Profile: React.FC = () => {
  const [openNotification] = useToast();
  const { auth, dispatch, listing }: any = useAppSelector();

  const { allListing, loading } = listing;

  useEffect(() => {
    window.scrollTo(0, 0);
    getProfileListing(dispatch, {
      uid: auth?.userDetails?.userId,
      start: 0,
      limit: 5000,
    });
  }, [dispatch, auth?.userDetails?.userId]);

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

  const { firstName, lastName, email, phone, state, gender, profileURL } =
    auth.userDetails.userInfo;

  const [form, setForm] = React.useState<IRegisterForm>({
    firstName,
    lastName,
    email,
    phone,
    state: state,
    gender: gender.charAt(0).toUpperCase() + gender.substr(1),
    password: "",
    profileURL,
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleUpdate = () => {
    const { isValid, error } = validateForm(form, false);
    if (!isValid) {
      openNotification(error.title, error.value, "error");
      return false;
    }
    const { userId } = auth?.userDetails;

    // const { email, ...newForm } = form;

    profileUpdateAction(dispatch, openNotification, {
      id: userId,
      ...form,
    });
  };

  //IMAGE UPLOAD CODE BELOW//
  const [uploading, setUploading] = useState<boolean>(false);

  //END IMAGE UPLOAD //

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
          <div className="card mb-3 col-12 col-md-6">
            <div className="bg-lighter">
              <img
                src={form.profileURL || profileImg}
                width="100%"
                alt="profile"
              />
            </div>
            <div className="card-body">
              <UploadProfile
                uploading={uploading}
                setUploading={setUploading}
                userId={auth?.userDetails.userId}
                setForm={(url) => {
                  setForm({ ...form, profileURL: url });
                }}
              />
            </div>
          </div>
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
                {auth.authLoading && (
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
              <div className="row px-2 mb-5" style={{ fontSize: "14px" }}>
                <div className="col-md-12 py-5">
                  <div className="row" style={{ marginBottom: "100px" }}>
                    {loading ? (
                      <div className="col-md-12 mt-5 pt-2">
                        <div className="row">
                          <Loader />
                        </div>
                      </div>
                    ) : !loading && allListing.length ? (
                      <ProfileModalDetails items={allListing} />
                    ) : (
                      !loading && !allListing.length && <EmptyState />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
