import React from "react";
import "styles/FourthPanel.scss";
import SectionTitle from "components/SectionTitle";
import html5 from "icons/html5.svg";
import css3 from "icons/css-3.svg";
import javascript from "icons/javascript.svg";
import typescript from "icons/typescript.svg";
import react from "icons/react-1.svg";
import redux from "icons/redux.svg";
import router from "icons/react-router.svg";
import webpack from "icons/webpack-icon.svg";
import sass from "icons/sass-1.svg";
import bootstrap from "icons/bootstrap-4.svg";
import fontawesome from "icons/fontawesome-1.svg";
import firebase from "icons/firebase-1.svg";
import github from "icons/github-icon-1.svg";
import python from "icons/python-5.svg";

const FourthPanel = () => {
  return (
    <div className="FourthPanel">
      <div className="upperV" />
      <SectionTitle text="DEV STACK" />
      <div className="stackList">
        <div className="icon">
          <img src={html5} alt="html5" />
          <div className="iconName">HTML5</div>
        </div>
        <div className="icon">
          <img src={css3} alt="css3" />
          <div className="iconName">CSS3</div>
        </div>
        <div className="icon">
          <img src={javascript} alt="javascript" />
          <div className="iconName">JAVASCRIPT</div>
        </div>
        <div className="icon">
          <img src={typescript} alt="typescript" />
          <div className="iconName">TYPESCRIPT</div>
        </div>
        <div className="icon">
          <img src={react} alt="react" />
          <div className="iconName">REACT</div>
        </div>
        <div className="icon">
          <img src={redux} alt="redux" />
          <div className="iconName">REDUX</div>
        </div>
        <div className="icon">
          <img src={router} alt="router" />
          <div className="iconName">ROUTER</div>
        </div>
        <div className="icon">
          <img src={webpack} alt="webpack" />
          <div className="iconName">WEBPACK</div>
        </div>
        <div className="icon">
          <img src={sass} alt="sass" />
          <div className="iconName">SASS</div>
        </div>
        <div className="icon">
          <img src={bootstrap} alt="bootstrap" />
          <div className="iconName">BOOTSTRAP</div>
        </div>
        <div className="icon">
          <img src={fontawesome} alt="fontawesome" />
          <div className="iconName">FONTAWESOME</div>
        </div>
        <div className="icon">
          <img src={firebase} alt="firebase" />
          <div className="iconName">FIREBASE</div>
        </div>
        <div className="icon">
          <img src={python} alt="python" />
          <div className="iconName">PYTHON</div>
        </div>
        <div className="icon">
          <img src={github} alt="github" />
          <div className="iconName">GITHUB</div>
        </div>
      </div>
      <div className="bottomV" />
    </div>
  );
};

export default FourthPanel;
