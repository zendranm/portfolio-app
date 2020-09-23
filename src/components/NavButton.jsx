import React from "react";
import "styles/NavButton.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const NavButton = (props) => {
  return (
    <div className="NavButton" onClick={props.onClick}>
      <div className="icon">
        <FontAwesomeIcon icon={faBars} />
      </div>
    </div>
  );
};

export default NavButton;
