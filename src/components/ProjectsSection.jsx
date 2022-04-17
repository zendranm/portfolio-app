import React from 'react'
import '../styles/SecondPanel.scss'
import { SectionTitle } from '../components/SectionTitle'
import { ProjectPanel } from '../components/ProjectPanel'
import { useSanityQuery } from '../hooks/useSanityQuery'

export const ProjectsSection = props => {
  const query = `*[_type == "projects"]{project_name, project_description, githubUrl, demoUrl, "thumbnail": thumbnail.asset->url, order}`
  const projects = useSanityQuery(query)

  return (
    <div className="SecondPanel" ref={props.customRef}>
      <SectionTitle text="PROJECTS" areTilesVisible={true} />
      <div className="projectList">
        {projects
          .sort((prev, next) => prev.order - next.order)
          .map(project => (
            <ProjectPanel
              key={project.order}
              image={project.thumbnail}
              title={project.project_name}
              description={project.project_description}
              linkLive={project.demoUrl}
              linkGithub={project.githubUrl}
            />
          ))}
      </div>
    </div>
  )
}
