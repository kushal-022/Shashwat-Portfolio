import * as React from "react";
import "./Skills.scss";
import SkillItem from "./Components/SkillItem";
import { skillsData } from "../../Data";

export default function Skills() {
  return (
    <div id="skills" className="skills-container">
      <h1 className="skill-heading">Skills</h1>
      <div className="skill-items">
        {skillsData.map((item, index) => {
          return <SkillItem item={item} key={index} />;
        })}
      </div>
    </div>
  );
}
