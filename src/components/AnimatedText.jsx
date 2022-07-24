import React from 'react'
import styled from 'styled-components'
import { Phrase, Char } from 'animatedtxt'
import { useWindowDimensions } from '../hooks/useWindowDimensions'
import { breakpoints } from '../styles/theme'

const calculatePhraseSize = currentWidth => {
  if (currentWidth >= breakpoints.desktop) return 120
  if (currentWidth >= breakpoints.tablet) return 100
  if (currentWidth >= breakpoints.mobileL) return 70
  if (currentWidth >= breakpoints.mobileS) return 50
}

export const AnimatedText = () => {
  const { width } = useWindowDimensions()

  return (
    <MainContainer>
      <Tile />
      <Phrase
        color="white"
        margin={12}
        size={calculatePhraseSize(width)}
        duration={0.6}
        cubicBezier={[0.68, 0.04, 0.45, 0.98]}
      >
        <Char char="H" delay={0.8} />
        <Char char="E" delay={1.2} />
        <Char char="L" delay={1.6} />
        <Char char="L" delay={2.0} />
        <Char char="O" delay={1.6} duration={1.0} />
      </Phrase>
    </MainContainer>
  )
}

const MainContainer = styled.div`
  position: relative;
  animation-play-state: inherit;
  width: fit-content;
`

const Tile = styled.div`
  background-color: ${props => props.theme.secondaryColor};
  box-shadow: -15px 17px 80px -5px #000000;
  animation: 0.4s slide-right 0.4s forwards;
  transform: translateX(-300%);
  animation-play-state: inherit;
  position: absolute;
  height: 100%;
  width: 100%;
  top: 30%;
  right: 8%;
  z-index: -1;
`
