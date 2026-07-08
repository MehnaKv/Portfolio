import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import adante from "../../Assets/Projects/adante.png";
import daral from "../../Assets/Projects/daralsha.png";
import uow from "../../Assets/Projects/uow.png";
import letsdrive from "../../Assets/Projects/letdrive.png";
import josco from "../../Assets/Projects/josco.png";
import yatheem from "../../Assets/Projects/yatheem.png";
import dibba from "../../Assets/Projects/dibba.png";
import amity from "../../Assets/Projects/amity.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={letsdrive}
              isBlog={false}
              title="Lets Drive"
              description="Developed a responsive car rental website using HTML5, CSS3, Sass, JavaScript, TypeScript, and Angular. Built reusable components, implemented a modern and user-friendly UI, and ensured cross-browser compatibility, responsive design, and optimized performance across all devices.
"
              demoLink="https://www.letsdrive.ae/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dibba}
              isBlog={false}
              title="Dibba Mountain Park & Resorts"
              description="Developed and customized a responsive website for a mountain resort in Dibba, UAE, using WordPress, HTML5, CSS3, JavaScript, and PHP. Delivered a modern, user-friendly interface with responsive design, optimized performance, and cross-browser compatibility.
"
              
              demoLink="https://dibbamountainpark.com/"
            />
          </Col>
 <Col md={4} className="project-card">
            <ProjectCard
              imgPath={yatheem}
              isBlog={false}
              title="Yateem Opticians"
              description="Yateem Opticians is a modern UAE e-commerce website for eyewear, sunglasses, contact lenses, and vision care products. Built using Next.js, React.js, HTML5, CSS3, JavaScript, and Magento 2, it delivers a fast, responsive, and user-friendly online shopping experience."
              // ghLink="https://github.com/mehna/yatheem"
              demoLink="https://yateem.com/ae-en"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={josco}
              isBlog={false}
              title="Josco Jewellers"
              description="Fine jewelry brand website. Crafted precise HTML and CSS to create an elegant and responsive UI for a Laravel-powered backend."
          
              demoLink="https://www.joscojewellers.in/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={uow}
              isBlog={false}
              title="UNIVERSITY OF WOLLONGONG"
              description="The University of Wollongong in Dubai (UOWD) website is a modern educational platform that provides information on academic programs, admissions, student services, research, and campus life.
Technologies:Next.js, React.js, TypeScript, HTML5, CSS3, JavaScript, Node.js, REST APIs.
"
   
              demoLink="https://www.uowdubai.ac.ae/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={adante}
              isBlog={false}
              title="Adante"
              description="Adante Realty is a modern real estate website that showcases premium residential and commercial properties with a fast, responsive, and user-friendly experience.

Technologies:
Next.js, React.js, TypeScript, HTML5, CSS3, JavaScript, Node.js, REST APIs."
     
              demoLink="https://www.adanterealty.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={daral}
              isBlog={false}
              title="Dar As-sihha"
              description="A modern hospital website. Implemented clean and professional user interfaces using Next.js and Tailwind CSS for a Strapi-powered platform."
            
              demoLink="https://www.darassihha.net/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={amity}
              isBlog={false}
              title="Amity Veterinary"
              description="A modern hospital website. Implemented clean and professional user interfaces using Next.js and Tailwind CSS for a Strapi-powered platform."
         
              demoLink="https://amityvet.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
