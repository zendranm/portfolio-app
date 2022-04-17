import React from 'react'
import '../styles/HelloText.scss'

export const HelloText = () => {
  return (
    <div className="HelloText">
      <div className="tile" />
      <div className="text">
        <svg viewBox="0 0 590 140">
          <g>
            <line className="path" id="h1" x1="20" y1="0" x2="20" y2="140" />
            <line className="path" id="h2" x1="90" y1="0" x2="90" y2="140" />
            <line className="path" id="h3" x1="20" y1="70" x2="90" y2="70" />
          </g>
          <g>
            <line className="path" id="e1" x1="150" y1="0" x2="150" y2="140" />
            <line className="path" id="e2" x1="150" y1="17" x2="220" y2="17" />
            <line className="path" id="e3" x1="150" y1="70" x2="210" y2="70" />
            <line
              className="path"
              id="e4"
              x1="150"
              y1="122"
              x2="220"
              y2="123"
            />
          </g>
          <g>
            <line className="path" id="l11" x1="260" y1="0" x2="260" y2="140" />
            <line
              className="path"
              id="l12"
              x1="260"
              y1="122"
              x2="330"
              y2="123"
            />
          </g>
          <g>
            <line className="path" id="l21" x1="370" y1="0" x2="370" y2="140" />
            <line
              className="path"
              id="l22"
              x1="370"
              y1="122"
              x2="440"
              y2="123"
            />
          </g>
          <g>
            <circle
              className="path"
              id="o"
              cx="510"
              cy="70"
              r="52"
              fill="none"
            />
          </g>
        </svg>
      </div>
    </div>
  )
}
