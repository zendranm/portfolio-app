import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'

export const ProjectPanel = props => {
  let setLinkButtons = () => {
    let linkButtons = []

    if (props.linkGithub) {
      linkButtons.push(
        <IconButton key={props.title + 'linkGithub'}>
          <a href={props.linkGithub} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </IconButton>
      )
    }

    if (props.linkLive) {
      linkButtons.push(
        <IconButton key={props.title + 'linkLive'}>
          <a href={props.linkLive} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faPlayCircle} />
          </a>
        </IconButton>
      )
    }

    return linkButtons
  }

  return (
    <MainContainer image={props.image}>
      <CoverPanel>
        <Header>
          <Title>{props.title}</Title>
          <Description>{props.text}</Description>
        </Header>
        <ButtonContainer>{setLinkButtons().map(item => item)}</ButtonContainer>
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
  flex-wrap: nowrap;
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
  font-size: 30px;
  margin-bottom: 20px;

  @media (max-width: 500px) {
    font-size: 20px;
    margin-bottom: 5px;
  }
`

const Description = styled.div`
  font-size: 20px;

  @media (max-width: 500px) {
    font-size: 15px;
  }
`

const ButtonContainer = styled.div`
  height: 50%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-evenly;
  align-items: flex-end;
  font-size: 100px;
`
const IconButton = styled.div`
  width: auto;
  height: fit-content;
  font-size: 100px;

  @media (max-width: 500px) {
    font-size: 45px;
  }
`
