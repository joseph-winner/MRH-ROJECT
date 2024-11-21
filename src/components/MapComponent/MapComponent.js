// MapComponent.js
import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

const MapComponent = () => {
  // State to store the user's location
  const [location, setLocation] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // Your Google Maps API Key (replace with your own)
  const googleMapsApiKey = process.env.GOOGLE_MAP_KEY;

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ lat: latitude, lng: longitude });
        },
        (error) => {
          console.error("Error getting location:", error);
          alert("Could not retrieve your location.");
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }, []);

  if (!location) {
    return <div>Loading map...</div>;
  }

  return (
    <LoadScript googleMapsApiKey={googleMapsApiKey} onLoad={() => setIsLoaded(true)}>
      {isLoaded && (
        <GoogleMap
          mapContainerStyle={{ height: '500px', width: '100%' }}
          center={location}
          zoom={14}
        >
          {/* Marker at the user's location */}
          <Marker position={location} />
          
          {/* Optional: InfoWindow on the marker */}
          <InfoWindow position={location}>
            <div>
              <h2>You are here!</h2>
            </div>
          </InfoWindow>
        </GoogleMap>
      )}
    </LoadScript>
  );
};

export default MapComponent;
