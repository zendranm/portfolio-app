import React from "react"
import "../styles/ThirdPanel.scss"
import SectionTitle from "../components/SectionTitle"
import SubSectionTitle from "../components/SubSectionTitle"
import ImageComposition from "../components/ImageComposition"

const ThirdPanel = props => {
  return (
    <div className="ThirdPanel" ref={props.customRef}>
      <div className="upperV" />
      <SectionTitle text="ABOUT ME" areTilesVisible={true} />
      <div className="aboutMe">
        <div className="leftBox">
          <ImageComposition />
        </div>
        <div className="rightBox">
          <div className="subDescription">
            <SubSectionTitle text="Experience" />
            <div>
              At my current position I work with JS and various web technologies
              everyday, implementing, debugging and consulting clients’ custom
              solutions. During a student internship at a well-known
              international company I managed to implement and deploy a crucial
              application in React.
            </div>
          </div>
          <div className="subDescription">
            <SubSectionTitle text="Background" />
            <div>
              I obtained my engineer’s degree in Control Engineering and
              Robotics but discovered that programming brings me tons of
              satisfaction and so obtained my master degree in Computer Science.
            </div>
          </div>
          <div className="subDescription">
            <SubSectionTitle text="Hobbies" />
            <div>
              Besides front-end, machine learning is my main area of interest. I
              dedicated both my engineering and master’s theses to explore the
              potential of artificial neural networks. Except for programming, I
              spend most of my spare time shredding on my guitars (almost for 10
              years now) and on many different sports (not pro at any of them
              but fun is fun).
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ThirdPanel
