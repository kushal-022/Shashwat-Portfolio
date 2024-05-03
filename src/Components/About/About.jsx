import { motion } from "framer-motion";
import * as React from "react";
import myPic from "../../Assets/mypic.jpeg";
import resume from "../../Assets/resume.pdf";
import "./About.scss";
export default function About() {
  return (
    <div id="home" className="about-container">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="about"
      >
        <h1 className="intro-heading">Hi, I'm Shashwat Bhatnagar ! </h1>
        <p className="intro-description">
        Passionate and driven university student with a keen interest in artificial intelligence and machine learning. Elite certification recipient in advanced quantum mechanics from IIT Guwahati, showcasing dedication and aptitude. Additionally, certified as an AWS Solution Architect and Cloud Practitioner, demonstrating proficiency in cloud computing. Experienced in research, conference presentations, and seminar organization. Eager to contribute to cutting-edge research and technological advancements.
        </p>
        <a href={resume} className="resume">
          Download my Resume
        </a>
      </motion.div>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="image-container"
      >
        <img src={myPic} alt="userimage" />
      </motion.div>
    </div>
  );
}
