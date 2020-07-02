import React, { useState } from "react";
import NavBar from "components/NavBar";
import NavButton from "components/NavButton";

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
  return <div className="App">{navOption}</div>;
};

export default App;
