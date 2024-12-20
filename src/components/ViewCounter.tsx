import React, { useEffect, useState } from 'react';

export default function ViewCounter() {
  const [views, setViews] = useState<number>(0);

  useEffect(() => {
    // Using a simple counter API service
    fetch('https://api.countapi.xyz/hit/manojkumar-portfolio/visits')
      .then(response => response.json())
      .then(data => setViews(data.value))
      .catch(console.error);
  }, []);

  return (
    <div className="fixed bottom-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg">
      <p className="text-sm">Views: {views}</p>
    </div>
  );
}