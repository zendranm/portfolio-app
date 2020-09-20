import React from "react";
import "styles/FifthPanel.scss";
import SectionTitle from "components/SectionTitle";
import EmailPanel from "components/EmailPanel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFileDownload } from "@fortawesome/free-solid-svg-icons";

const FifthPanel = () => {
  return (
    <div className="FifthPanel">
      <SectionTitle text="CONTACT" />
      <EmailPanel />
      <div className="contactOptions">
        <div className="contactIcon">
          <FontAwesomeIcon icon={faLinkedin} />
        </div>
        <div className="contactIcon">
          <FontAwesomeIcon icon={faGithub} />
        </div>
        <div className="contactIcon">
          <FontAwesomeIcon icon={faEnvelope} />
        </div>
      </div>
    </div>
  );
};

export default FifthPanel;
