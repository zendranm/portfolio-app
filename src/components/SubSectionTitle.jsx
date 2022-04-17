import React from 'react'
import '../styles/SubSectionTitle.scss'
import styled from 'styled-components'

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
  width: 130%;
  background-color: ${props => props.theme.primaryColor};
  position: absolute;
  bottom: 0px;
  z-index: -1;
  @media (max-width: 370px) {
    width: 100%;
  }
`
