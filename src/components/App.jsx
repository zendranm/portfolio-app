import React, { useState, useRef } from "react";
import "styles/App.scss";
import NavBar from "components/NavBar";
import NavButton from "components/NavButton";
import FirstPanel from "components/FirstPanel";
import SecondPanel from "components/SecondPanel";
import ThirdPanel from "components/ThirdPanel";
import FourthPanel from "components/FourthPanel";
import FifthPanel from "components/FifthPanel";

const App = () => {
  const [isNavBarVisible, updateIsNavBarVisible] = useState(false);

  const handleNavButtonOnClick = () => {
    updateIsNavBarVisible(true);
  };

  const handleNavBarOnClick = () => {
    updateIsNavBarVisible(false);
  };

  const FirstPanelRef = useRef(null);
  const SecondPanelRef = useRef(null);
  const ThirdPanelRef = useRef(null);
  const FourthPanelRef = useRef(null);
  const FifthPanelRef = useRef(null);

  const listOfRefs = [
    FirstPanelRef,
    SecondPanelRef,
    ThirdPanelRef,
    FourthPanelRef,
    FifthPanelRef,
  ];

  let navOption;
  if (isNavBarVisible === false) {
    navOption = <NavButton onClick={handleNavButtonOnClick} />;
  } else {
    navOption = (
      <NavBar onClick={handleNavBarOnClick} references={listOfRefs} />
    );
  }
  return (
    <div className="App">
      {navOption}
      <div className="MainPanel">
        <FirstPanel customRef={listOfRefs[0]} />
        <SecondPanel customRef={listOfRefs[1]} />
        <ThirdPanel customRef={listOfRefs[2]} />
        <FourthPanel customRef={listOfRefs[3]} />
        <FifthPanel customRef={listOfRefs[4]} />
      </div>
    </div>
  );
};

export default App;
