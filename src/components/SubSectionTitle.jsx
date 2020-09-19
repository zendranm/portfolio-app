import React from "react";
import "styles/SubSectionTitle.scss";

const SubSectionTitle = (props) => {
  return (
    <div className="SubSectionTitle">
      <div>{props.text}</div>
      <div className="tile1" />
    </div>
  );
};

export default SubSectionTitle;
