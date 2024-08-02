import { useState, useEffect } from 'react';
import Places from './Places.jsx';
import Error from './Error.jsx';
import { sortPlacesByDistance } from '../loc.js';
import { fetchAvailablePlaces } from '../http.js';

export default function AvailablePlaces({ onSelectPlace }) {
  const [isLoading, setIsLoading] = useState(false);
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [error, setError] = useState('');

 useEffect(() => {
  async function fetchPlaces() {
    setIsLoading(true);
    try {
      const unsortedPlaces = await fetchAvailablePlaces();
      navigator.geolocation.getCurrentPosition((position) => {
        const sortedPlaces = sortPlacesByDistance(
          unsortedPlaces,
          position.coords.latitude,
          position.coords.longitude
        );
        setAvailablePlaces(sortedPlaces);
        setIsLoading(false);
      });
    } catch (err) {
      setIsLoading(false);
      setError({ message: err.message || 'Something went wrong, failed to fetch places.' });
    }
  }
  
  fetchPlaces();
 }, []);

 if (error) {
  return <Error title="Error occurred" message={error.message} />
 }

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isLoading}
      loadingText="Fetcing place data..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
