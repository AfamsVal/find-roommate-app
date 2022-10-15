// import React, { useState } from "react";
import ButtomLine from "../../components/buttom-border/ButtomLine";
import { containerVariants } from "../about/About";
import { motion } from "framer-motion";
// import axios from "axios";

const Faq = () => {
  //   interface IUpload {
  //     lastModified: string | number;
  //     lastModifiedDate: any;
  //     name: "";
  //     size: 0;
  //     type: "";
  //   }
  //   const [file, setFile] = useState<any>({
  //     lastModified: "",
  //     lastModifiedDate: "",
  //     name: "",
  //     size: 0,
  //     type: "",
  //   });

  //   const onChange = (e: any) => {
  //     setFile(e?.target?.files[0]);
  //   };

  // const uploadHandler = () => {
  //   const fd = new FormData();
  //   fd.append("avartar", file, file.name);
  //   // fd.append("type", "pdf");
  //   // fd.append("user", "afams Val");

  //   axios
  //     .post("http://localhost/findRoomy/backend/api/upload/image-upload", fd, {
  //       headers: {
  //         "content-type": "multipart/form-data",
  //       },

  //       // onDownloadProgress(progressEvent) {

  //       // },
  //       onUploadProgress: (progressEvent) => {
  //         console
  //           .log
  //           // "progress: " +
  //           //   Math.round((progressEvent.loaded / progressEvent.total) * 100) +
  //           //   "%"
  //           ();
  //       },
  //     })
  //     .then((res) => console.log(res.data))
  //     .catch((err) => console.log("err:", err.response.data));
  // };

  // onUploadProgress: progressEvent => {
  //   let percentComplete = progressEvent.loaded / progressEvent.total
  //   percentComplete = parseInt(percentComplete * 100);
  //   console.log(percentComplete);
  //   updateProgress(percentComplete);
  // }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="clear"
      className="container fix-offset"
    >
      <div className="row">
        <div
          className="col-12 col-md-10 mx-auto mt-3 mt-md-5"
          style={{ marginBottom: "100px" }}
        >
          <div className="row">
            <div className="col-md-12 text-center my-3">
              <h1 className="gradient-text">Frequently ... Asked Questions</h1>
              <div className="my-3">
                <ButtomLine circleSize="12px" lineSize="100px" align="center" />
              </div>
              <p className="px-5">
                Below is the list of top trusted rooms you can pick from
              </p>
            </div>

            {/* <div className="col-md-12 my-5 d-none">
              <input type="file" onChange={onChange} />
              <div className="mt-3">
                <button onClick={uploadHandler} className="btn btn-primary">
                  Upload Image
                </button>
              </div>
            </div> */}
            <div className="col-md-12 mt-3">
              <div id="accordion">
                <div className="card">
                  <div className="card-header p-0 bg-main">
                    <a
                      className="d-block text-left text-white p-3 text-decoration-none"
                      data-bs-toggle="collapse"
                      href="#collapseOne"
                    >
                      What is FindRoomy application
                    </a>
                  </div>
                  <div
                    id="collapseOne"
                    className="collapse show"
                    data-bs-parent="#accordion"
                  >
                    <div className="card-body">
                      FindRommy application is a platform where you can get a
                      comfortable accomodation within a short period of time at
                      cheap prices. You can also find a Roomy on our platform
                      byjust uploading it. We also make sure our customers are
                      safe and comfortable at all cost.
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-header p-0">
                    <a
                      className="collapsed d-block text-left text-white p-3 text-decoration-none"
                      data-bs-toggle="collapse"
                      href="#collapseTwo"
                    >
                      How can I upload a room
                    </a>
                  </div>
                  <div
                    id="collapseTwo"
                    className="collapse "
                    data-bs-parent="#accordion"
                  >
                    <div className="card-body">
                      On the landing page, you will see a button that says
                      "Upload Item". A form will be provided for you to fill,
                      fill the form and when you're done, you submit it with the
                      "Publish Now" button.
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-header p-0">
                    <a
                      className="collapsed d-block text-left text-white p-3 text-decoration-none"
                      data-bs-toggle="collapse"
                      href="#collapseThree"
                    >
                      How can my room be verified
                    </a>
                  </div>
                  <div
                    id="collapseThree"
                    className="collapse"
                    data-bs-parent="#accordion"
                  >
                    <div className="card-body">
                      After uploading, you can get a quick support response from
                      our team within the next 48 hours.
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-header p-0">
                    <a
                      className="collapsed d-block text-left text-white p-3 text-decoration-none"
                      data-bs-toggle="collapse"
                      href="#collapseFour"
                    >
                      How can I reach out to the support team
                    </a>
                  </div>
                  <div
                    id="collapseFour"
                    className="collapse "
                    data-bs-parent="#accordion"
                  >
                    <div className="card-body">
                      Click on the Contact Us link on the menu section and fill
                      the form there. We'll reach out to you within 24 hours.
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-header p-0">
                    <a
                      className="collapsed d-block text-left text-white p-3 text-decoration-none"
                      data-bs-toggle="collapse"
                      href="#collapseFive"
                    >
                      How can I earn from FindRoomy
                    </a>
                  </div>
                  <div
                    id="collapseFive"
                    className="collapse "
                    data-bs-parent="#accordion"
                  >
                    <div className="card-body">
                      For now, we don't have any earning unit but we will upload
                      that soon.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Faq;
