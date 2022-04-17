import React from 'react'
import '../styles/HelloText.scss'
import { Phrase, Char } from 'animatedtxt'

export const HelloText = () => {
  return (
    <div className="HelloText">
      <div className="tile" />
      <Phrase color="white" margin={12} size={120} duration={0.6}>
        <Char char="H" delay={0.8} />
        <Char char="E" delay={1.2} />
        <Char char="L" delay={1.6} />
        <Char char="L" delay={2.0} />
        <Char char="O" delay={1.6} duration={1.0} />
      </Phrase>
    </div>
  )
}
