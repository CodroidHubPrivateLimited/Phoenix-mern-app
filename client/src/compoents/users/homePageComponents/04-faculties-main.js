import React from "react";
import "../homePageComponents/04-faculties-main.css";
import NavBar from "../navigation/navbar";

function FacultiesMain() {
  return (
    <>
      <div class="top-container">
        <div class="mainDiv">
          <div>
            <h3>Faculties</h3>
            <p class="desciption">
              Kubernetes Operators are application-specific controllers that
              extend the Kubernetes API to create, configure, and manage
              instances of stateful applications such as databases. Using the
              MongoDB Kubernetes operator, you have full control over your
              MongoDB deployment from a single Kubernetes control plane, with a
              consistent experience across different deployment environments.
            </p>
          </div>
        </div>
      </div>

      <div>
        <div class="faculty-main-container01">
          <div class="Two-faculty-column-container">
            <div class="faculty-container">
              <h3>BBA</h3>
              {/* <img class="faculty-image-container" src={image5} alt="faculty" /> */}
              <a href="#" class="see-more-link">
                See more
              </a>
            </div>
            <div class="faculty-container">
              <h3>BBS</h3>
              {/* <img class="faculty-image-container" src={image2} alt="faculty" /> */}
              <a href="#" class="see-more-link">
                See more
              </a>
            </div>
          </div>

          <div class="Two-faculty-column-container">
            <div class="faculty-container">
              <h3>BIT</h3>
              {/* <img class="faculty-image-container" src={image3} alt="faculty" /> */}
              <a href="#" class="see-more-link">
                See more
              </a>
            </div>
            <div class="faculty-container">
              <h3>BCA</h3>

              {/* <img class="faculty-image-container" src={image4} alt="faculty" /> */}

              <a href="#" class="see-more-link">
                See more
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FacultiesMain;
