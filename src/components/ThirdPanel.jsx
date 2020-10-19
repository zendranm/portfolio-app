import React from "react";
import "../styles/ThirdPanel.scss";
import SectionTitle from "../components/SectionTitle";
import SubSectionTitle from "../components/SubSectionTitle";
import ImageComposition from "../components/ImageComposition";

const ThirdPanel = (props) => {
  return (
    <div className="ThirdPanel" ref={props.customRef}>
      <div className="upperV" />
      <SectionTitle text="ABOUT ME" areTilesVisible={true} />
      <div className="aboutMe">
        <div className="leftBox">
          <ImageComposition />
        </div>
        <div className="rightBox">
          <div className="mainDescription">
            Hi! I'm Michał,{" "}
            <u>
              <b>React Developer</b>
            </u>
            . Fresh out of college, but experienced, I am looking for an
            opportunity to further develop my skills in React and Frontend in
            general. I had the opportunity to take part in a student internship{" "}
            <u>
              <b>at well-known international company</b>
            </u>{" "}
            as a front-end developer. During this time I managed to implement
            and deploy{" "}
            <u>
              <b>crucial application in React.</b>
            </u>
          </div>
          <div className="subDescription">
            <SubSectionTitle text="Front-end Developer" />
            <div>
              I like to code things from scratch and love to see an idea
              becoming a live thing. Clean code and elegant design is{" "}
              <u>
                <b>my ninja way.</b>
              </u>
            </div>
          </div>
          <div className="subDescription">
            <SubSectionTitle text="Background" />
            <div>
              I obtained my engineer degree in{" "}
              <u>
                <b>Control Engineering and Robotics</b>
              </u>{" "}
              but discovered that programming brings me tons of satisfaction and
              obtained my{" "}
              <u>
                <b>master degree in Computer Science.</b>
              </u>
            </div>
          </div>
          <div className="subDescription">
            <SubSectionTitle text="Hobbies" />
            <div>
              I spend most of my spare time at shredding on my guitars (almost
              for 10 years now) and on many different sports (not pro at any of
              them but fun is fun).
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdPanel;
