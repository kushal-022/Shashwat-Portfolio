import * as React from "react";
import "./ProjectItem.scss";
import { motion } from "framer-motion";
import GitIcon from "../../Assets/Git";
import EyeIcon from "../../Assets/Eye";

export default function ProjectItem({ item }) {
  const { name, description, gitLink, urlLink, img, skills } = item;
  return (
    <div className="project-item">
      <div className="project-image">
        <img alt="project-view" src={img} />
        <div className="mask">
          <a href={urlLink}>
            <motion.div
              whileInView={{ scale: [0, 1] }}
              whileHover={{ scale: [1, 0.9] }}
              transition={{
                duration: 0.25,
              }}
              className="eye"
            >
              <EyeIcon fill="#FFFFFF" />
            </motion.div>
          </a>
          <a href={gitLink}>
            <motion.div
              whileInView={{ scale: [0, 1] }}
              whileHover={{ scale: [1, 0.9] }}
              transition={{
                duration: 0.25,
              }}
              className="git"
            >
              <GitIcon fill="#FFFFFF" />
            </motion.div>
          </a>
        </div>
      </div>
      <div className="project-content">
        <h4 className="name">{name}</h4>
        <p className="description">
          {description}
          <div className="links">
            
            <a href={gitLink}>
              <motion.div
                whileInView={{ scale: [0, 1] }}
                whileHover={{ scale: [1, 0.9] }}
                transition={{
                  duration: 0.25,
                }}
                className="git"
              >
                <GitIcon fill="#FFFFFF" />
              </motion.div>
            </a>
          </div>
        </p>

        <div className="skills">
          {skills.map((skill, index) => {
            return (
              <span className="skill-name" key={index}>
                #{skill}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
