import * as React from "react";
import "./Projects.scss";
import ProjectItem from "./Components/ProjectItem/ProjectItem.jsx";
import { projectsData } from "../../Data";
export default function Projects() {
  return (
    <div id="projects" className="projects-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-items">
        {projectsData.map((item, index) => {
          return <ProjectItem item={item} key={index} />;
        })}
      </div>
    </div>
  );
}
