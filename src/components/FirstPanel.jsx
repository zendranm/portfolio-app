import React from "react";
import "styles/FirstPanel.scss";
import HelloText from "components/HelloText";

const FirstPanel = () => {
  return (
    <div className="FirstPanel">
      <HelloText />
      <div className="NamePart">I'M MICHAŁ ZENDRAN</div>
      <div className="JobPart">FRONTEND DEVELOPER</div>
    </div>
  );
};

export default FirstPanel;
