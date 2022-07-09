import React from 'react'
import '../styles/ThirdPanel.scss'
import { SectionTitle } from '../components/SectionTitle'
import { SubSectionTitle } from '../components/SubSectionTitle'
import { ImageComposition } from '../components/ImageComposition'
import { useSanityQuery } from '../hooks/useSanityQuery'
import { DividerPanel } from './DividerPanel'

export const AboutMeSection = props => {
  const query = `*[_type == "about_me"]{section_name, section_content, order}`
  const sections = useSanityQuery(query)

  return (
    <div className="ThirdPanel" ref={props.customRef}>
      <DividerPanel />
      <SectionTitle text="ABOUT ME" areTilesVisible={true} />
      <div className="aboutMe">
        <div className="leftBox">
          <ImageComposition />
        </div>
        <div className="rightBox">
          {sections
            .sort((prev, next) => prev.order - next.order)
            .map(section => (
              <div className="subDescription" key={section.order}>
                <SubSectionTitle text={section.section_name} />
                <div>{section.section_content}</div>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}
