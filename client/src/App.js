import { useState, useEffect } from "react"
import ReactMapGL, { Marker } from "react-map-gl"
import { listLogEntries } from "./API.js"

const App = () => {
  const [logEntries, setLogEntries] = useState([])
  const [viewport, setViewport] = useState({
    width: "100vw",
    height: "100vh",
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 3.5,
  })

  const getEntries = async () => {
    const logEntries = await listLogEntries()
    setLogEntries(logEntries)
  }

  useEffect(() => {
    getEntries()
  }, [])

  return (
    <ReactMapGL
      {...viewport}
      mapStyle="mapbox://styles/slim-kasraoui/ckm8lo7kxh3bs17p624wsnbz0"
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
      {logEntries.map((entry) => (
        <Marker
          key={entry._id}
          latitude={entry.latitude}
          longitude={entry.longitude}
          offsetLeft={-12}
          offsetTop={-24}
        >
          <svg
          style={{
            width: '24px',
            height: '24px'
          }}
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="marker"
          >
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
        </Marker>
      ))}
    </ReactMapGL>
  )
}

export default App
