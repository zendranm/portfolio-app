import React from "react"
import "../styles/NavButton.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

const NavButton = props => {
  return (
    <div
      className="NavButton"
      onClick={props.onClick}
      onKeyDown={props.onClick}
      role="button"
      tabIndex={0}
    >
      <div className="icon">
        <FontAwesomeIcon icon={faBars} />
      </div>
    </div>
  )
}

export default NavButton
