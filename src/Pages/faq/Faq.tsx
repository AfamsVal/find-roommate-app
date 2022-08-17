import React from "react";
import ButtomLine from "../../components/buttom-border/ButtomLine";
import { containerVariants } from "../about/About";
import { motion } from "framer-motion";

const Faq = () => {
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
          className="col-md-10 mx-auto mt-3 mt-md-5"
          style={{ marginBottom: "100px" }}
        >
          <div className="row">
            <div className="col-md-12 text-center my-3">
              <h1 className="gradient-text">Frequently Asked Questions</h1>
              <div className="my-3">
                <ButtomLine circleSize="12px" lineSize="100px" align="center" />
              </div>
              <p className="px-5">
                Below is the list of top trusted rooms you can pick from
              </p>
            </div>

            <div className="col-md-12 mt-3">
              <div id="accordion">
                <div className="card">
                  <div className="card-header p-0">
                    <a
                      className="d-block text-left text-black p-3 text-decoration-none"
                      data-bs-toggle="collapse"
                      href="#collapseOne"
                    >
                      What is Find Roomy application
                    </a>
                  </div>
                  <div
                    id="collapseOne"
                    className="collapse show"
                    data-bs-parent="#accordion"
                  >
                    <div className="card-body">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Animi deserunt vero ut odio quos quasi veritatis ratione
                      et facilis accusantium aut distinctio, culpa, hic, cum
                      itaque vel quis molestias doloribus. Ipsa facere quam
                      nesciunt modi alias aut eum aspernatur reiciendis nihil,
                      ea delectus fuga. Reprehenderit, nam. Doloribus pariatur
                      id similique, facere architecto porro in placeat numquam.
                      Error explicabo accusamus animi! Omnis assumenda
                      doloremque earum quibusdam eaque eum modi dolor nostrum
                      quam ut maxime, repellendus sequi quidem, accusamus
                      pariatur maiores sed quod! Rerum at praesentium impedit
                      iste nemo non itaque ex!
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-header p-0">
                    <a
                      className="collapsed d-block text-left text-black p-3 text-decoration-none"
                      data-bs-toggle="collapse"
                      href="#collapseTwo"
                    >
                      Is find Roomy applicatio secured
                    </a>
                  </div>
                  <div
                    id="collapseTwo"
                    className="collapse "
                    data-bs-parent="#accordion"
                  >
                    <div className="card-body">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Deserunt culpa numquam dolor cumque distinctio voluptates,
                      sapiente tempora omnis dolorem suscipit dolores commodi,
                      praesentium tenetur quae itaque repellat ipsam, facilis
                      asperiores! Eos, saepe, alias tenetur quisquam, nihil unde
                      rerum velit magnam iusto voluptas aut ex! Numquam, dolores
                      blanditiis officiis eaque soluta sunt suscipit dolorum
                      provident, facere eligendi corporis animi, sapiente quas.
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-header p-0">
                    <a
                      className="collapsed d-block text-left text-black p-3 text-decoration-none"
                      data-bs-toggle="collapse"
                      href="#collapseThree"
                    >
                      How can I post in Find Roomy application
                    </a>
                  </div>
                  <div
                    id="collapseThree"
                    className="collapse"
                    data-bs-parent="#accordion"
                  >
                    <div className="card-body">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Soluta alias, maxime accusamus culpa dolores voluptatum
                      fugiat error adipisci nostrum laboriosam dicta! Magni, ad.
                      Ea, repellendus minima ab eius adipisci nobis? Accusamus
                      beatae quae laborum ratione iusto explicabo delectus
                      distinctio laboriosam impedit sint ullam est, eaque
                      quisquam commodi magni nihil eveniet modi itaque iure
                      culpa tenetur in. Est aspernatur voluptas quisquam? Iure,
                      a blanditiis. Aliquam possimus dolorum laboriosam quod?
                      Quos aut magnam possimus accusantium accusamus iste minima
                      hic similique ex ipsum. Labore porro odio laboriosam illo
                      commodi odit a asperiores! Asperiores?
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
