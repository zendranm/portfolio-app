import React from "react";
import "styles/NavBar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const NavBar = (props) => {
  return (
    <div className="NavBar">
      <div className="LeftSide">
        <div className="NavOption">Start</div>
        <div className="NavOption">Projects</div>
        <div className="NavOption">About me</div>
        <div className="NavOption">Contact</div>
      </div>
      <div className="RightSide">
        <div className="CloseButton" onClick={props.onClick}>
          <FontAwesomeIcon icon={faTimes} />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
