import React, { useState, useEffect } from "react";
import "styles/SecondPanel.scss";
import SectionTitle from "components/SectionTitle";

const SecondPanel = () => {
  const [isDesktop, setIsDesktop] = useState(document.body.clientWidth > 900);
  const [innerWidth, setInnerWidth] = useState(document.body.clientWidth);
  const [polygonHeight, setPolygonHeight] = useState(800);
  const [polygonAngle, setPolygonAngle] = useState(isDesktop ? 150 : 100);
  const [polygonPoints, setPolygonPoints] = useState(
    "0," +
      polygonAngle +
      " " +
      innerWidth +
      ",0 " +
      innerWidth +
      "," +
      polygonHeight +
      " " +
      innerWidth / 2 +
      "," +
      (polygonHeight + 70) +
      " 0," +
      polygonHeight
  );

  const updateBackground = () => {
    setIsDesktop(innerWidth > 900);
  };

  const updateInnerWidth = () => {
    setInnerWidth(document.body.clientWidth);
  };

  const updatePolygonHeight = () => {
    let targetHeight;
    if (innerWidth > 1184) {
      targetHeight = 700;
    } else if (innerWidth > 882) {
      targetHeight = 1100;
    } else {
      targetHeight = 1400;
    }
    setPolygonHeight(targetHeight);
    console.log(targetHeight);
  };

  const updatePolygonAngle = () => {
    setPolygonAngle(isDesktop ? 150 : 100);
  };

  const updatePolygonPoints = () => {
    setPolygonPoints(
      "0," +
        polygonAngle +
        " " +
        innerWidth +
        ",0 " +
        innerWidth +
        "," +
        polygonHeight +
        " " +
        innerWidth / 2 +
        "," +
        (polygonHeight + 70) +
        " 0," +
        polygonHeight
    );
    console.log(polygonHeight);
  };

  useEffect(() => {
    updateBackground();
    updateInnerWidth();
    updatePolygonHeight();
    updatePolygonAngle();
    updatePolygonPoints();
  });

  useEffect(() => {
    window.addEventListener("resize", updateBackground);
    return () => window.removeEventListener("resize", updateBackground);
  });

  useEffect(() => {
    window.addEventListener("resize", updateInnerWidth);
    return () => window.removeEventListener("resize", updateInnerWidth);
  });

  useEffect(() => {
    window.addEventListener("resize", updatePolygonHeight);
    return () => window.removeEventListener("resize", updatePolygonHeight);
  });

  useEffect(() => {
    window.addEventListener("resize", updatePolygonAngle);
    return () => window.removeEventListener("resize", updatePolygonAngle);
  });

  useEffect(() => {
    window.addEventListener("resize", updatePolygonPoints);
    return () => window.removeEventListener("resize", updatePolygonPoints);
  });

  return (
    <div className="SecondPanel">
      <div className="mySVG">
        <svg width={innerWidth} height={polygonHeight + 70}>
          <polygon points={polygonPoints} />
        </svg>
      </div>
      <div className="content">
        <SectionTitle text="PROJECTS" />
        <div className="projectList">
          <div className="projectPanel">AAAAAA</div>
          <div className="projectPanel">BBBBBB</div>
          <div className="projectPanel">CCCCCC</div>
        </div>
      </div>
    </div>
  );
};

export default SecondPanel;
