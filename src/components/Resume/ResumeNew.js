import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
// import pdf from "../../Assets/mehnakv.pdf";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  // FaFileDownload,
  // FaArrowRight,
} from "react-icons/fa";

function ResumeNew() {
  const contacts = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "mehna7@gmail.com",
      link: "mailto:mehna7@gmail.com",
    },
    {
      icon: <FaPhoneAlt />,
      title: "Phone",
      value: "+971 55 574 6821",
      link: "tel:+971555746821",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      value: "Dubai, United Arab Emirates",
    },
    {
      icon: <FaLinkedin />,
      title: "LinkedIn",
      value: "linkedin.com/in/mehna-kv",
      link: "https://linkedin.com/in/mehna-kv",
    },
    {
      icon: <FaGithub />,
      title: "Github",
      value: "github.com/MehnaKv",
      link: "https://github.com/MehnaKv",
    },
  ];

  return (
    <Container fluid className="contact-section" id="contact">
      <Particle />

      <Container>
        <div className="contact-heading">
          <div className="available">
            <span></span>
            Available for opportunities
          </div>

          <h1>
            Let's Build Something <span className="purple">Amazing</span>
          </h1>

          <p>
            Have a project, job opportunity, or collaboration in mind? I would
            love to connect and discuss how I can help.
          </p>
        </div>

        <Row className="contact-wrapper align-items-stretch">
          {/* LEFT */}

          <Col lg={12}>
            <div className="modern-contact-card">
              <h2>Contact Information</h2>

              <p className="card-desc">
                Feel free to reach out through any platform. I usually respond
                within 24 hours.
              </p>

              {contacts.map((item, index) => (
                <div className="modern-contact-item" key={index}>
                  <div className="icon-box">{item.icon}</div>

                  <div>
                    <h5>{item.title}</h5>

                    {item.link ? (
                      <a href={item.link} target="_blank" rel="noreferrer">
                        {item.value}
                      </a>
                    ) : (
                      <span>{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Col>

          {/* RIGHT */}

          {/* <Col lg={5}>
            <div className="modern-resume-card">
              <div className="resume-circle">
                <FaFileDownload />
              </div>

              <h2>Download My Cv</h2>

              <p>
                Explore my professional experience, technical skills, projects
                and achievements.
              </p>

              <a
                href={pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="download-btn"
              >
                Download Cv
                <FaArrowRight />
              </a>
            </div>
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default ResumeNew;
