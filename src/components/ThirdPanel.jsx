import React, { useState, useEffect } from "react"
import "../styles/ThirdPanel.scss"
import SectionTitle from "../components/SectionTitle"
import SubSectionTitle from "../components/SubSectionTitle"
import ImageComposition from "../components/ImageComposition"
import sanityClient from "../client.js"

const ThirdPanel = props => {
  const [sections, setSections] = useState([])

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "about_me"]{
          section_name,
          section_content,
          order
    }`
      )
      .then(data => setSections(data))
      .catch(console.error)
  }, [])

  return (
    <div className="ThirdPanel" ref={props.customRef}>
      <div className="upperV" />
      <SectionTitle text="ABOUT ME" areTilesVisible={true} />
      <div className="aboutMe">
        <div className="leftBox">
          <ImageComposition />
        </div>
        <div className="rightBox">
          {sections
            .sort((prev, next) => prev.order - next.order)
            .map((section, index) => (
              <div className="subDescription" key={index}>
                <SubSectionTitle text={section.section_name} />
                <div>{section.section_content}</div>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default ThirdPanel
