import React from "react";
import "styles/ProjectPanel.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";

const ProjectPanel = (props) => {
  return (
    <div
      className="ProjectPanel"
      style={{ backgroundImage: `url(${props.image})` }}
    >
      <div className="coverPanel">
        <div className="title">{props.text}</div>
        <div className="buttons">
          <FontAwesomeIcon icon={faGithub} />
          <FontAwesomeIcon icon={faPlayCircle} />
        </div>
      </div>
    </div>
  );
};

export default ProjectPanel;
