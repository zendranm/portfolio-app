import React from "react";
import "styles/SecondPanel.scss";
import SectionTitle from "components/SectionTitle";
import ProjectPanel from "components/ProjectPanel";
import task_manager from "graphics/task_manager.png";
import msc from "graphics/msc.png";
import portfolio_app from "graphics/portfolio_app.png";

const SecondPanel = () => {
  return (
    <div className="SecondPanel">
      <SectionTitle text="PROJECTS" />
      <div className="projectList">
        <ProjectPanel
          image={task_manager}
          text="Task Manager - organize all Your tasks in a convenient way"
        />
        <ProjectPanel
          image={msc}
          text="Research on methods of changing objects in images using Deepfake technology"
        />
        <ProjectPanel image={portfolio_app} text="My portfolio" />
      </div>
    </div>
  );
};

export default SecondPanel;
