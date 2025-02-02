import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import profilePic from '../assets/images/profile.jpg';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding-top: 100px;
`;

const HeroContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  gap: 4rem;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    flex-direction: column-reverse;
    text-align: center;
    gap: 2rem;
  }
`;

const HeroContent = styled.div`
  flex: 1;
`;

const ProfileImage = styled(motion.img)`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid ${props => props.theme.colors.accent};
  box-shadow: 0 10px 30px -15px rgba(0, 0, 0, 0.5);

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    width: 250px;
    height: 250px;
  }
`;

const Greeting = styled(motion.h1)`
  color: ${props => props.theme.colors.accent};
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

const Name = styled(motion.h2)`
  color: ${props => props.theme.colors.textLight};
  font-size: 4rem;
  margin-bottom: 1rem;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 3rem;
  }
`;

const Title = styled(motion.h3)`
  color: ${props => props.theme.colors.text};
  font-size: 3rem;
  margin-bottom: 2rem;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 2rem;
  }
`;

const Description = styled(motion.p)`
  color: ${props => props.theme.colors.text};
  max-width: 600px;
  margin-bottom: 2rem;
  font-size: 1.1rem;
`;

const Button = styled(motion.a)`
  display: inline-block;
  background-color: transparent;
  color: ${props => props.theme.colors.accent};
  border: 1px solid ${props => props.theme.colors.accent};
  border-radius: 4px;
  padding: 1rem 2rem;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${props => props.theme.colors.accent}20;
  }
`;

const Hero = () => {
  return (
    <HeroSection id="home">
      <HeroContainer>
        <HeroContent>
          <Greeting
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Hi, my name is
          </Greeting>
          <Name
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Sam Benadick J
          </Name>
          <Title
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Data Scientist
          </Title>
          <Description
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Empowering decisions through data-driven insights. I specialize in transforming complex data into actionable intelligence, helping organizations make informed decisions and drive innovation.
          </Description>
          <Button
            href="#contact"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in touch
          </Button>
        </HeroContent>
        <ProfileImage
          src={profilePic}
          alt="Sam Benadick J"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        />
      </HeroContainer>
    </HeroSection>
  );
};

export default Hero;
