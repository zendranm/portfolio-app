import React from 'react'
import styled from 'styled-components'
import { SectionTitle } from '../components/SectionTitle'
import { useSanityQuery } from '../hooks/useSanityQuery'
import { DividerPanel } from './DividerPanel'
import { theme } from '../styles/theme'

export const DevStackSection = props => {
  const query = `*[_type == "dev_stack"]{technology_name, "icon": icon.asset->url, order}`
  const technologies = useSanityQuery(query)

  return (
    <MainContainer ref={props.customRef}>
      <DividerPanel dividerColor={theme.tertiaryColor} shape="left" />
      <SectionTitle text="DEV STACK" areTilesVisible={false} />
      <StackList>
        {technologies
          .sort((prev, next) => prev.order - next.order)
          .map(technology => (
            <Icon key={technology.order}>
              <Img src={technology.icon} alt={technology.technology_name} />
              <IconName>{technology.technology_name}</IconName>
            </Icon>
          ))}
      </StackList>
      <DividerPanel dividerColor={theme.secondaryColor} shape="v" isBottom />
    </MainContainer>
  )
}

const MainContainer = styled.div`
  width: 100%;
  background: ${props =>
    `linear-gradient(${props.theme.gradientColor1}, ${props.theme.gradientColor2})`};
  color: ${props => props.theme.secondaryColor};
  padding-top: 100px;
  padding-bottom: 200px;
  position: relative;
`

const StackList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  margin: 0 auto;

  @media (min-width: calc(((2 * ${theme.stackIconWidthWithMargin}) + ${theme.scrollBarWidth}) * 1px)) {
    width: calc(2 * ${theme.stackIconWidthWithMargin} * 1px);
  }

  @media (min-width: calc(((4 * ${theme.stackIconWidthWithMargin}) + ${theme.scrollBarWidth}) * 1px)) {
    width: calc(4 * ${theme.stackIconWidthWithMargin} * 1px);
  }

  @media (min-width: calc(((7 * ${theme.stackIconWidthWithMargin}) + ${theme.scrollBarWidth}) * 1px)) {
    width: calc(7 * ${theme.stackIconWidthWithMargin} * 1px);
  }

  @media (min-width: calc(((14 * ${theme.stackIconWidthWithMargin}) + ${theme.scrollBarWidth}) * 1px)) {
    width: calc(14 * ${theme.stackIconWidthWithMargin} * 1px);
  }
`

const Icon = styled.div`
  width: ${props => props.theme.stackIconWidth}px;
  height: 85px;
  margin: ${props => props.theme.stackIconMargin}px;
  position: relative;
`

const IconName = styled.div`
  position: absolute;
  top: 120%;
  left: 50%;
  transition: transform 0.2s;
  transform: translate(-50%, -50%) scale(0);
  background-color: ${props => props.theme.secondaryColor};
  padding: 5px;
  padding-left: 10px;
  padding-right: 10px;
  color: ${props => props.theme.fontColor1};
  font-size: 20px;
  font-weight: 900;
`

const Img = styled.img`
  width: ${props => props.theme.stackIconWidth}px;
  position: absolute;
  top: 50%;
  left: 50%;
  transition: transform 0.2s;
  transform: translate(-50%, -50%);

  &:hover {
    transform: translate(-50%, -50%) scale(1.6);
  }

  &:hover + ${IconName} {
    transform: translate(-50%, -50%) scale(1);
  }
`
