import React from "react";
import "../styles/FifthPanel.scss";
import SectionTitle from "../components/SectionTitle";
import EmailPanel from "../components/EmailPanel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const FifthPanel = (props) => {
  return (
    <div className="FifthPanel" ref={props.customRef}>
      <SectionTitle text="CONTACT" areTilesVisible={true} />
      <EmailPanel />
      <div className="contactOptions">
        <div className="contactIcon">
          <a
            href="https://www.linkedin.com/in/micha%C5%82-zendran/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
        <div className="contactIcon">
          <a
            href="https://github.com/zendranm"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
        <div className="contactIcon">
          <a href="mailto:zendran.@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FifthPanel;
