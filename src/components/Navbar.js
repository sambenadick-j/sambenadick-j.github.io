import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Nav = styled.nav`
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 100;
  background-color: ${props => props.theme.colors.primary}E6;
  backdrop-filter: blur(10px);
  padding: 1rem 0;
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const Logo = styled(motion.div)`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${props => props.theme.colors.accent};
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: ${props => props.theme.colors.textLight};
  cursor: pointer;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -4px;
    left: 0;
    background-color: ${props => props.theme.colors.accent};
    transition: width 0.3s ease;
  }

  &:hover:after {
    width: 100%;
  }
`;

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Nav style={{ boxShadow: isScrolled ? '0 10px 30px -10px rgba(0,0,0,0.3)' : 'none' }}>
      <NavContainer>
        <Logo
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          SB
        </Logo>
        <NavLinks>
          <NavLink to="about" smooth={true} duration={500}>About</NavLink>
          <NavLink to="projects" smooth={true} duration={500}>Projects</NavLink>
          <NavLink to="contact" smooth={true} duration={500}>Contact</NavLink>
        </NavLinks>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;
