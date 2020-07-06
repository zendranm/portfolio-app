import React, { useState, useEffect } from "react";
import "styles/SecondPanel.scss";

const SecondPanel = () => {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 900);

  const updateBackground = () => {
    setDesktop(window.innerWidth > 900);
  };

  useEffect(() => {
    window.addEventListener("resize", updateBackground);
    return () => window.removeEventListener("resize", updateBackground);
  });

  const polygonHeight = 200;
  let polygonAngle = isDesktop ? 20 : 40;
  const polygonPoints =
    "0," +
    polygonAngle +
    " 200,0 200," +
    polygonHeight +
    " 100," +
    (polygonHeight + 30) +
    " 0," +
    polygonHeight;

  return (
    <div className="SecondPanel">
      <div className="mySVG">
        <svg viewBox="0 0 200 230">
          <polygon points={polygonPoints} />
        </svg>
      </div>
      <div className="content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla blandit
        lacus non felis tempus suscipit. Integer id justo vitae massa ultrices
        posuere. Nam sem tellus, tincidunt id enim id, sollicitudin interdum
        nibh. Quisque lobortis ultricies pharetra. Vivamus iaculis venenatis
        risus quis dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Sed at mi lorem. Praesent ac accumsan neque. Proin cursus
        vestibulum ligula, et malesuada leo rutrum vitae. Duis tristique nibh
        vel felis maximus, eu hendrerit urna aliquet. Sed vel purus ac lacus
        pulvinar porta. Aenean rutrum tincidunt augue id commodo. Etiam
        imperdiet ipsum leo, ut egestas ex mollis non. Proin sit amet congue mi,
        non sagittis arcu.
      </div>
      <div class="mySVG ghost" />
    </div>
  );
};

export default SecondPanel;
