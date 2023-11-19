import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

const Education = () => {
  return (
    <section className="education education_margin_bottom" id="education">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Education</h2>
              <p style={{ color: "#B8B8B8" }}>
                My University Education && Learnings.{" "}
              </p>
              {/* <br style={{color:"white"}}/> */}
              <hr style={{ color: "white" }} />
              <div class="study">
                <span className="tagline_school">
                  <p style={{"font-size":"24px"}}><b>Jamia Millia Islamia </b></p>
                  <p><b>B.TECH <i>(Mechanical Engineering)</i></b></p>
                  <p style={{ color: "#B8B8B8" }}>
                    <i>(2020 - 2024)</i>
                  </p>{" "}
                </span>

                <div class="standard_12">
                  <b>CBCS Subjects: </b>
                  <p className="cbcs_subject_dropdown1" style={{ color: "#bb97ff" }}>
                    <i>Data Structures and Algorithms (DSA)</i>
                  </p>{" "}
                  <p className="cbcs_subject_dropdown2" style={{ color: "#f1ef7a" }}>
                    <i>Database Management Systems (DBMS)</i>
                  </p>{" "}
                  <p className="cbcs_subject_dropdown3" style={{ color: "#8bece7" }}>
                    <i>Object Oriented Programming (OOPs)</i>
                  </p>{" "}
                  <p className="cbcs_subject_dropdown4" style={{ color: "#fb85de" }}>
                    <i>Computer Networking (CN)</i>
                  </p>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
