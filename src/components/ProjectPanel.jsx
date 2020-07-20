import React, { useState, useEffect } from "react";
import "styles/ProjectPanel.scss";
import "styles/ProjectPanelMobile.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";

const ProjectPanel = (props) => {
  const [innerWidth, updateInnerWidth] = useState(window.innerWidth);
  let linkButtons = [];

  useEffect(() => {
    const resizeListener = () => {
      updateInnerWidth(window.innerWidth);
    };
    window.addEventListener("resize", resizeListener);

    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, []);

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
    <div>
      {innerWidth > 450 ? (
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
      ) : (
        <div className="ProjectPanelMobile">
          <div
            className="imagePart"
            style={{ backgroundImage: `url(${props.image})` }}
          />
          <div className="contentPart">
            <div className="header">
              <div className="title">{props.title}</div>
              <div className="text">{props.text}</div>
            </div>
            <div className="buttons">{linkButtons.map((item) => item)}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectPanel;
