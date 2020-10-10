import React from "react";
import "styles/NavBar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const NavBar = (props) => {
  const scrollToRef = (ref) => {
    window.scrollTo({ top: ref.current.offsetTop, behavior: "smooth" });
  };

  const handleOptionClick = (ref) => {
    props.onOptionClick();
    scrollToRef(ref);
  };

  return (
    <div className="NavBar">
      <div className="LeftSide">
        <div
          className="NavOption"
          onClick={() => handleOptionClick(props.references[0])}
        >
          Start
        </div>
        <div
          className="NavOption"
          onClick={() => handleOptionClick(props.references[1])}
        >
          Projects
        </div>
        <div
          className="NavOption"
          onClick={() => handleOptionClick(props.references[2])}
        >
          About me
        </div>
        <div
          className="NavOption"
          onClick={() => handleOptionClick(props.references[3])}
        >
          Dev Stack
        </div>
        <div
          className="NavOption"
          onClick={() => handleOptionClick(props.references[4])}
        >
          Contact
        </div>
      </div>
      <div className="RightSide">
        <div className="CloseButton" onClick={props.onCloseClick}>
          <FontAwesomeIcon icon={faTimes} />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
