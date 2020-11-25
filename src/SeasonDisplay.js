import React from "react"

function getSeason(lat, month) {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'Summer' : 'Winter'
  } else {
    return lat > 0 ? 'Winter' : 'Summer'
  }
}

function SeassonDisplay(props) {
  const season = getSeason(props.lat, new Date().getMonth())
  console.log(season)
  return (
    <div>
      Season: {season}
      <br></br>
      Lat: {props.lat}
      <br></br>
      Month: {new Date().getMonth()}
    </div>
  )
}

export default SeassonDisplay