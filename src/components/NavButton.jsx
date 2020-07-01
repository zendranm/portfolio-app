import React from "react";
import "styles/NavButton.scss";

const onNavButtonClick = () => {
  console.log("Whaaat");
};

const NavButton = () => {
  return (
    <div className="NavButton" onClick={onNavButtonClick}>
      Click
    </div>
  );
};

export default NavButton;
