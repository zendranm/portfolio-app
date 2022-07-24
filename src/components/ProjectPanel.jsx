import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons'
import { breakpointsPixels } from '../styles/theme'

export const ProjectPanel = props => {
  const { image, title, description, linkLive, linkGithub } = props

  return (
    <MainContainer image={image}>
      <CoverPanel>
        <Header>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </Header>
        <ButtonContainer>
          {linkGithub && (
            <IconButton
              href={linkGithub}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </IconButton>
          )}
          {linkLive && (
            <IconButton
              href={linkLive}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faPlayCircle} />
            </IconButton>
          )}
        </ButtonContainer>
      </CoverPanel>
    </MainContainer>
  )
}

const MainContainer = styled.div`
  background-image: url(${props => props.image});
  background-size: cover;
  margin: 20px;
  overflow: hidden;
  border-radius: 5px;
  box-shadow: -19px -16px 25px -4px rgba(0, 0, 0, 0.75);
  width: calc(16 * 30 * 1px);
  aspect-ratio: 16 / 9;
`

const CoverPanel = styled.div`
  height: calc(100% - 40px);
  width: calc(100% - 40px);
  padding: 20px;
  background: #e6e6e6;
  color: ${props => props.theme.fontColor2};
  top: 100%;
  font-size: 20px;
  position: relative;
  transition: all 0.3s ease-out;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${MainContainer}:hover & {
    top: 0;
  }
`
const Header = styled.div`
  height: 50%;
`

const Title = styled.div`
  font-weight: 900;

  @media (min-width: ${breakpointsPixels.mobileS}) {
    font-size: 20px;
    margin-bottom: 5px;
  }

  @media (min-width: ${breakpointsPixels.mobileL}) {
    font-size: 30px;
    margin-bottom: 20px;
  }
`

const Description = styled.div`
  @media (min-width: ${breakpointsPixels.mobileS}) {
    font-size: 15px;
  }

  @media (min-width: ${breakpointsPixels.mobileL}) {
    font-size: 20px;
  }
`

const ButtonContainer = styled.div`
  height: 40%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  font-size: 100px;
`
const IconButton = styled.a`
  height: 100%;
  width: auto;
  display: flex;

  & svg {
    height: 100%;
  }
`
