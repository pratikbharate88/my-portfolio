import React from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { FaGithub} from 'react-icons/fa';


const Projects = () => {
  const projects = [
    {
  title: "Java Application Deployment with Maven & CI/CD Pipeline",
  description: "Automated the build and deployment process of a Java web application using Maven, Jenkins, and GitHub integration.",
  image: "project1.jpg",
  tags: ["Java", "Maven", "Jenkins", "Docker", "GitHub Webhooks"],
  github: "https://github.com/pratikbharate88/Deploying-Java-Application-by-using-Maven-and-CICD-Pipeline",
  outcomes: "Implemented a fully automated CI/CD pipeline reducing manual deployment effort by 60%; integrated build, test, and deploy stages using Jenkins, ensuring consistent delivery and improved reliability."
},
{
  title: "Three-Tier Web Application Deployment using AWS EC2",
  description: "Deployed a scalable three-tier architecture consisting of frontend, backend, and database layers on AWS EC2 instances with secure networking.",
  image: "project2.jpg",
  tags: ["AWS", "EC2", "Nginx", "MySQL", "Linux", "Cloud Infrastructure"],
  github: "https://github.com/pratikbharate88/AWS-three-tier-architecture",
  outcomes: "Configured and deployed 3-tier architecture improving accessibility and fault tolerance; implemented security groups and load balancing achieving 99.9% uptime and efficient resource utilization."
},
{
  title: "Node.js Application Deployment Using Jenkins CI/CD Pipeline",
  description: "Built and deployed a Node.js application through a Jenkins-driven CI/CD pipeline integrated with GitHub.",
  image: "project3.jpg",
  tags: ["Node.js", "Jenkins", "Docker", "AWS EC2", "GitHub Actions"],
  github: "https://github.com/pratikbharate88/node-js-app-CICD", 
  outcomes: "Reduced deployment time by 50% with automated build and containerization; achieved seamless updates and zero downtime deployment using Docker containers and Jenkins pipeline automation."
},
{
  title: "WordPress Deployment on AWS EC2 Using LEMP Stack",
  description: "Deployed and configured a WordPress website on an AWS EC2 instance using the LEMP (Linux, Nginx, MySQL, PHP) stack for optimized performance and scalability.",
  image: "project4.jpg",
  tags: ["WordPress", "AWS EC2", "Nginx", "MySQL", "PHP", "Linux"],
  github: "https://github.com/pratikbharate88/Wordpress-Website", 
  outcomes: "Configured a fully functional WordPress site with 99.9% uptime; optimized server performance using Nginx caching and secured the instance with SSH key authentication and firewall rules."
}


  ];

  return (
    <Container className="section">
      <Row>
        <Col lg={8} className="mx-auto text-center">
          <h2 className="section-title">DevOps Projects</h2>
          <p className="lead mb-5">
            A showcase of my key projects demonstrating DevOps practices, infrastructure automation, and cloud architecture.
          </p>
        </Col>
      </Row>
      
      <Row>
        {projects.map((project, index) => (
          <Col key={index} lg={6} className="mb-4">
            <Card className="h-100 project-card border-0 shadow-sm">
              <Card.Body className="p-4">
                <h3>{project.title}</h3>
                <div className="mb-3">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} bg="primary" className="me-2 mb-2">{tag}</Badge>
                  ))}
                </div>
                <Card.Text>{project.description}</Card.Text>
                <h5 className="mt-3">Outcomes:</h5>
                <Card.Text>{project.outcomes}</Card.Text>
              </Card.Body>
              <Card.Footer className="bg-white border-0 p-4">
                <div className="d-flex justify-content-center">
                  <Button variant="outline-dark" href={project.github} target="_blank" rel="noopener noreferrer">
                    <FaGithub className="me-2" /> GitHub
                  </Button>
                </div>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Projects;