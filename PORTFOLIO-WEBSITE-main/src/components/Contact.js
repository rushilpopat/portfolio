import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const ContactSection = styled(motion.section)`
  padding: 6rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  background: #ffffff;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
`;

const ContactContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled.div`
  color: #636e72;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  color: #2d3436;
  font-size: 0.875rem;
`;

const Input = styled.input`
  background: #f5f7fa;
  border: 1px solid #e4e8eb;
  border-radius: 8px;
  padding: 0.75rem;
  color: #2d3436;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #0984e3;
    box-shadow: 0 0 0 2px rgba(9, 132, 227, 0.1);
  }
`;

const TextArea = styled.textarea`
  background: #f5f7fa;
  border: 1px solid #e4e8eb;
  border-radius: 8px;
  padding: 0.75rem;
  color: #2d3436;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #0984e3;
    box-shadow: 0 0 0 2px rgba(9, 132, 227, 0.1);
  }
`;

const SubmitButton = styled(motion.button)`
  background: #0984e3;
  color: #ffffff;
  padding: 0.75rem 2rem;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  border: none;
  transition: all 0.3s ease;

  &:hover {
    background: #74b9ff;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 2rem;
`;

const SocialLink = styled(motion.a)`
  color: #636e72;
  font-size: 1.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: #0984e3;
  }
`;

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log(formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <ContactSection id="contact">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Get In Touch
      </motion.h2>
      <ContactContainer>
        <ContactInfo>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            I'm currently looking for new opportunities. Whether you have a question
            or just want to say hi, I'll try my best to get back to you!
          </motion.p>
          <SocialLinks>
            <SocialLink
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub size={24} />
            </SocialLink>
            <SocialLink
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaLinkedin size={24} />
            </SocialLink>
            <SocialLink
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaTwitter size={24} />
            </SocialLink>
          </SocialLinks>
        </ContactInfo>
        <ContactForm onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="message">Message</Label>
            <TextArea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <SubmitButton
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </SubmitButton>
        </ContactForm>
      </ContactContainer>
    </ContactSection>
  );
}

export default Contact; 