import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const FooterContainer = styled.footer`
  padding: 2rem 0;
  background-color: ${props => props.theme.colors.primary};
  border-top: 1px solid ${props => props.theme.colors.secondary};
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
`;

const Copyright = styled(motion.p)`
  color: ${props => props.theme.colors.text};
  font-size: 0.9rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const SocialLink = styled(motion.a)`
  color: ${props => props.theme.colors.text};
  font-size: 0.9rem;
  transition: color 0.3s ease;

  &:hover {
    color: ${props => props.theme.colors.accent};
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <Copyright
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          © 2025 Sam Benadick J. All rights reserved.
        </Copyright>
        <SocialLinks>
          <SocialLink
            href="https://www.linkedin.com/in/sam-benadick-joseph-207545293/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            LinkedIn
          </SocialLink>
          <SocialLink
            href="mailto:sambenadick.j2023ai-ds@sece.ac.in"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Email
          </SocialLink>
        </SocialLinks>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
