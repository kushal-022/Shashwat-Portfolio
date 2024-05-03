import * as React from "react";
import "./ActivitiesItem.scss";


export default function AcivitiesItem({ item }) {
  const { name, description, date, event } = item;
  return (
    <div className="activities-item">
      <div className="activities-content">
        <h4 className="name">{name}</h4>
        <h4 className="event_title">{event}</h4>
        <p className="description">
          {description}
        </p>
        <span className="activities-date">{date}</span>
      </div>
    </div>
  );
}
