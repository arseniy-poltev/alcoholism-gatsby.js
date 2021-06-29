import React from "react"
import { GoogleApiWrapper } from "google-maps-react"

function CenterMap(props) {
  const { className } = props
  const [state] = React.useState({
    center: { lat: 40.78306, lng: -73.971249 }, // 40.783060, -73.971249
    zoom: 13,
  })

  function loadMap(element) {
    const { google } = props
    if (!element || !google) return
    new google.maps.Map(element, {
      zoom: state.zoom,
      center: state.center,
      scrollwheel: false,
      mapTypeControlOptions: {
        style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
        position: google.maps.ControlPosition.TOP_RIGHT,
      },
    })
  }
  const { loaded } = props
  return (
    <div>
      {loaded ? (
        <div
          className={className}
          ref={loadMap}
        />
      ) : (
        <span className="map-loader">API is Loading</span>
      )}
    </div>
  )
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCijXJZhd5zTCfVlViXKWVGOn1d9hJmVTI",
})(CenterMap)
