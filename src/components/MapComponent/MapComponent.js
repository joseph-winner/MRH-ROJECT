// MapComponent.js
import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import Loader from '../Loader/Loader';
import 'leaflet/dist/leaflet.css';


const MapComponent = () => {
  // State to store the user's location
  const [location, setLocation] = useState(null);

  // Get user's location when the component mounts
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          // Store location in state
          setLocation({ lat: latitude, lng: longitude });
        },
        (error) => {
          console.error("Error getting location:", error);
          alert("Could not retrieve your location");
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }, []);

  // While location is being fetched, show a loading message
  if (!location) {
    return <Loader />;
  }

  return (
    <MapContainer center={location} zoom={13} style={{ height: "500px", width: "100%" }}>
      {/* Tile Layer: OpenStreetMap */}
      <TileLayer 
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      
      {/* Marker: Show marker at the user's location */}
      <Marker position={location}>
        <Popup>
          You are here!
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default MapComponent;
