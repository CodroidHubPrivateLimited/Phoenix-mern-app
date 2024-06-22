import React from "react";
import "../../../App.css";


function Faculties () {
  return (
    <>
      <div class="top-main-container">
        <div class="faculty-heading-container">
          <div>
            <p class="provided-faculty-heading">Faculties Provided</p>
          </div>
          <div>
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
        <div class="faculty-main-container1">
          <div class="faculty-container">
            <h3>BBA</h3>
            {/* <img class="faculty-image-container" src={image5} alt="faculty" /> */}
            <a href="/faculties" class="see-more-link">See more</a>
          </div>

          <div class="faculty-container">
          <h3>BBS</h3>
              {/* <img class="faculty-image-container" src={image2} alt="faculty" /> */}
            <a href="/faculties" class="see-more-link">See more</a>
          </div>
          <div class="faculty-container">
            <h3>BIT</h3>
            {/* <img class="faculty-image-container" src={image3} alt="faculty" /> */}
            <a href="/faculties" class="see-more-link">See more</a>
          </div>
          <div class="faculty-container">
            <h3>BCA</h3>

            {/* <img class="faculty-image-container" src={image4} alt="faculty" /> */}

            <a href="/faculties" class="see-more-link">See more</a>
          </div>
        </div>
        <div class="faculty-main-link-container">
          <a class="faculty-link" href="/faculties">
            See more
          </a>
        </div>
      </div>
    </>
  );
}

export default Faculties;
