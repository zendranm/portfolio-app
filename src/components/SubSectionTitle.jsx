import React from 'react'
import '../styles/SubSectionTitle.scss'

export const SubSectionTitle = props => {
  return (
    <div className="SubSectionTitle">
      <div>{props.text}</div>
      <div className="tile1" />
    </div>
  )
}
