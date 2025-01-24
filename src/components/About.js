import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutSection = styled.section`
  padding: 100px 0;
`;

const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const Title = styled(motion.h2)`
  color: ${props => props.theme.colors.textLight};
  font-size: 2.5rem;
  margin-bottom: 2rem;
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

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const AboutText = styled(motion.div)`
  color: ${props => props.theme.colors.text};
  font-size: 1.1rem;
  line-height: 1.8;
`;

const SkillsContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`;

const Skill = styled.div`
  color: ${props => props.theme.colors.textLight};
  position: relative;
  padding-left: 20px;

  &:before {
    content: '▹';
    position: absolute;
    left: 0;
    color: ${props => props.theme.colors.accent};
  }
`;

const About = () => {
  const skills = [
    'Python', 'Machine Learning',
    'Data Analysis', 'Deep Learning',
    'SQL', 'TensorFlow',
    'PyTorch', 'Scikit-learn',
    'Data Visualization', 'Statistical Analysis'
  ];

  return (
    <AboutSection id="about">
      <AboutContainer>
        <Title
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </Title>
        <ContentGrid>
          <AboutText
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p>
              As a Data Scientist, I am passionate about transforming complex data into actionable insights. 
              With a strong foundation in statistical analysis and machine learning, I specialize in developing 
              data-driven solutions that help organizations make informed decisions.
            </p>
            <br />
            <p>
              My expertise includes predictive modeling, statistical analysis, and machine learning algorithm 
              development. I have experience working with various data types and sizes, from structured 
              databases to unstructured text data.
            </p>
          </AboutText>
          <SkillsContainer
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {skills.map((skill, index) => (
              <Skill key={index}>{skill}</Skill>
            ))}
          </SkillsContainer>
        </ContentGrid>
      </AboutContainer>
    </AboutSection>
  );
};

export default About;
