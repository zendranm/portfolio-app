import React from 'react'
import styled from 'styled-components'

export const DividerPanel = props => {
  return (
    <MainContainer>
      <Svg viewBox="0 0 100 100" preserveAspectRatio="none">
        <Polygon points="0,0 100,0 100,100 0,1"></Polygon>
      </Svg>
    </MainContainer>
  )
}

const MainContainer = styled.div`
  width: 100%;
  height: 200px;
  position: absolute;
  top: -1px;
  left: 0;
`

const Svg = styled.svg`
  width: 100%;
  height: 100%;
`

const Polygon = styled.polygon`
  fill: ${props => props.theme.secondaryColor};
`
