import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Projects from './components/Projects';
import Contact from './components/Contact';

gsap.registerPlugin(ScrollTrigger);

const AppContainer = styled.div`
  background: linear-gradient(135deg, #f5f7fa 0%, #e4e8eb 100%);
  min-height: 100vh;
  color: #2d3436;
  font-family: 'Poppins', sans-serif;
`;

const Header = styled(motion.header)`
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 100;
  background: rgba(245, 247, 250, 0.9);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const Nav = styled.nav`
  display: flex;
  gap: 2rem;
`;

const NavLink = styled(motion.a)`
  color: #2d3436;
  text-decoration: none;
  font-size: 1.1rem;
  cursor: pointer;
  
  &:hover {
    color: #0984e3;
  }
`;

const HeroSection = styled(motion.section)`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 2rem;
  background: linear-gradient(135deg, #74b9ff 0%, #0984e3 100%);
  color: white;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: url('/hero-bg.svg') center/cover no-repeat;
    opacity: 0.25;
    z-index: 0;
  }

  > * {
    position: relative;
    z-index: 1;
  }
`;

const Name = styled(motion.h1)`
  font-size: 4rem;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #ffffff, #dfe6e9);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Title = styled(motion.h2)`
  font-size: 2rem;
  color: #ffffff;
  margin-bottom: 2rem;
`;

const AboutSection = styled(motion.section)`
  padding: 6rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const AboutText = styled.div`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #2d3436;
`;

const AboutImage = styled(motion.img)`
  width: 100%;
  max-width: 400px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

const SkillsList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 2rem;
`;

const SkillItem = styled.div`
  background: #ffffff;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
`;

function App() {
  return (
    <AppContainer>
      <Header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <NavLink href="#home">MP</NavLink>
        </motion.div>
        <Nav>
          <NavLink
            href="#about"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            About
          </NavLink>
          <NavLink
            href="#projects"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Projects
          </NavLink>
          <NavLink
            href="#contact"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact
          </NavLink>
        </Nav>
      </Header>

      <HeroSection id="home">
        <Name
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Meet Patel
        </Name>
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Full Stack Developer & Designer
        </Title>
      </HeroSection>

      <AboutSection id="about">
        <AboutContent>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>About Me</h2>
            <AboutText>
  <p>
    I'm a passionate Full Stack Developer for creating modern web applications.
    My journey in web development started with a curiosity about how things work on the internet, which led me to dive deep into both front-end and back-end technologies.
  </p>
  
  <p>
    I specialize in building responsive, user-friendly applications using React.js, Node.js, and modern web technologies.
    My approach combines technical expertise with creative problem-solving to deliver solutions that not only meet but exceed client expectations.
  </p>
  
  <p>
    When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through technical writing and mentoring.
  </p>
</AboutText>
            <SkillsList>
              <SkillItem>React.js & Next.js</SkillItem>
              <SkillItem>Node.js & Express</SkillItem>
              <SkillItem>MongoDB</SkillItem>
              <SkillItem>JavaScript</SkillItem>
              <SkillItem>UI/UX Design</SkillItem>
            </SkillsList>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            
          </motion.div>
        </AboutContent>
      </AboutSection>

      <Projects />
      <Contact />
    </AppContainer>
  );
}

export default App;
