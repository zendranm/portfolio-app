import React, { useState, useEffect } from 'react'
import '../styles/FirstPanel.scss'
import { AnimatedText } from './AnimatedText'
import myImage from '../graphics/snowboard_tinypng.png'

export const IntroSection = props => {
  const [animationState, updateAnimationState] = useState('paused')

  useEffect(() => {
    updateAnimationState(document.hidden ? 'paused' : 'running')

    document.onvisibilitychange = function () {
      if (document.visibilityState === 'visible') {
        updateAnimationState('running')
      } else {
        updateAnimationState('paused')
      }
    }
  }, [])

  return (
    <div className="FirstPanel" ref={props.customRef}>
      <div className="content">
        <div />
        <div className="leftBox">
          <div
            className="mainText"
            style={{ animationPlayState: animationState }}
          >
            <AnimatedText />
            <div className="NamePart">I'M MICHAŁ</div>
            <div className="NamePart-shadow">I'M MICHAŁ</div>
            <div className="JobPart">FRONTEND DEVELOPER</div>
            <div className="JobPart-shadow">FRONTEND DEVELOPER</div>
          </div>
        </div>
        <div className="rightBox">
          <img src={myImage} alt="" />
        </div>
      </div>
      <div className="bottomV" />
    </div>
  )
}
