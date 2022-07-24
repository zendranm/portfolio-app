import React from 'react'
import { SectionTitle } from '../components/SectionTitle'
import { SubSectionTitle } from '../components/SubSectionTitle'
import { ImageComposition } from '../components/ImageComposition'
import { useSanityQuery } from '../hooks/useSanityQuery'
import { DividerPanel } from './DividerPanel'
import { theme, breakpointsPixels } from '../styles/theme'
import styled from 'styled-components'

export const AboutMeSection = props => {
  const query = `*[_type == "about_me"]{section_name, section_content, order}`
  const sections = useSanityQuery(query)

  return (
    <MainContainer ref={props.customRef}>
      <DividerPanel dividerColor={theme.secondaryColor} shape="right" />
      <SectionTitle text="ABOUT ME" areTilesVisible={true} />
      <Wrapper>
        <LeftBox>
          <ImageComposition />
        </LeftBox>
        <RightBox>
          {sections
            .sort((prev, next) => prev.order - next.order)
            .map(section => (
              <Description key={section.order}>
                <SubSectionTitle text={section.section_name} />
                <div>{section.section_content}</div>
              </Description>
            ))}
        </RightBox>
      </Wrapper>
    </MainContainer>
  )
}

const MainContainer = styled.div`
  background-color: ${props => props.theme.tertiaryColor};
  color: ${props => props.theme.fontColor2};
  width: 100%;
  position: relative;
  padding-top: 100px;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;

  @media (min-width: ${breakpointsPixels.desktop}) {
    flex-direction: row;
    padding-left: 30px;
    padding-right: 30px;
  }
`

const LeftBox = styled.div`
  max-width: 400px;
  width: 100%;
  height: 500px;
  position: relative;
  flex: 0 0 auto;

  @media (min-width: ${breakpointsPixels.desktop}) {
    margin-right: 50px;
  }
`

const RightBox = styled.div`
  text-align: justify;
  text-justify: inter-word;
  flex: 1 1 auto;

  @media (min-width: ${breakpointsPixels.mobileS}) {
    max-width: 800px;
    font-size: 17px;
  }

  @media (min-width: ${breakpointsPixels.mobileL}) {
    font-size: 20px;
  }

  @media (min-width: ${breakpointsPixels.desktop}) {
    max-width: 800px;
  }
`

const Description = styled.div`
  margin-bottom: 25px;
`
