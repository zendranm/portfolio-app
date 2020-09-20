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
        <img src={html5} alt="html5" />
        <img src={css3} alt="css3" />
        <img src={javascript} alt="javascript" />
        <img src={typescript} alt="typescript" />
        <img src={react} alt="react" />
        <img src={redux} alt="redux" />
        <img src={router} alt="router" />
        <img src={webpack} alt="webpack" />
        <img src={sass} alt="sass" />
        <img src={bootstrap} alt="bootstrap" />
        <img src={fontawesome} alt="fontawesome" />
        <img src={firebase} alt="firebase" />
        <img src={python} alt="python" />
        <img src={github} alt="github" />
      </div>
      <div className="bottomV" />
    </div>
  );
};

export default FourthPanel;
