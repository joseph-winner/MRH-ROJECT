import React, { useState, useEffect } from 'react';

export default function UserLocation() {
  const [location, setLocation] = useState({
    address: null,
    error: null,
  });

  useEffect(() => {
    // Check if geolocation is available in the browser
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;

          // Call geocoding API to get a human-readable address
          fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=514f302151534736b5880f6e40f053b1`)
            .then((response) => response.json())
            .then((data) => {
              if (data.results && data.results.length > 0) {
                // Get the formatted address from the response
                const address = data.results[0].formatted;
                setLocation({
                  address,
                  error: null,
                });
              } else {
                setLocation({
                  ...location,
                  error: 'Unable to find address for the given coordinates.',
                });
              }
            })
            .catch((error) => {
              setLocation({
                ...location,
                error: 'Error fetching location data.',
              });
            });
        },
        (error) => {
          setLocation({
            ...location,
            error: error.message,
          });
        }
      );
    } else {
      setLocation({
        ...location,
        error: 'Geolocation is not supported by this browser.',
      });
    }
  }, []);

  return (
    <div>
      <div className="current-user-location">
        {location.error ? (
          <p>Error: {location.error}</p>
        ) : (
          <p style={{fontSize:22, color:"#fff"}}>{location.address}</p>
        )}
      </div>
    </div>
  );
}
