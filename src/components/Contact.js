import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import TrackVisibility from 'react-on-screen';

export const Contact = () => {

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Get In Touch</h2>
                <form  action="https://getform.io/f/1631b85b-6b52-41ba-b16e-05aada4f3598" method="POST">
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input name="First Name" type="text" placeholder="First Name"/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input name="Last Name" type="text" placeholder="Last Name"/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input name="Email address" type="email" placeholder="Email Address"/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input name="Mobile Number" type="tel" placeholder="Phone No."/>
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea name="message" rows="6" placeholder="Message"></textarea>
                      <button className="contactme" type="submit"><span>Send</span></button>
                    </Col>
                  </Row>
                </form>
              </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
