import React, { useState, useRef } from "react"
import Helmet from "react-helmet"
import "../styles/App.scss"
import NavBar from "../components/NavBar"
import NavButton from "../components/NavButton"
import FirstPanel from "../components/FirstPanel"
import SecondPanel from "../components/SecondPanel"
import ThirdPanel from "../components/ThirdPanel"
import FourthPanel from "../components/FourthPanel"
import FifthPanel from "../components/FifthPanel"
import favicon from "../graphics/favicon.svg"
import "../styles/index.scss"

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

  const FirstPanelRef = useRef(null)
  const SecondPanelRef = useRef(null)
  const ThirdPanelRef = useRef(null)
  const FourthPanelRef = useRef(null)
  const FifthPanelRef = useRef(null)

  const listOfRefs = [
    FirstPanelRef,
    SecondPanelRef,
    ThirdPanelRef,
    FourthPanelRef,
    FifthPanelRef,
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
        <FirstPanel customRef={listOfRefs[0]} />
        <SecondPanel customRef={listOfRefs[1]} />
        <ThirdPanel customRef={listOfRefs[2]} />
        <FourthPanel customRef={listOfRefs[3]} />
        <FifthPanel customRef={listOfRefs[4]} />
      </div>
    </div>
  )
}

export default Index
