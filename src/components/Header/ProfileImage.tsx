import React from 'react';

export default function ProfileImage() {
  return (
    <div className="relative group">
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-200"></div>
      <img 
        src="src/public/profile_picture.png" 
        alt="Professional headshot"
        className="relative rounded-full w-48 h-48 object-cover border-4 border-white shadow-xl transform group-hover:scale-105 transition duration-200"
      />
    </div>
  );
}