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
          title="Task Manager"
          text="Organize all Your tasks in a convenient way"
          linkLive="https://demo-task-manager.netlify.app/#/"
          linkGithub="https://github.com/zendranm/task-manager"
        />
        <ProjectPanel
          image={msc}
          title="Deepfake Research"
          text="Research on methods of changing objects in images using Deepfake technology"
          linkLive=""
          linkGithub="https://github.com/zendranm/MSC"
        />
        <ProjectPanel
          image={portfolio_app}
          title="My Portfolio"
          text="Exactly the same You're checking out right now"
          linkLive=""
          linkGithub="https://github.com/zendranm/portfolio-app"
        />
      </div>
    </div>
  );
};

export default SecondPanel;
