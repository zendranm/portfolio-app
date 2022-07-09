import React from 'react'
import styled from 'styled-components'

const rightSlope = '0,0 100,0 100,100 0,1'
const leftSlope = '0,0 100,0 100,1 0,100'
const vSlope = '0,0 50,99 100,0 100,100 0,100'

const getDividerShape = option => {
  switch (option) {
    case 'right':
      return rightSlope
    case 'left':
      return leftSlope
    default:
      return vSlope
  }
}

export const DividerPanel = props => {
  return (
    <MainContainer isBottom={props.isBottom}>
      <Svg viewBox="0 0 100 100" preserveAspectRatio="none">
        <Polygon
          points={getDividerShape(props.shape)}
          dividerColor={props.dividerColor}
        ></Polygon>
      </Svg>
    </MainContainer>
  )
}

const MainContainer = styled.div`
  width: 100%;
  height: 200px;
  position: absolute;
  ${props => (props.isBottom ? 'bottom: -1px' : 'top: -1px')};
  left: 0;
`

const Svg = styled.svg`
  width: 100%;
  height: 100%;
`

const Polygon = styled.polygon`
  fill: ${props => props.dividerColor};
`
