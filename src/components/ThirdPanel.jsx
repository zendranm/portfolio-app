import React from "react";
import "styles/ThirdPanel.scss";
import SectionTitle from "components/SectionTitle";
import image from "graphics/image_cropped.jpg";

const ThirdPanel = () => {
  return (
    <div className="ThirdPanel">
      <div className="bottomV" />
      <SectionTitle text="ABOUT ME" />
      <div className="aboutme">
        <div className="image">
          <img src={image} alt="logo" />
        </div>
        <div className="content">
          I am a graduate of master studies at Wrocław University of Science and
          Technology in the field of Computer Science in English at the faculty
          of Electronics. In my master’s thesis I analyzed the problem of
          deepfake generation using artificial neural networks. During my
          studies I developed skills of teamwork, time management, effective
          communication and flexibility. I am eager to get new experience and
          learn new technologies. I had opportunity to take part in student
          internship at well-known international company as a front-end
          developer. Thanks to that I developed my programming skills, learned
          how to work in Scrum methodology and gained experience in working in
          large, international team.
        </div>
      </div>
    </div>
  );
};

export default ThirdPanel;
