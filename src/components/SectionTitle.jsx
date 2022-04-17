import React from 'react'
import '../styles/SectionTitle.scss'

export const SectionTitle = props => {
  return (
    <div className="SectionTitle">
      <div className="text">{props.text}</div>
      {props.areTilesVisible ? (
        <div>
          <div className="tile1" />
          <div className="tile2" />
        </div>
      ) : (
        <div />
      )}
    </div>
  )
}
