import React from "react";
import "styles/ProjectPanel.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";

const ProjectPanel = (props) => {
  let linkButtons = [];

  if (props.linkGithub !== "") {
    linkButtons.push(
      <div className="linkButton" key={props.title + "linkGithub"}>
        <a href={props.linkGithub} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    );
  }

  if (props.linkLive !== "") {
    linkButtons.push(
      <div className="linkButton" key={props.title + "linkLive"}>
        <a href={props.linkLive} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faPlayCircle} />
        </a>
      </div>
    );
  }

  return (
    <div
      className="ProjectPanel"
      style={{ backgroundImage: `url(${props.image})` }}
    >
      <div className="coverPanel">
        <div className="header">
          <div className="title">{props.title}</div>
          <div className="text">{props.text}</div>
        </div>
        <div className="buttons">{linkButtons.map((item) => item)}</div>
      </div>
    </div>
  );
};

export default ProjectPanel;
