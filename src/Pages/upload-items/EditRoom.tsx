import React, { useEffect, useMemo, useState } from "react";
import FileUploader from "../../components/file-uploader/FileUploader";
import { STATE, UNIVERSITIES } from "../../utils/state";
import { IRoomDetails, IUpload } from "../../utils/types";
import { formatCurrency, validateForm } from "../../utils/formValidator";
import useToast from "../../hooks/toast/useToast";
import { uploadRoomAction } from "../../context/actions/roomsAction";
import { useAppSelector } from "../../context/GlobalState";
import * as types from "../../context/types";
import { httpRequest, HTTPResponse } from "../../https/http";
import { Spin } from "antd";

const EditRoom = ({ id }: { id: number | string }) => {
  const [fileList, setFileList] = useState<IUpload[]>([]);
  const [fetching, setFetching] = useState<boolean>(false);

  const [openNotification] = useToast();
  const { dispatch, auth, loading, success } = useAppSelector();

  const formObj = useMemo(() => {
    return {
      hostelName: "",
      email: "",
      phone: "",
      rentPerYear: "",
      roomType: "",
      bathRoomNo: "",
      toiletNo: "",
      state: "",
      university: "",
      address: "",
      houseType: "",
      hasWater: "",
      hasTiles: "",
      descriptions: "",
    };
  }, []);

  const [form, setForm] = useState<IRoomDetails>(formObj);
  useEffect(() => window.scrollTo(0, 0), []);

  useEffect(() => {
    const getSingleRoom = async () => {
      setFetching(true);
      try {
        //HTTPS REQUEST
        const res: HTTPResponse<IRoomDetails> = await httpRequest({
          url: `room/single-room?id=${id}`,
        });

        if (res.status === true) {
          const { images, ...post } = res?.data;
          setForm(post);
          setFileList(res.data.images);
        } else {
          openNotification(
            "Edit Uploaded Item:",
            "Request failed. Please refresh and try again!",
            "error"
          );
        }
        setFetching(false);
      } catch (error: any) {
        dispatch({ type: types.AUTH_ERROR, payload: error.code });
      }
    };
    getSingleRoom();
  }, []);

  const [uploading, setUploading] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    const { isValid, error } = validateForm(form);

    if (!isValid) {
      openNotification(error.title, error.value, "error");
      return false;
    }

    if (!fileList.length) {
      openNotification(
        "Image Required",
        "Please upload at least 1 image and maximum of 5 images",
        "error"
      );
      return false;
    }

    if (!auth?.isAuth && !auth?.userDetails.userId) {
      openNotification(
        "Authentication Failed",
        "Kindly login to proceed with this submission",
        "error"
      );
      return false;
    }

    const newObj = {
      ...form,
      uid: auth.userDetails.userId,
      images: [...fileList],
    };

    uploadRoomAction(dispatch, newObj, openNotification, true);
  };

  useEffect(() => {
    if (success) {
      setForm(formObj);
      setFileList([]);

      dispatch({ type: types.RESET_ALL });
    }
  }, [formObj, dispatch, success]);

  return (
    <div className="row mb-5">
      <div className="col-11 col-md-10 mx-auto mt-3">
        {fetching === true && (
          <div className="row">
            <div className="col-12">
              {" "}
              <Spin size="large" style={{ marginRight: "12px" }} /> Fetching
              data...
            </div>
          </div>
        )}
        <div className="row">
          <div className="col-12 col-md-8">
            <form className="row">
              <div className="col-md-12 form-group my-2">
                {/* <label htmlFor="email" className="font-bold mb-1">
                    Hostel/Lodge Name:
                  </label> */}
                <input
                  type="text"
                  placeholder="Hostel/Lodge Name"
                  className="form-control"
                  name="hostelName"
                  value={form.hostelName}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6 form-group my-2">
                {/* <label htmlFor="email" className="font-bold mb-1">
                    Email address:
                  </label> */}
                <input
                  placeholder="Email address"
                  type="email"
                  className="form-control"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6 form-group my-2">
                {/* <label htmlFor="pwd" className="font-bold mb-1">
                    Phone Number:
                  </label> */}
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="form-control"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                />
              </div>
              <div
                className="col-md-6 form-group my-2"
                style={{ position: "relative" }}
              >
                <input
                  type="text"
                  placeholder="Rent per year"
                  style={{ paddingLeft: "30px" }}
                  className="form-control"
                  name="rentPerYear"
                  value={formatCurrency(form?.rentPerYear)}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    const rentReplace = e.target.value.replaceAll(",", "");
                    if (isNaN(Number(rentReplace))) return false;
                    setForm({
                      ...form,
                      rentPerYear: rentReplace,
                    });
                  }}
                />
                <span
                  style={{
                    position: "absolute",
                    top: "8px",
                    left: "26px",
                    color: "gray",
                    fontWeight: "bold",
                  }}
                >
                  ₦
                </span>
              </div>
              <div className="col-md-6 form-group my-2">
                <select
                  className="form-control"
                  name="roomType"
                  onChange={handleChange}
                  value={form.roomType}
                >
                  <option value="">-- Select Room Type --</option>
                  <option value="0">Self Contain</option>
                  <option value="1">1 Bedroom Flat</option>
                  <option value="2">2 Bedroom Flat</option>
                  <option value="3">3 Bedroom Flat</option>
                  <option value="4">4 Bedroom Flat</option>
                  <option value="5">5 Bedroom Flat</option>
                </select>
              </div>
              <div className="col-md-6 form-group my-2">
                <select
                  className="form-control"
                  name="bathRoomNo"
                  onChange={handleChange}
                  value={form.bathRoomNo}
                >
                  <option value="">-- Select No of Bath --</option>
                  <option value="1">1 Bathroom</option>
                  <option value="2">2 Bathroom</option>
                  <option value="3">3 Bathroom</option>
                  <option value="4">4 Bathroom</option>
                </select>
              </div>
              <div className="col-md-6 form-group my-2">
                <select
                  className="form-control"
                  name="toiletNo"
                  onChange={handleChange}
                  value={form.toiletNo}
                >
                  <option value="">-- Select No of Toilet --</option>
                  <option value="1">1 Toilet</option>
                  <option value="2">2 Toilet</option>
                  <option value="3">3 Toilet</option>
                  <option value="4">4 Toilet</option>
                </select>
              </div>
              <div className="col-md-6 form-group my-2">
                {/* <label htmlFor="sel1" className="font-bold mb-1">
                    State:
                  </label> */}
                <select
                  className="form-control"
                  name="state"
                  onChange={handleChange}
                  value={form.state}
                >
                  <option value="">-- Select State --</option>
                  {STATE.map((state: string, i: number) => (
                    <option value={state} key={i}>
                      {state}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-md-6 form-group my-2">
                {/* <label htmlFor="sel1" className="font-bold mb-1">
                    No of Rooms:
                  </label> */}
                <select
                  className="form-control"
                  name="university"
                  onChange={handleChange}
                  value={form.university}
                >
                  <option value="">-- Select University --</option>
                  {UNIVERSITIES.map((uni: string, i: number) => (
                    <option key={i} value={uni}>
                      {uni}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-md-12 form-group my-2">
                {/* <label htmlFor="pwd" className="font-bold mb-1">
                    Address (Location):
                  </label> */}
                <input
                  type="text"
                  placeholder="Address (Location)"
                  className="form-control"
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-4 form-group my-2">
                <label
                  htmlFor="sel1"
                  className="mb-1"
                  style={{ fontSize: "12px" }}
                >
                  House Type:
                </label>
                <select
                  className="form-control"
                  name="houseType"
                  onChange={handleChange}
                  value={form.houseType}
                >
                  <option value="">-- Select House Type --</option>
                  <option value="1 Story Building">1 Story Building</option>
                  <option value="2 Story Building">2 Story Building</option>
                  <option value="3 Story Building">3 Story Building</option>
                  <option value="4 Story Building">4 Story Building</option>
                  <option value="Duplex">Duplex</option>
                  <option value="Bongalow">Bongalow</option>
                </select>
              </div>
              <div className="col-md-4 form-group my-2">
                <label
                  htmlFor="sel1"
                  className="mb-1"
                  style={{ fontSize: "12px" }}
                >
                  Has Water:
                </label>
                <select
                  className="form-control"
                  name="hasWater"
                  onChange={handleChange}
                  value={form.hasWater}
                >
                  <option value=""> -- Has Water --</option>
                  <option value="Yes"> Yes</option>
                  <option value="No"> No</option>
                </select>
              </div>
              <div className="col-md-4 form-group my-2">
                <label
                  htmlFor="sel1"
                  className="mb-1"
                  style={{ fontSize: "12px" }}
                >
                  Has Tiles:
                </label>
                <select
                  className="form-control"
                  name="hasTiles"
                  onChange={handleChange}
                  value={form.hasTiles}
                >
                  <option value="">-- Has Tiles --</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No </option>
                </select>
              </div>

              <div className="col-12 form-group my-2">
                <label htmlFor="comment" className="mb-1 text-secondary">
                  Additional Information:
                </label>
                <textarea
                  className="form-control resize-none"
                  rows={5}
                  name="descriptions"
                  onChange={handleChange}
                  value={form.descriptions.replace("\n\n\n", "\n\n")}
                  placeholder="Type here..."
                ></textarea>
              </div>
            </form>
          </div>
          <div className="col-11 mx-auto col-md-4 my-1">
            <FileUploader
              uploading={uploading}
              setUploading={setUploading}
              fileList={fileList}
              setFileList={(item) => setFileList(item)}
            />
          </div>
          <div className="col-md-12 mt-4 mb-5">
            <button
              className="btn btn-outline-secondary btn-lg"
              style={{ marginRight: "8px" }}
              onClick={() => {
                setForm(formObj);
                setFileList([]);
              }}
            >
              Reset
            </button>
            <button
              onClick={handleSubmit}
              disabled={uploading}
              className="btn custom-button  btn-lg read-only"
              title={uploading ? "Please Wait: Uploading Image" : ""}
            >
              Update Now{" "}
              {loading && (
                <span className="spinner-border spinner-border-sm"></span>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditRoom;
