import React from "react";
import "styles/ProjectPanel.scss";

const ProjectPanel = (props) => {
  return (
    <div
      className="ProjectPanel"
      style={{ backgroundImage: `url(${props.image})` }}
    >
      <div className="coverPanel">AAA</div>
    </div>
  );
};

export default ProjectPanel;
