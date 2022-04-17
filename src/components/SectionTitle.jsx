import React from 'react'
import styled from 'styled-components'

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
  width: fit-content;
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
  ${props => (props.upper ? 'top: 15%' : 'bottom: 15%')};

  @media (min-width: 320px) {
    width: 150px;
    ${props => (props.upper ? 'right: -50px' : 'left: -50px')};
  }

  @media (min-width: 370px) {
    width: 170px;
    ${props => (props.upper ? 'right: -70px' : 'left: -70px')};
  }

  @media (min-width: 400px) {
    width: 210px;
    ${props => (props.upper ? 'right: -90px' : 'left: -90px')};
  }

  @media (min-width: 1200px) {
    width: ${props => (props.upper ? '400px' : '500px')};
    ${props => (props.upper ? 'right: -280px' : 'left: -380px')};
  }
`
