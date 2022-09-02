import React, { useEffect, useRef, useState } from "react";
import { CloudUploadOutlined } from "@ant-design/icons";
import useToast from "../../hooks/toast/useToast";
import { IUpload } from "../../utils/types";
import { beforeFileUpload, beforeUpload } from "../../utils";
import { useAppSelector } from "../../context/GlobalState";
import { httpRequest, HTTPResponse } from "../../https/http";
import ImageUploadCard from "./ImageUploadCard";

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
  const [images, setImages] = useState([] as any);
  const [prevImgs, setPrevImags] = useState([] as any);
  const [imageURLS, setImageURLs] = useState<
    { lastModified: string; url: string }[]
  >([]);
  const [openNotification] = useToast();
  const [percentage, setPercentage] = useState(0);
  const { auth } = useAppSelector();
  const fileRef = useRef<any>(null);

  useEffect(() => {
    if (prevImgs.length < 1) return;
    const newImageUrls: any = [];

    let checkValid: { isValid: boolean; error: string } = {
      isValid: true,
      error: "",
    };

    prevImgs.forEach((image: any, i: number) => {
      console.log("first", image);
      newImageUrls.push({
        lastModified: image.lastModified,
        url: URL.createObjectURL(image),
      });
      checkValid = beforeFileUpload(image, prevImgs.length);
    });

    if (checkValid.isValid) {
      setImageURLs(newImageUrls);
    } else {
      openNotification("File Upload Error", checkValid.error, "error");
    }
    setPrevImags([]);
  }, [prevImgs, imageURLS, openNotification]);

  function handleFileChange(e: any) {
    setImages([...e.target.files]);
    setPrevImags([...e.target.files]);
  }

  // const handleFileUpload = async (files: any) => {
  //   if (!auth.isAuth) {
  //     openNotification(
  //       "Authentication Failed",
  //       "Kindly login to proceed with this submission",
  //       "error"
  //     );
  //     return false;
  //   }

  //   try {
  //     let isValid: boolean = true;
  //     const fDatas = new FormData();

  //     for (let i = 0; i < files.length; i++) {
  //       isValid = beforeUpload(
  //         files[i],
  //         files.length,
  //         fileList.length,
  //         openNotification
  //       );
  //       fDatas.append("avartar", files[i], files[i].name);
  //       // fDatas.append("accepted", "images");
  //     }

  //     if (!isValid) return false;

  //     setUploading(true);

  //     // const fd = new FormData();
  //     // fd.append("avartar", files[i], files[i].name);
  //     // fd.append("accepted", "pdf");
  //     // fd.append("user", "afams Val");

  //     // fd.append("avartar", files[i], files[i].name);

  //     const res: HTTPResponse<{ id: string; url: string }[]> =
  //       await httpRequest({
  //         url: "upload/images-upload",
  //         method: "POST",
  //         isFormData: true,
  //         body: fDatas,
  //       });

  //     console.log("images::", res);
  //     return;

  //     if (res.status === true) {
  //       setFileList([...fileList, ...res.data]);
  //       setUploading(false);
  //     } else {
  //       openNotification("File Upload Failed", res.message, "error");
  //       setUploading(false);
  //     }
  //   } catch (error: any) {
  //     openNotification("File Upload Failed", error, "error");
  //     setUploading(false);
  //   }
  // };

  useEffect(() => {
    console.log("images", images);
  }, [images]);

  ////DELETE IMAGES//////////
  const onRemove = async (id: string, uploaded: boolean) => {
    if (uploaded) {
      const newFileList = fileList.filter((file) => file.id !== id);
      setFileList(newFileList);
    } else {
      //REMOVE PREVIEW
      const newFileList = imageURLS.filter((file) => file.lastModified !== id);
      setImageURLs(newFileList);
      //REMOVE FROM SELECTED FILES
      const selectedFileList = images.filter(
        (file: any) => file.lastModified !== id
      );
      setImages(selectedFileList);
    }
  };

  return (
    <>
      <div className="row">
        <span className="mx-3 mb-3">You can upload up to 5 images</span>
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
          onChange={handleFileChange}
          ref={fileRef}
          type="file"
          className="d-none"
          accept="image/*"
        />
      </div>
      {imageURLS?.length > 0 && (
        <div className="row mt-3 mx-auto">
          {imageURLS.map((imageSrc) => (
            <div className="col-4 mb-2" key={imageSrc.lastModified}>
              <ImageUploadCard
                url={imageSrc.url}
                id={imageSrc.lastModified}
                onRemove={(id: string) => onRemove(id, false)}
              />
            </div>
          ))}
        </div>
      )}

      {fileList?.length > 0 && (
        <div className="row mt-3 mx-auto">
          {fileList.map((image) => (
            <div className="col-4 mb-2" key={image.id}>
              <ImageUploadCard
                url={image.url}
                id={image.id}
                onRemove={(id: string) => onRemove(id, true)}
              />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default FileUploader;
