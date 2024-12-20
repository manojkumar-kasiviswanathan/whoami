import React, { useEffect, useState } from 'react';
import { Eye } from 'lucide-react';

export default function ViewCounter() {
  const [views, setViews] = useState<number>(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    fetch('https://api.countapi.xyz/hit/manojkumar-portfolio/visits')
      .then(response => response.json())
      .then(data => setViews(data.value))
      .catch(console.error);
  }, []);

  return isVisible ? (
    <div className="fixed bottom-4 right-4 bg-white/10 backdrop-blur-md rounded-full shadow-lg px-4 py-2 border border-white/20">
      <div className="flex items-center gap-2">
        <Eye size={18} className="text-blue-400" />
        <p className="text-sm font-medium text-white">{views.toLocaleString()}</p>
        <button 
          onClick={() => setIsVisible(false)}
          className="ml-2 text-white/60 hover:text-white"
          aria-label="Close view counter"
        >
          ×
        </button>
      </div>
    </div>
  ) : null;
}