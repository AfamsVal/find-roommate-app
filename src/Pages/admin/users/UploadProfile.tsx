import React, { useRef, useState } from "react";
import { CloudUploadOutlined, DeleteOutlined } from "@ant-design/icons";
import { IUpload } from "../../../utils/types";
import useToast from "../../../hooks/toast/useToast";
import { useAppSelector } from "../../../context/GlobalState";
import { beforeUpload } from "../../../utils";
import { httpRequest, HTTPResponse } from "../../../https/http";
import { setFormAction } from "../../../context/actions/AuthAction";

interface IProps {
  userId: string;
  uploading: boolean;
  setUploading: React.Dispatch<React.SetStateAction<boolean>>;
  setForm: React.Dispatch<React.SetStateAction<any>>;
}

const UploadProfile: React.FC<IProps> = ({
  userId,
  setForm,
  uploading,
  setUploading,
}) => {
  const { dispatch } = useAppSelector();
  const [openNotification] = useToast();
  const fileRef = useRef<any>(null);

  const handleFileChange = async (files: any) => {
    try {
      for (let i = 0; i < files.length; i++) {
        const isValid: boolean = beforeUpload(files[i], 1, 1, openNotification);

        if (!isValid) break;

        setUploading(true);

        const fd = new FormData();
        fd.append("avartar", files[i], files[i].name);
        fd.append("userId", userId);
        // fd.append("type", "pdf");

        const res: HTTPResponse<{ id: string; url: string }> =
          await httpRequest({
            url: "upload/image-upload-profile",
            method: "POST",
            isFormData: true,
            body: fd,
          });

        if (res.status === true) {
          setForm(res.data.url);
          setFormAction(dispatch, res.data.url);
          setUploading(false);
          openNotification(
            "File Upload:",
            "Image uploaded successfully!",
            "success"
          );
        } else {
          openNotification("File Upload Failed", res.message, "error");
          setUploading(false);
        }
      }
    } catch (error: any) {
      openNotification("File Upload Failed", error, "error");
      setUploading(false);
    }
  };

  return (
    <>
      <div className="row">
        <div className="col-12">
          <button
            onClick={() => fileRef.current.click()}
            className="custom-button"
            style={{ padding: "5px 10px", fontSize: "16px" }}
          >
            <i className="fas fa-image"></i> Change Image{" "}
            {uploading ? (
              <span className="spinner-border spinner-border-sm"></span>
            ) : (
              ""
            )}
          </button>
        </div>
        <input
          // multiple
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleFileChange(e.target.files)
          }
          ref={fileRef}
          type="file"
          className="d-none"
          accept="image/*"
        />
      </div>
    </>
  );
};

export default UploadProfile;
