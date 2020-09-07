import React from "react";
import "styles/FirstPanel.scss";
import HelloText from "components/HelloText";
import logo from "graphics/snowboard2.png";

const FirstPanel = () => {
  return (
    <div className="FirstPanel">
      <div className="content">
        <div className="leftBox">
          <HelloText />
          {/* <div className="NamePart">I'M MICHAŁ ZENDRAN</div> */}
          {/* <div className="JobPart">FRONTEND DEVELOPER</div> */}
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
