import React, { useState } from "react";
import "styles/App.scss";
import NavBar from "components/NavBar";
import NavButton from "components/NavButton";
import FirstPanel from "components/FirstPanel";
import SecondPanel from "components/SecondPanel";
const App = () => {
  const [isNavBarVisible, updateIsNavBarVisible] = useState(false);

  const handleNavButtonOnClick = () => {
    updateIsNavBarVisible(true);
  };

  const handleNavBarOnClick = () => {
    updateIsNavBarVisible(false);
  };

  let navOption;
  if (isNavBarVisible === false) {
    navOption = <NavButton onClick={handleNavButtonOnClick} />;
  } else {
    navOption = <NavBar onClick={handleNavBarOnClick} />;
  }
  return (
    <div className="App">
      {navOption}
      <div className="MainPanel">
        <FirstPanel />
        <SecondPanel />
        <div>AAA</div>
        <div>BBB</div>
        <div>CCC</div>
      </div>
    </div>
  );
};

export default App;
