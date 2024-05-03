import * as React from "react";
import "./Experience.scss";
import { experiencesData } from "../../Data";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function Experience() {
  return (
    <div id="experience" className="experience-container">
      <h1 className="experience-heading">Experience</h1>
      <VerticalTimeline>
        {experiencesData.map((exp, index) => {
          return (
            <VerticalTimelineElement
              key={`exp-${exp.company}`}
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "#141414",
                color: "#fff",
              }}
              contentArrowStyle={{
                borderRight: "7px solid #6baa75",
              }}
              iconStyle={{ background: "#aa9aba", color: "#fff" }}
            >
              <div className="experience-info">
                <h3 className="position-title">{exp.position}</h3>
                <h4 className="company-title">{exp.company}</h4>
                <p className="description">{exp.description}</p>
                <span className="experience-date">{exp.year}</span>
              </div>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
}
