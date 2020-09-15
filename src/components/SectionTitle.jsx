import React from "react";
import "styles/SectionTitle.scss";

const SectionTitle = (props) => {
  return (
    <div className="SectionTitle">
      <div className="text">{props.text}</div>
      <div className="tile1" />
      <div className="tile2" />
    </div>
  );
};

export default SectionTitle;
