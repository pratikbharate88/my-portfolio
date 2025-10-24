import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const About = () => {
  return (
    <Container className="section">
      <Row>
        <Col lg={8} className="mx-auto text-center">
          <h2 className="section-title">About Me</h2>
        </Col>
      </Row>
      <Row>
        <Col lg={8} className="mx-auto">
          <Card className="border-0 shadow-sm">
      <Card.Body className="p-5" style={{ textAlign: 'justify' }}>
  <p className="lead">
    Hello, I’m <b>Pratik Bharate</b> from Pune, Maharashtra — a passionate and hands-on <b>DevOps Engineer</b> with a strong foundation in cloud technologies, automation, and continuous integration/deployment practices.
  </p>

  <h4 className="mt-4">Education & Training</h4>
  <p>
    I completed my <b>Bachelor of Computer Applications (BCA)</b> from <b>North Maharashtra University</b>, where I built a strong grounding in software development and system fundamentals. 
    To further specialize, I completed a comprehensive <b>DevOps course</b> from <b>Fortune Cloud</b>, where I gained practical experience working with industry-standard tools such as <b>Docker, Kubernetes, Jenkins, AWS, and Terraform</b>.
  </p>

  <h4 className="mt-4">Projects & Practical Experience</h4>
  <p>
    I’ve worked on several hands-on projects, including deploying <b>Python</b> and <b>Node.js</b> applications through fully automated <b>CI/CD pipelines</b>. These experiences have strengthened my understanding of automation, cloud deployment, and infrastructure management.
  </p>

  <h4 className="mt-4">Motivation & Mindset</h4>
  <p>
    What drives me toward DevOps is the blend of innovation and efficiency — the ability to automate complex workflows, streamline collaboration, and bridge the gap between development and operations. 
    I believe in continuous learning and improvement, and I take a <b>self-driven, hands-on approach</b> to mastering new tools and technologies.
  </p>


  <h4 className="mt-4">Career Goals</h4>
  <p>
    I am currently seeking <b>internship and job opportunities</b> where I can apply my technical skills, learn from experienced professionals, and grow as a DevOps Engineer. 
    My goal is to contribute to building scalable, reliable, and automated cloud infrastructure solutions.
  </p>

  <h4 className="mt-4">Let’s Connect</h4>
  <p>
    Feel free to connect with me on 
    <a href="https://www.linkedin.com/in/pratik-bharate" target="_blank" rel="noopener noreferrer"><u> LinkedIn</u></a> or explore my projects on 
    <a href="https://github.com/pratikbharate88" target="_blank" rel="noopener noreferrer"><u> GitHub</u></a>. 
    I’m always open to collaboration, learning, and new opportunities in the DevOps and cloud engineering space.
  </p>
</Card.Body>




          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;