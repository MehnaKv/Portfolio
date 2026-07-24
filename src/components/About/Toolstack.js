import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import macOs from "../../Assets/TechIcons/Apple MacOSX.svg";
import chrome from "../../Assets/TechIcons/Google Chrome.svg";
import vsCode from "../../Assets/TechIcons/vscode.svg";

// Optional
// import Windows from "../../Assets/TechIcons/windows.svg";
// import Postman from "../../Assets/TechIcons/postman.svg";
// import Github from "../../Assets/TechIcons/github.svg";

const tools = [
  {
    img: vsCode,
    name: "VS Code",
  },
  {
    img: chrome,
    name: "Google Chrome",
  },
  {
    img: macOs,
    name: "MacOS",
  },

  // Uncomment if available

  // {
  //   img: Github,
  //   name: "GitHub",
  // },

  // {
  //   img: Postman,
  //   name: "Postman",
  // },

  // {
  //   img: Windows,
  //   name: "Windows",
  // },
];

function Toolstack() {
  return (
    <Container>

      <div className="skill-category">

        <h4>Tools & Utilities</h4>

        <Row>

          {tools.map((tool, index) => (
            <Col lg={4} md={6} sm={6} xs={12} key={index}>

              <div className="skill-box">

                <img
                  src={tool.img}
                  alt={tool.name}
                  className="tech-icon-images"
                />

                <span>{tool.name}</span>

              </div>

            </Col>
          ))}

        </Row>

      </div>

    </Container>
  );
}

export default Toolstack;