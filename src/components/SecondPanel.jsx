import React from "react";
import "styles/SecondPanel.scss";
import SectionTitle from "components/SectionTitle";
import ProjectPanel from "components/ProjectPanel";
// import task_manager from "graphics/task_manager.png";
// import msc from "graphics/msc.png";
// import portfolio_app from "graphics/portfolio_app.png";
import tmp_proj_img from "graphics/tmp_proj_img.png";

const SecondPanel = () => {
  return (
    <div className="SecondPanel">
      <SectionTitle text="PROJECTS" />
      <div className="projectList">
        <ProjectPanel
          image={tmp_proj_img}
          title="Task Manager"
          text="Organize all Your tasks in a convenient way"
          linkLive="https://demo-task-manager.netlify.app/#/"
          linkGithub="https://github.com/zendranm/task-manager"
        />
        <ProjectPanel
          image={tmp_proj_img}
          title="Deepfake Research"
          text="Comparison of Deepfake methods"
          linkLive=""
          linkGithub="https://github.com/zendranm/MSC"
        />
        <ProjectPanel
          image={tmp_proj_img}
          title="My Portfolio"
          text="Exactly the same You're checking out right now"
          linkLive=""
          linkGithub="https://github.com/zendranm/portfolio-app"
        />
        <ProjectPanel
          image={tmp_proj_img}
          title="NaNaNaNaNaNa"
          text="BATMAN!"
          linkLive=""
          linkGithub=""
        />
      </div>
    </div>
  );
};

export default SecondPanel;
