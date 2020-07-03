import React from "react";
import "styles/MainPanel.scss";
import HelloText from "components/HelloText";

const MainPanel = () => {
  return (
    <div className="MainPanel">
      <div className="FirstPanel">
        <HelloText />
        <div>
          I'M MICHAŁ ZENDRAN
          <br />
          FRONTEND DEVELOPER
        </div>
      </div>
      <div>AAA</div>
    </div>
  );
};

export default MainPanel;
