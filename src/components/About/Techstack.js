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
        <Col xxl={4} xl={4} lg={4} md={6} sm={6} xs={12} key={index}>
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
