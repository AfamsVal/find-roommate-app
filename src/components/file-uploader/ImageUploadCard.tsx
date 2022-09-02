import { DeleteOutlined } from "@ant-design/icons";
import React from "react";

const ImageUploadCard = ({ url, id, onRemove }: any) => {
  return (
    <div className="row">
      <div className="col-11 mx-auto upload-img-preview">
        <span className="upload-delete-btn" onClick={() => onRemove(id)}>
          <DeleteOutlined />
        </span>
        <img
          src={url}
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
  );
};

export default ImageUploadCard;
