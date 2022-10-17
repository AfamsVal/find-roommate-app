import { useEffect, useState } from "react";
import "./Profile.css";
import { useAppSelector } from "../../../context/GlobalState";
import { getRoomStatistics } from "../../../context/actions/roomsAction";
import { Link, useNavigate } from "react-router-dom";

const Profile = () => {
  const [loading, setLoading] = useState(false);

  return (
    <>
      {/* <div className="row">
        <div className="col-6"></div>
        <div className="col-6">
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
            <button onClick={() => {}} type="button" className="custom-button">
              Sign Up{" "}
              {loading && (
                <span className="spinner-border spinner-border-sm"></span>
              )}
            </button>
          </form>
        </div>
      </div> */}
    </>
  );
};

export default Profile;
