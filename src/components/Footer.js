import { Container, Row, Col } from "react-bootstrap";
// import { MailchimpForm } from "./MailchimpForm";
import navIcon1 from "../assets/img/linkedin.svg";
import navIcon2 from "../assets/img/leetcode.svg";
import navIcon3 from "../assets/img/github.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
            {/* <img src={logo} alt="Logo" /> */}
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end mt-5">
            <div className="social-icon">
              <a
                target="_blank"
                without
                rel="noreferrer"
                className="social_icons_background"
                href="https://www.linkedin.com/in/nazeed-khan/"
              >
                <img className="icon_social_design" src={navIcon1} alt="" />
              </a>
              <a
                target="_blank"
                without
                rel="noreferrer"
                className="social_icons_background2"
                href="https://leetcode.com/Nazeed/"
              >
                <img className="icon_social_design" src={navIcon2} alt="" />
              </a>
              <a
                target="_blank"
                without
                rel="noreferrer"
                className="social_icons_background3"
                href="https://github.com/Nazeedkhan"
              >
                <img className="icon_social_design" src={navIcon3} alt="" />
              </a>
            </div>
            <p>Copyright 2023. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
