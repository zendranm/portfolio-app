import React from "react"
import "../styles/SecondPanel.scss"
import SectionTitle from "../components/SectionTitle"
import ProjectPanel from "../components/ProjectPanel"
import { useSanityQuery } from "../hooks/useSanityQuery"

const SecondPanel = props => {
  const query = `*[_type == "projects"]{project_name, project_description, githubUrl, demoUrl, "thumbnail": thumbnail.asset->url, order}`
  const sections = useSanityQuery(query)

  return (
    <div className="SecondPanel" ref={props.customRef}>
      <SectionTitle text="PROJECTS" areTilesVisible={true} />
      <div className="projectList">
        {sections
          .sort((prev, next) => prev.order - next.order)
          .map(section => (
            <ProjectPanel
              key={section.order}
              image={section.thumbnail}
              title={section.project_name}
              text={section.project_description}
              linkLive={section.demoUrl}
              linkGithub={section.githubUrl}
            />
          ))}
      </div>
    </div>
  )
}

export default SecondPanel
