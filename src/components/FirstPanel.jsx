import React from "react";
import "styles/FirstPanel.scss";
import HelloText from "components/HelloText";
import logo from "graphics/snowboard2.png";

const FirstPanel = (props) => {
  return (
    <div className="FirstPanel" ref={props.customRef}>
      <div className="content">
        <div />
        <div className="leftBox">
          <div className="mainText">
            <HelloText />
            <div className="NamePart">I'M MICHAŁ</div>
            <div className="NamePart-shadow">I'M MICHAŁ</div>
            <div className="JobPart">FRONTEND DEVELOPER</div>
            <div className="JobPart-shadow">FRONTEND DEVELOPER</div>
          </div>
        </div>
        <div className="rightBox">
          <img src={logo} alt="" />
        </div>
      </div>
      <div className="bottomV" />
    </div>
  );
};

export default FirstPanel;
