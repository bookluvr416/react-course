export async function fetchAvailablePlaces() {
  const res = await fetch('http://localhost:3000/places')

  if (!res.ok) {
    throw new Error('Failed to fetch places');
  }

  const resData = await res.json();

  return resData.places;
}

export async function fetchUserPlaces() {
  const res = await fetch('http://localhost:3000/user-places')

  if (!res.ok) {
    throw new Error('Failed to fetch user places');
  }

  const resData = await res.json();

  return resData.places;
}

export async function updateUserPlaces(places) {
  const res = await fetch('http://localhost:3000/user-places', {
    method: 'PUT',
    body: JSON.stringify({ places }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!res.ok) {
    throw new Error('Failed to update user data.');
  }

  const resData = await res.json();

  return resData.message;
};