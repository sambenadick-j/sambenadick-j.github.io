import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ProjectsSection = styled.section`
  padding: 100px 0;
  background-color: ${props => props.theme.colors.secondary};
`;

const ProjectsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const Title = styled(motion.h2)`
  color: ${props => props.theme.colors.textLight};
  font-size: 2.5rem;
  margin-bottom: 3rem;
  position: relative;
  display: inline-block;

  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 40%;
    height: 3px;
    background-color: ${props => props.theme.colors.accent};
  }
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const ProjectCard = styled(motion.div)`
  background-color: ${props => props.theme.colors.primary};
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 10px 30px -15px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ProjectTitle = styled.h3`
  color: ${props => props.theme.colors.textLight};
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const ProjectDescription = styled.p`
  color: ${props => props.theme.colors.text};
  font-size: 1rem;
  margin-bottom: 1.5rem;
`;

const TechList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1rem;
`;

const TechItem = styled.li`
  color: ${props => props.theme.colors.accent};
  font-size: 0.9rem;
`;

const Projects = () => {
  const projects = [
    {
      title: 'Predictive Analytics Dashboard',
      description: 'A comprehensive dashboard for real-time data analysis and predictive modeling using machine learning algorithms.',
      tech: ['Python', 'TensorFlow', 'React', 'Flask']
    },
    {
      title: 'Natural Language Processing Tool',
      description: 'Advanced NLP tool for sentiment analysis and text classification using state-of-the-art models.',
      tech: ['PyTorch', 'BERT', 'FastAPI', 'Docker']
    },
    {
      title: 'Time Series Forecasting System',
      description: 'Automated forecasting system for multiple time series data streams with anomaly detection.',
      tech: ['Python', 'Prophet', 'Pandas', 'AWS']
    }
  ];

  return (
    <ProjectsSection id="projects">
      <ProjectsContainer>
        <Title
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Featured Projects
        </Title>
        <ProjectGrid>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <TechList>
                {project.tech.map((tech, techIndex) => (
                  <TechItem key={techIndex}>{tech}</TechItem>
                ))}
              </TechList>
            </ProjectCard>
          ))}
        </ProjectGrid>
      </ProjectsContainer>
    </ProjectsSection>
  );
};

export default Projects;
