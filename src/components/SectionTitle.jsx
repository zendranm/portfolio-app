import React from 'react'
import styled from 'styled-components'
import { breakpoints } from '../styles/theme'

export const SectionTitle = props => {
  return (
    <MainContainer>
      <Text>{props.text}</Text>
      {props.areTilesVisible && (
        <>
          <Tile />
          <Tile upper />
        </>
      )}
    </MainContainer>
  )
}

const MainContainer = styled.div`
  position: relative;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  z-index: 0;
  margin-top: 100px;
  margin-bottom: 100px;
`
const Text = styled.div`
  text-align: center;
  font-size: 50px;
  font-family: ${props => props.theme.sectionTitleFont};
  z-index: 0;
`
const Tile = styled.div`
  height: 40%;
  background-color: ${props => props.theme.primaryColor};
  position: absolute;
  z-index: -1;
  max-width: ${props => (props.upper ? '400px' : '500px')};
  ${props => (props.upper ? 'top: 15%' : 'bottom: 15%')};
  width: 50%;
  ${props =>
    props.upper ? 'left: calc(50% - 30px)' : 'right: calc(50% - 30px)'};
`
