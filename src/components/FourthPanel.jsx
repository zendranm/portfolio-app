import React from "react";
import "styles/FourthPanel.scss";
import SectionTitle from "components/SectionTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFileDownload } from "@fortawesome/free-solid-svg-icons";

const FourthPanel = () => {
  return (
    <div className="FourthPanel">
      <SectionTitle text="CONTACT" />
      <div className="test">
        <div className="contactOptions">
          <div className="contactOption">
            <div className="contactIcon">
              <FontAwesomeIcon icon={faLinkedin} />
            </div>
            <div className="contactText">linkedIn</div>
          </div>
          <div className="contactOption">
            <div className="contactIcon">
              <FontAwesomeIcon icon={faGithub} />
            </div>
            <div className="contactText">github</div>
          </div>
          <div className="contactOption">
            <div className="contactIcon">
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <div className="contactText">zendran.m@gmail.com</div>
          </div>
          <div className="contactOption">
            <div className="contactIcon">
              <FontAwesomeIcon icon={faFileDownload} />
            </div>
            <div className="contactText">My CV</div>
          </div>
        </div>
      </div>
      <div>AAA</div>
    </div>
  );
};

export default FourthPanel;
