import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container skill_container_margin_bottom">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills && Tech. Stacks</h2>
              <p>
                My skills which I have learned so far, and used them to build my
                projects.
              </p>
              <hr style={{ color: "white" }} />
              <span className="tagline_school" style={{width:"fit-content"}}>
                <p style={{ "font-size": "24px", padding: "0 !important"}}>
                  <b>Frontend</b>
                </p>
              </span>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>C Language</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>C++ Language</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>SQL</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>HTML5</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>CSS3</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>Tailwind-CSS</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>ReactJS</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Bootstrap</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>Material-UI</h5>
                </div>
              </Carousel>
              <hr style={{ color: "white" }} />

              <span className="tagline_school" style={{width:"fit-content"}}>
                <p style={{ "font-size": "24px", padding: "0 !important"}}>
                  <b>Backend</b>
                </p>
              </span>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>NodeJS</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>ExpressJS</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>JWT</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>REST-API's</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>Thunder-Client</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>MongoDB</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>Jenkins</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>Git</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>Github</h5>
                </div>
              </Carousel>
              <hr style={{ color: "white" }} />

              <span className="tagline_school" style={{width:"fit-content"}}>
                <p style={{ "font-size": "24px", padding: "0 !important"}}>
                  <b>Soft Skills</b>
                </p>
              </span>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>LeaderShip</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>Scrum</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Communication</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>Problem-Solving</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Teamwork</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
