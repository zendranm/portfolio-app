import React, { useState } from "react";
import "styles/App.scss";
import NavBar from "components/NavBar";
import NavButton from "components/NavButton";
import FirstPanel from "components/FirstPanel";
import SecondPanel from "components/SecondPanel";
import ThirdPanel from "components/ThirdPanel";
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
        <ThirdPanel />
      </div>
    </div>
  );
};

export default App;
