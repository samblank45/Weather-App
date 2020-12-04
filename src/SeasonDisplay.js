import React from "react"
import './SeasonDisplay.css'

const seasonConfig = {
  summer: {
    text: "lets go to the beach",
    iconName: "sun"
  },
  winter: {
    text: "brrr its FREEZING outside",
    iconName: "snowflake"
  }
}

function getSeason(lat, month) {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter'
  } else {
    return lat > 0 ? 'winter' : 'summer'
  }
}

function SeassonDisplay(props) {
  const season = getSeason(props.lat, new Date().getMonth())
  const {text, iconName} = seasonConfig[season]
 
  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`icon-right massive ${iconName} icon`} />
    </div>
  )
}

export default SeassonDisplay