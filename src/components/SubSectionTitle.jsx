import React from 'react'
import styled from 'styled-components'
import { breakpointsPixels } from '../styles/theme'

export const SubSectionTitle = props => {
  return (
    <MainContainer>
      <Text>{props.text}</Text>
      <Tile />
    </MainContainer>
  )
}

const MainContainer = styled.div`
  width: fit-content;
  margin-bottom: 10px;
  position: relative;
  z-index: 0;
`

const Text = styled.div`
  font-size: 30px;
  font-weight: 900;
`

const Tile = styled.div`
  height: 50%;
  background-color: ${props => props.theme.primaryColor};
  position: absolute;
  bottom: 0px;
  z-index: -1;

  @media (min-width: ${breakpointsPixels.mobileS}) {
    width: 100%;
  }

  @media (min-width: ${breakpointsPixels.mobileL}) {
    width: 130%;
  }
`
