import React from 'react'
import MapComponent from '../../../components/MapComponent/MapComponent'
import "./HomeSreen.css"
import Navbar from '../../../components/Navbar/Navbar'

export default function HomeSreen() {
  return (
    <div>
      <Navbar />
      <div className="main-screen-display">
        <div className="map-screen">
          <MapComponent />
        </div>
      </div>
    </div>
  )
}
