import { Col } from "react-bootstrap";
import navIcon2 from "../assets/img/github.svg";

export const ProjectCard = ({
  title,
  techs,
  description,
  imgUrl,
  live,
  github,
}) => {
  return (
    <Col size={12} sm={6} md={4} className="project_card_display_fixing">
      <div className="proj-imgbx">
        <img src={imgUrl} alt="img_err" />
        <div className="project_css_section proj-txtx">
          <h6>Tech-stacks: {techs}</h6>
          <span>
            <i>{description}</i>
          </span>
        </div>
      </div>
      <h3>{title}</h3>

      <div className="navbar-text1">
        <button className="project_button vvd " id="project_button_id">
          <a
            id="button_project_remove_deco"
            href={live}
            rel="noreferrer"
            target="_blank"
          >
            Live
          </a>
        </button>
        <button className="project_button vvd" id="project_button_id2">
          <a
            id="button_project_remove_deco2"
            href={github}
            rel="noreferrer"
            target="_blank"
          >
            Github
          </a>
          <img className="icon_social_design" src={navIcon2} alt="icon_err" />
        </button>
      </div>
    </Col>
    // <Col size={12} sm={6} md={4}>
    //   <div className="proj-imgbx">
    //     <img src={imgUrl} />
    //     <div className="proj-txtx">
    //       <h4>{title}</h4>
    //       <span>{description}</span>
    //     </div>
    //   </div>
    // </Col>
  );
};
