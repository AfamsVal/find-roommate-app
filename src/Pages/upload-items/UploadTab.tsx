import { ArrowLeftOutlined } from "@ant-design/icons";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EditRoom from "./EditRoom";
import UploadRoom from "./UploadRoom";
import UploadRoommate from "./UploadRoommate";

const UploadTab = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {}, []);

  const [tab, setTab] = React.useState<string>("room");
  return (
    <div className="container fix-offset">
      <div className="row">
        <div className="col-md-12 mt-3">
          <div
            onClick={() => navigate(-1)}
            className="d-flex align-items-center cursor-pointer"
          >
            <ArrowLeftOutlined
              className="-mt-2 text-danger font-bold"
              style={{ marginRight: "8px" }}
            />{" "}
            <span className="font-bold">Back</span>
          </div>
        </div>
        <div className="col-10 mx-auto mt-3">
          <h3 className="text-main"> {id ? "Edit " : "New "} Submission</h3>
          <p>Fill in the form below and upload image(s) to match</p>

          {id ? (
            <div className="d-flex upload-title">
              <div className={`upload-nav ${tab === "room" ? "active" : ""} `}>
                <i className="fas fa-feather"></i> Edit Room
              </div>
            </div>
          ) : (
            <div className="d-flex upload-title">
              <div
                className={`upload-nav ${tab === "room" ? "active" : ""} `}
                onClick={() => setTab("room")}
              >
                <i className="fas fa-feather"></i> Upload Room
              </div>
              <div
                className={`upload-nav ${tab === "roommate" ? "active" : ""} `}
                onClick={() => setTab("roommate")}
              >
                <i className="fas fa-feather" /> Upload Roommate
              </div>
            </div>
          )}
        </div>
      </div>
      {id ? (
        <EditRoom id={id} />
      ) : tab === "room" ? (
        <UploadRoom />
      ) : (
        <UploadRoommate />
      )}
    </div>
  );
};

export default UploadTab;
