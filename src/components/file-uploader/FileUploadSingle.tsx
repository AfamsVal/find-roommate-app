import React, { useRef, useState } from "react";
import { CloudUploadOutlined, DeleteOutlined } from "@ant-design/icons";
import useToast from "../../hooks/toast/useToast";
import { storage } from "../../firebase";
import { v4 as uuidv4 } from "uuid";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { IUpload } from "../../utils/types";
import { beforeUpload } from "../../utils";
import { useAppSelector } from "../../context/GlobalState";

interface IProps {
  fileList: IUpload[];
  setUploading: React.Dispatch<React.SetStateAction<boolean>>;
  setFileList: React.Dispatch<React.SetStateAction<IUpload[]>>;
}

const FileUploadSingle: React.FC<IProps> = ({
  fileList,
  setFileList,
  setUploading,
}) => {
  const [openNotification] = useToast();
  const [percentage, setPercentage] = useState(0);
  const { dispatch, auth } = useAppSelector();
  const fileRef = useRef<any>(null);

  const handleFileChange = (files: any) => {
    if (!auth.isAuth) {
      openNotification(
        "Authentication Failed",
        "Kindly login to proceed with this submission",
        "error"
      );
      return false;
    }

    for (let i = 0; i < files.length; i++) {
      const isValid: boolean = beforeUpload(
        files[i],
        files.length,
        fileList.length,
        openNotification
      );

      if (!isValid) break;

      setUploading(true);

      const imageRef = ref(storage, `images/${Math.random() + files[i].name}`);
      const uploadTask = uploadBytesResumable(imageRef, files[i]);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );

          setPercentage(progress);
        },
        (error) => {
          dispatch({
            type: "AUTH_ERROR",
            payload: "Image Upload Error",
          });
        },
        () => {
          getDownloadURL(imageRef)
            .then((url) => {
              if (i + 1 === files.length) {
                setTimeout(() => setUploading(false), 1000);
              }

              setFileList((list: IUpload[]) => [
                {
                  id: uuidv4(),
                  url: url,
                },
                ...list,
              ]);
              setTimeout(() => setPercentage(0), 1000);
            })
            .catch((err) => {
              dispatch({
                type: "AUTH_ERROR",
                payload: "Image Upload Error",
              });
            });
        }
      );
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
          multiple
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

export default FileUploadSingle;
