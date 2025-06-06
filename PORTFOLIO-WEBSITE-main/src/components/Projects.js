import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ProjectsSection = styled(motion.section)`
  padding: 6rem 2rem;
  max-width: 1200px;
  margin: 3rem auto 3rem auto;
  background: #ffffff;
  border-radius: 24px;
  box-shadow: 0 12px 36px rgba(0, 0, 0, 0.07);
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2.5rem;
  margin-top: 3.5rem;
`;

const ProjectCard = styled(motion.div)`
  background: #ffffff;
  border-radius: 18px;
  padding: 2rem;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.07);
  border: 1px solid #e4e8eb;
  transition: transform 0.3s ease;
  margin-bottom: 1.5rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: ${({ bg }) => `url(${bg}) center/cover no-repeat`};
    opacity: 0.15;
    z-index: 0;
  }

  > * {
    position: relative;
    z-index: 1;
  }

  &:hover {
    transform: translateY(-10px);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 1rem;
`;

const ProjectTitle = styled.h3`
  color: #2d3436;
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
`;

const ProjectDescription = styled.p`
  color: #636e72;
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const ProjectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const Tag = styled.span`
  background: #e4e8eb;
  color: #2d3436;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.875rem;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const ProjectLink = styled.a`
  color: #0984e3;
  text-decoration: none;
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    color: #74b9ff;
  }
`;

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A modern e-commerce platform with real-time inventory management, secure payment processing, and an intuitive admin dashboard. Features include product search, filtering, cart management, and order tracking.",
    tags: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
    image: "/ecommerce.jpg",
    github: "#",
    live: "#"
  },
  {
    title: "Online Learning Platform",
    description: "An interactive learning platform with video courses, quizzes, and progress tracking. Includes features like course creation, student progress monitoring, and certificate generation.",
    tags: ["React", "Node.js", "PostgreSQL", "AWS S3", "Socket.io"],
    image: "/learning.jpg",
    github: "#",
    live: "#"
  },
  {
    title: "Portfolio Website",
    description: "A modern portfolio website showcasing projects and skills with smooth animations and responsive design. Features include dark/light mode, project filtering, and contact form integration.",
    tags: ["React", "GSAP", "Styled Components", "Framer Motion"],
    image: "/portfolio.jpg",
    github: "#",
    live: "#"
  }
];

function Projects() {
  return (
    <ProjectsSection id="projects">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Featured Projects
      </motion.h2>
      <ProjectsGrid>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            bg={project.image}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <ProjectImage src={project.image} alt={project.title} />
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDescription>{project.description}</ProjectDescription>
            <ProjectTags>
              {project.tags.map((tag, tagIndex) => (
                <Tag key={tagIndex}>{tag}</Tag>
              ))}
            </ProjectTags>
            <ProjectLinks>
              <ProjectLink href={project.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </ProjectLink>
              <ProjectLink href={project.live} target="_blank" rel="noopener noreferrer">
                Live Demo
              </ProjectLink>
            </ProjectLinks>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsSection>
  );
}

export default Projects; 