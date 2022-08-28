import React, { useRef, useState } from "react";
import { CloudUploadOutlined, DeleteOutlined } from "@ant-design/icons";
import useToast from "../../hooks/toast/useToast";
import { IUpload } from "../../utils/types";
import { beforeUpload } from "../../utils";
import { useAppSelector } from "../../context/GlobalState";
import { httpRequest, HTTPResponse } from "../../https/http";

interface IProps {
  fileList: IUpload[];
  setUploading: React.Dispatch<React.SetStateAction<boolean>>;
  setFileList: React.Dispatch<React.SetStateAction<IUpload[]>>;
}

const FileUploader: React.FC<IProps> = ({
  fileList,
  setFileList,
  setUploading,
}) => {
  const [openNotification] = useToast();
  const [percentage, setPercentage] = useState(0);
  const { auth } = useAppSelector();
  const fileRef = useRef<any>(null);

  const handleFileChange = async (files: any) => {
    if (!auth.isAuth) {
      openNotification(
        "Authentication Failed",
        "Kindly login to proceed with this submission",
        "error"
      );
      return false;
    }

    try {
      for (let i = 0; i < files.length; i++) {
        const isValid: boolean = beforeUpload(
          files[i],
          files.length,
          fileList.length,
          openNotification
        );

        if (!isValid) break;

        setUploading(true);

        const fd = new FormData();
        fd.append("avartar", files[i], files[i].name);
        // fd.append("type", "pdf");
        // fd.append("user", "afams Val");

        const res: HTTPResponse<{ id: string; url: string }> =
          await httpRequest({
            url: "upload/image-upload",
            method: "POST",
            isFormData: true,
            body: fd,
          });

        if (res.status === true) {
          setFileList([...fileList, res.data]);
          setUploading(false);
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

  const onRemove = async (id: string) => {
    const newFileList = fileList.filter((file) => file.id !== id);

    setFileList(newFileList);
  };

  return (
    <>
      <div className="row mt-2">
        <div
          onClick={() => fileRef.current.click()}
          className="col-6 col-md-6 offset-md-1 upload-box text-info"
        >
          <div className="text-main">
            <CloudUploadOutlined style={{ fontSize: "30px" }} />
          </div>
          <h5 className="d-inline text-center text-main">Upload Image</h5>
          <h6>{percentage ? `${percentage}%` : ""}</h6>
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
      {fileList?.length > 0 && (
        <div className="row mt-3 mx-auto">
          {fileList.map((image) => (
            <div className="col-4 mb-2" key={image.id}>
              <div className="row">
                <div className="col-11 mx-auto upload-img-preview">
                  <span
                    className="upload-delete-btn"
                    onClick={() => onRemove(image.id)}
                  >
                    <DeleteOutlined />
                  </span>
                  <img
                    src={image.url}
                    className="mx-auto d-block"
                    style={{
                      maxWidth: "95%",
                      maxHeight: "95%",
                      borderRadius: "5px",
                    }}
                    alt="rooms for rent"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default FileUploader;
