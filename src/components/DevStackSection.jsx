import React from 'react'
import '../styles/FourthPanel.scss'
import { SectionTitle } from '../components/SectionTitle'
import { useSanityQuery } from '../hooks/useSanityQuery'
import { DividerPanel } from './DividerPanel'
import { theme } from '../styles/theme'

export const DevStackSection = props => {
  const query = `*[_type == "dev_stack"]{technology_name, "icon": icon.asset->url, order}`
  const technologies = useSanityQuery(query)

  return (
    <div className="FourthPanel" ref={props.customRef}>
      <DividerPanel dividerColor={theme.tertiaryColor} shape="left" />
      <SectionTitle text="DEV STACK" areTilesVisible={false} />
      <div className="stackList">
        {technologies
          .sort((prev, next) => prev.order - next.order)
          .map(technology => (
            <div className="icon" key={technology.order}>
              <img src={technology.icon} alt={technology.technology_name} />
              <div className="iconName">{technology.technology_name}</div>
            </div>
          ))}
      </div>
      <DividerPanel dividerColor={theme.secondaryColor} shape="v" isBottom />
    </div>
  )
}
