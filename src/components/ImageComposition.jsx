import React from 'react'
import styled from 'styled-components'
import myImage from '../graphics/about_me_image_tinypng.png'

const backBlobPath =
  'M34.3,-53.9C47.2,-51.9,62.4,-48.4,72.6,-39.1C82.9,-29.9,88.1,-14.9,82.8,-3.1C77.5,8.8,61.7,17.7,50.9,26C40.2,34.3,34.5,42.1,26.8,45.7C19.2,49.3,9.6,48.8,-1.4,51.1C-12.3,53.5,-24.7,58.8,-36.4,57.5C-48.2,56.3,-59.5,48.6,-61.2,37.9C-62.9,27.2,-55.1,13.6,-54,0.6C-52.9,-12.4,-58.6,-24.8,-57.7,-36.8C-56.8,-48.9,-49.3,-60.6,-38.6,-63.9C-27.8,-67.1,-13.9,-61.9,-1.6,-59.1C10.7,-56.3,21.3,-55.9,34.3,-53.9Z'

const frontBlobPath =
  'M32.3,-43.4C46.3,-41.3,65,-39.8,73.6,-30.7C82.2,-21.7,80.7,-5.2,79.3,12.1C77.9,29.4,76.6,47.3,67,57.4C57.3,67.5,39.2,69.7,23.9,67.9C8.7,66.2,-3.7,60.5,-13.5,54C-23.4,47.5,-30.7,40.2,-37.3,32.4C-44,24.6,-50,16.3,-57.1,4.7C-64.2,-6.9,-72.3,-21.8,-70.7,-35.2C-69.1,-48.6,-57.8,-60.4,-44.4,-62.8C-31,-65.2,-15.5,-58.1,-3.2,-53.1C9.2,-48.2,18.3,-45.5,32.3,-43.4Z'

export const ImageComposition = () => {
  return (
    <MainContainer>
      <Blob>
        <Svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <Path d={backBlobPath} transform="translate(100 100)" />
        </Svg>
      </Blob>
      <Blob isInFront>
        <Svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <Path isInFront d={frontBlobPath} transform="translate(100 100)" />
        </Svg>
      </Blob>
      <ImageLayer>
        <Img src={myImage} alt="" />
      </ImageLayer>
    </MainContainer>
  )
}

const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`

const Blob = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: ${props => (props.isInFront ? 1 : 0)};
  filter: drop-shadow(9px -10px 19px rgba(0, 0, 0, 0.5));
`

const Svg = styled.svg`
  width: 100%;
  height: 100%;
`

const Path = styled.path`
  fill: ${props =>
    props.isInFront ? props.theme.gradientColor1 : props.theme.gradientColor2};
`

const ImageLayer = styled.div`
  height: 100%;
  z-index: 2;
  width: fit-content;
  display: flex;
`

const Img = styled.img`
  max-height: 90%;
  width: 100%;
  object-fit: contain;
  filter: drop-shadow(9px -10px 19px rgba(0, 0, 0, 0.5));
`
