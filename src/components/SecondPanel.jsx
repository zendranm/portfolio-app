import React from "react";
import "styles/SecondPanel.scss";

const SecondPanel = () => {
  return (
    <div className="SecondPanel">
      <div className="mySVG">
        <svg viewBox="0 0 200 230">
          <polygon points="0,40 200,0 200,200 100,230 0,200" />
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
