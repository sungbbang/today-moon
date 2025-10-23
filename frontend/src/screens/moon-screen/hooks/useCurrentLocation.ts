import { useEffect, useState } from 'react';

export const useCurrentLocation = () => {
  const [location, setLocation] = useState({
    latitude: 37.5614,
    longitude: 127.0068,
  });

  const [isCurrentLocation, setIsCurrentLocation] = useState(false);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        pos => {
          const { latitude, longitude } = pos.coords;
          setLocation({
            latitude: Number(latitude.toFixed(4)),
            longitude: Number(longitude.toFixed(4)),
          });
          setIsCurrentLocation(true);
        },
        err => {
          setIsCurrentLocation(false);
          console.log(err.message);
        },
        { enableHighAccuracy: true },
      );
    }
  }, []);

  return { location, isCurrentLocation };
};
