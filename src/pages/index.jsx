import React, { useState, useRef } from 'react'
import Helmet from 'react-helmet'
import '../styles/App.scss'
import NavBar from '../components/NavBar'
import NavButton from '../components/NavButton'
import { IntroSection } from '../components/IntroSection'
import { ProjectsSection } from '../components/ProjectsSection'
import { AboutMeSection } from '../components/AboutMeSection'
import { DevStackSection } from '../components/DevStackSection'
import { ContactSection } from '../components/ContactSection'
import favicon from '../graphics/favicon.svg'
import '../styles/index.scss'

const Index = () => {
  const [isNavBarVisible, updateIsNavBarVisible] = useState(false)

  const handleNavButtonOnClick = () => {
    updateIsNavBarVisible(true)
  }

  const handleNavBarCloseOnClick = () => {
    updateIsNavBarVisible(false)
  }

  const isMobile = () => {
    const toMatch = [
      /Android/i,
      /webOS/i,
      /iPhone/i,
      /iPad/i,
      /iPod/i,
      /BlackBerry/i,
      /Windows Phone/i,
    ]

    return toMatch.some(toMatchItem => {
      return navigator.userAgent.match(toMatchItem)
    })
  }

  const handleOptionClick = () => {
    let isMobileDevice = false

    if (isMobile()) {
      isMobileDevice = true
    }

    if (isMobileDevice === true) {
      updateIsNavBarVisible(false)
    }
  }

  const IntroSectionRef = useRef(null)
  const ProjectsSectionRef = useRef(null)
  const AboutMeSectionRef = useRef(null)
  const DevStackSectionRef = useRef(null)
  const ContactSectionRef = useRef(null)

  const listOfRefs = [
    IntroSectionRef,
    ProjectsSectionRef,
    AboutMeSectionRef,
    DevStackSectionRef,
    ContactSectionRef,
  ]

  let navOption
  if (isNavBarVisible === false) {
    navOption = <NavButton onClick={handleNavButtonOnClick} />
  } else {
    navOption = (
      <NavBar
        onCloseClick={handleNavBarCloseOnClick}
        onOptionClick={handleOptionClick}
        references={listOfRefs}
      />
    )
  }
  return (
    <div className="App">
      <Helmet>
        <title>Michał Zendran</title>
        <link rel="icon" type="image/svg+xml" href={favicon} />
      </Helmet>
      {navOption}
      <div className="MainPanel">
        <IntroSection customRef={listOfRefs[0]} />
        <ProjectsSection customRef={listOfRefs[1]} />
        <AboutMeSection customRef={listOfRefs[2]} />
        <DevStackSection customRef={listOfRefs[3]} />
        <ContactSection customRef={listOfRefs[4]} />
      </div>
    </div>
  )
}

export default Index
