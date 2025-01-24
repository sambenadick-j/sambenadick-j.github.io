import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';

const ContactSection = styled.section`
  padding: 100px 0;
`;

const ContactContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;
`;

const Title = styled(motion.h2)`
  color: ${props => props.theme.colors.textLight};
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const Subtitle = styled(motion.p)`
  color: ${props => props.theme.colors.text};
  font-size: 1.2rem;
  margin-bottom: 3rem;
`;

const ContactForm = styled(motion.form)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Input = styled.input`
  padding: 1rem;
  border-radius: 4px;
  border: 1px solid ${props => props.theme.colors.text};
  background: transparent;
  color: ${props => props.theme.colors.textLight};
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.accent};
  }
`;

const TextArea = styled.textarea`
  padding: 1rem;
  border-radius: 4px;
  border: 1px solid ${props => props.theme.colors.text};
  background: transparent;
  color: ${props => props.theme.colors.textLight};
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.accent};
  }
`;

const SubmitButton = styled(motion.button)`
  padding: 1rem 2rem;
  background-color: transparent;
  border: 1px solid ${props => props.theme.colors.accent};
  color: ${props => props.theme.colors.accent};
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${props => props.theme.colors.accent}20;
  }
`;

const ContactInfo = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: ${props => props.theme.colors.text};
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your EmailJS service ID, template ID, and user ID
    emailjs.sendForm(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      e.target,
      'YOUR_USER_ID'
    ).then(
      (result) => {
        console.log('Email sent successfully:', result.text);
        setFormData({ name: '', email: '', message: '' });
      },
      (error) => {
        console.log('Failed to send email:', error.text);
      }
    );
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <ContactSection id="contact">
      <ContactContainer>
        <Title
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Get In Touch
        </Title>
        <Subtitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          I'm always open to discussing new projects and opportunities.
        </Subtitle>
        <ContactForm
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <Input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <TextArea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <SubmitButton
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </SubmitButton>
        </ContactForm>
        <ContactInfo>
          <p>Email: sambenadick.j2023ai-ds@sece.ac.in</p>
          <p>Phone: +91 6381516048</p>
          <a href="https://www.linkedin.com/in/sam-benadick-joseph-207545293/" target="_blank" rel="noopener noreferrer">
            LinkedIn Profile
          </a>
        </ContactInfo>
      </ContactContainer>
    </ContactSection>
  );
};

export default Contact;
