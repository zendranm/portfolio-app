import React from "react";
import "styles/FirstPanel.scss";
import HelloText from "components/HelloText";
import logo from "graphics/snowboard.png";

const FirstPanel = () => {
  return (
    <div className="FirstPanel">
      <HelloText />
      <div className="NamePart">I'M MICHAŁ ZENDRAN</div>
      <div className="JobPart">FRONTEND DEVELOPER</div>
      <div className="mainImage">
        <img src={logo} alt="" />
      </div>
    </div>
  );
};

export default FirstPanel;
