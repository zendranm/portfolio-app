import React from "react";
import "styles/SecondPanel.scss";
import SectionTitle from "components/SectionTitle";
import ProjectPanel from "components/ProjectPanel";
import task_manager_project from "graphics/task_manager_project.PNG";
import portfolio_project from "graphics/portfolio_project.PNG";
import deepfake_project from "graphics/deepfake_project.PNG";
import construction_project from "graphics/construction_project.PNG";

const SecondPanel = (props) => {
  return (
    <div className="SecondPanel" ref={props.customRef}>
      <SectionTitle text="PROJECTS" areTilesVisible={true} />
      <div className="projectList">
        <ProjectPanel
          image={task_manager_project}
          title="Task Manager"
          text="Organize all Your tasks in a convenient way"
          linkLive="https://demo-task-manager.netlify.app/#/"
          linkGithub="https://github.com/zendranm/task-manager"
        />
        <ProjectPanel
          image={deepfake_project}
          title="Deepfake Research"
          text="Comparison of Deepfake methods"
          linkLive=""
          linkGithub="https://github.com/zendranm/MSC"
        />
        <ProjectPanel
          image={portfolio_project}
          title="My Portfolio"
          text="Exactly the same You're checking out right now"
          linkLive=""
          linkGithub="https://github.com/zendranm/portfolio-app"
        />
        <ProjectPanel
          image={construction_project}
          title="New project"
          text="Coming soon!"
          linkLive=""
          linkGithub=""
        />
      </div>
    </div>
  );
};

export default SecondPanel;
