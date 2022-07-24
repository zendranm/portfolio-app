import React from 'react'
import styled from 'styled-components'
import { SectionTitle } from '../components/SectionTitle'
import { ProjectPanel } from '../components/ProjectPanel'
import { useSanityQuery } from '../hooks/useSanityQuery'

export const ProjectsSection = props => {
  const query = `*[_type == "projects"]{project_name, project_description, githubUrl, demoUrl, "thumbnail": thumbnail.asset->url, order}`
  const projects = useSanityQuery(query)

  return (
    <MainContainer ref={props.customRef}>
      <SectionTitle text="PROJECTS" areTilesVisible={true} />
      <ProjectList>
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
      </ProjectList>
    </MainContainer>
  )
}

const MainContainer = styled.div`
  width: 100%;
  background-color: ${props => props.theme.secondaryColor};
`

const ProjectList = styled.div`
  max-width: calc((16 * 2 * 30px) + (4 * 20px));
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`
