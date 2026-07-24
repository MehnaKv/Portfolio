// import React from "react";
// import { Col, Row } from "react-bootstrap";

// import Html from "../../Assets/TechIcons/html-5.png";
// import Css from "../../Assets/TechIcons/css-3.png";
// import Javascript from "../../Assets/TechIcons/Javascript.svg";
// import Node from "../../Assets/TechIcons/Node.svg";
// import ReactIcon from "../../Assets/TechIcons/React.svg";

// import Typescript from "../../Assets/TechIcons/Typescript.svg";
// import Git from "../../Assets/TechIcons/Git.svg";
// import Firebase from "../../Assets/TechIcons/Firebase.svg";
// import Mongo from "../../Assets/TechIcons/Mongo.svg";

// import Tailwind from "../../Assets/TechIcons/Tailwind.svg";
// import Bootstrap from "../../Assets/TechIcons/Bootstrap.png";
// import MUI from "../../Assets/TechIcons/MUI.svg";
// import Figma from "../../Assets/TechIcons/figma.png";
// import AdobeXd from "../../Assets/TechIcons/xd.png";
// import Claude from "../../Assets/TechIcons/claude.jpeg";
// import Netlify from "../../Assets/TechIcons/netlify-icon.svg";
// import Vercel from "../../Assets/TechIcons/vercel-icon.svg";
// import Expressjs from "../../Assets/TechIcons/expressjs-icon.svg";

// function Techstack() {
//   return (
//     <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
//       <Col xs={4} md={2} className="tech-icons">
//         <img src={Javascript} alt="javascript" />
//         <div className="tech-icons-text">Javascript</div>
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <img src={Html} alt="html" />
//         <div className="tech-icons-text">Html</div>
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <img src={Css} alt="Css" />
//         <div className="tech-icons-text">Css</div>
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <img src={Typescript} alt="typescript" />
//         <div className="tech-icons-text">Typescript</div>
//       </Col>

//       <Col xs={4} md={2} className="tech-icons">
//         <img src={Node} alt="node" />
//         <div className="tech-icons-text">Node.Js</div>
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <img src={ReactIcon} alt="react" />
//         <div className="tech-icons-text">React.Js</div>
//       </Col>

//       <Col xs={4} md={2} className="tech-icons">
//         <img src={Mongo} alt="mongoDb" />
//         <div className="tech-icons-text">Mongo DB</div>
//       </Col>
//          <Col xs={4} md={2} className="tech-icons">
//         <img src={Expressjs} alt="expressjs" />
//         <div className="tech-icons-text">Express.js</div>
//       </Col>

//       <Col xs={4} md={2} className="tech-icons">
//         <img src={Git} alt="git" />
//         <div className="tech-icons-text">Git</div>
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <img src={Firebase} alt="firebase" />
//         <div className="tech-icons-text">Firebase</div>
//       </Col>

//       <Col xs={4} md={2} className="tech-icons">
//         <img src={Bootstrap} alt="bootstrap" />
//         <div className="tech-icons-text">Bootstrap</div>
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <img src={Tailwind} alt="tailwind" />
//         <div className="tech-icons-text">Tailwind CSS</div>
//       </Col>

//       <Col xs={4} md={2} className="tech-icons">
//         <img src={MUI} alt="mui" />
//         <div className="tech-icons-text">Material UI</div>
//       </Col>
//        <Col xs={4} md={2} className="tech-icons">
//         <img src={Figma} alt="figma" />
//         <div className="tech-icons-text">Figma</div>
//       </Col>
//        <Col xs={4} md={2} className="tech-icons">
//         <img src={AdobeXd} alt="Adobe Xd" />
//         <div className="tech-icons-text">Adobe Xd</div>
//       </Col>
//        <Col xs={4} md={2} className="tech-icons">
//         <img src={Netlify} alt="netlify" />
//         <div className="tech-icons-text">Netlify</div>
//       </Col>
//        <Col xs={4} md={2} className="tech-icons">
//         <img src={Vercel} alt="vercel" />
//         <div className="tech-icons-text">Vercel</div>
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <img src={Claude} alt="mui" />
//         <div className="tech-icons-text">Claude Ai</div>
//       </Col>

    
//     </Row>
//   );
// }

// export default Techstack;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Html from "../../Assets/TechIcons/html-5.png";
import Css from "../../Assets/TechIcons/css-3.png";
import Javascript from "../../Assets/TechIcons/Javascript.svg";
import Typescript from "../../Assets/TechIcons/Typescript.svg";
import ReactIcon from "../../Assets/TechIcons/React.svg";
import Tailwind from "../../Assets/TechIcons/Tailwind.svg";
import Bootstrap from "../../Assets/TechIcons/Bootstrap.png";
import MUI from "../../Assets/TechIcons/MUI.svg";

import Node from "../../Assets/TechIcons/Node.svg";
import Expressjs from "../../Assets/TechIcons/expressjs-icon.svg";
import Mongo from "../../Assets/TechIcons/Mongo.svg";
import Firebase from "../../Assets/TechIcons/Firebase.svg";

import Git from "../../Assets/TechIcons/Git.svg";
import Netlify from "../../Assets/TechIcons/netlify-icon.svg";
import Vercel from "../../Assets/TechIcons/vercel-icon.svg";

import Figma from "../../Assets/TechIcons/figma.png";
import AdobeXd from "../../Assets/TechIcons/xd.png";
import Claude from "../../Assets/TechIcons/claude.jpeg";

const frontend = [
  { img: Html, name: "HTML5" },
  { img: Css, name: "CSS3" },
  { img: Javascript, name: "JavaScript" },
  { img: Typescript, name: "TypeScript" },
  { img: ReactIcon, name: "React.js" },
  { img: Tailwind, name: "Tailwind CSS" },
  { img: Bootstrap, name: "Bootstrap" },
  { img: MUI, name: "Material UI" },
];

const backend = [
  { img: Node, name: "Node.js" },
  { img: Expressjs, name: "Express.js" },
  { img: Mongo, name: "MongoDB" },
  { img: Firebase, name: "Firebase" },
];

const deployment = [
  { img: Git, name: "Git" },
  { img: Vercel, name: "Vercel" },
  { img: Netlify, name: "Netlify" },
];

const design = [
  { img: Figma, name: "Figma" },
  { img: AdobeXd, name: "Adobe XD" },
  { img: Claude, name: "Claude AI" },
];

const SkillCard = ({ title, skills }) => (
  <div className="skill-category">
    <h4>{title}</h4>

    <Row>
      {skills.map((skill, index) => (
        <Col lg={3} md={4} sm={6} xs={6} key={index}>
          <div className="skill-box">
            <img src={skill.img} alt={skill.name} />
            <span>{skill.name}</span>
          </div>
        </Col>
      ))}
    </Row>
  </div>
);

function Techstack() {
  return (
    <Container>

      <SkillCard title="Frontend" skills={frontend} />

      <SkillCard title="Backend & Database" skills={backend} />

      <Row>

        <Col lg={6}>
          <SkillCard
            title="Version Control & Deployment"
            skills={deployment}
          />
        </Col>

        <Col lg={6}>
          <SkillCard
            title="UI / UX & AI Tools"
            skills={design}
          />
        </Col>

      </Row>

    </Container>
  );
}

export default Techstack;
