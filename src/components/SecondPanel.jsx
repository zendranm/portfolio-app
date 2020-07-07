import React, { useState, useEffect } from "react";
import "styles/SecondPanel.scss";
import SectionTitle from "components/SectionTitle";

const SecondPanel = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 900);
  const [polygonHeight, setPolygonHeight] = useState(800);
  const [polygonAngle, setPolygonAngle] = useState(isDesktop ? 150 : 100);
  const [polygonPoints, setPolygonPoints] = useState(
    "0," +
      polygonAngle +
      " " +
      window.innerWidth +
      ",0 " +
      window.innerWidth +
      "," +
      polygonHeight +
      " " +
      window.innerWidth / 2 +
      "," +
      (polygonHeight + 70) +
      " 0," +
      polygonHeight
  );

  const updateBackground = () => {
    setIsDesktop(window.innerWidth > 900);
  };

  const updatePolygonHeight = () => {
    let targetHeight;
    if (window.innerWidth < 900) {
      targetHeight = 1500;
    } else {
      targetHeight = 500;
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
        window.innerWidth +
        ",0 " +
        window.innerWidth +
        "," +
        polygonHeight +
        " " +
        window.innerWidth / 2 +
        "," +
        (polygonHeight + 70) +
        " 0," +
        polygonHeight
    );
    console.log(polygonHeight);
  };

  useEffect(() => {
    updateBackground();
    updatePolygonHeight();
    updatePolygonAngle();
    updatePolygonPoints();
    console.log("I run");
  }, []);
  useEffect(() => {
    window.addEventListener("resize", updateBackground);
    return () => window.removeEventListener("resize", updateBackground);
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
        <svg width={window.innerWidth} height={polygonHeight + 70}>
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
