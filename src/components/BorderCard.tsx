import React from 'react';

export default function BorderCard({ children } : {children: React.ReactNode}) {
  return (
    <div className="my-8 px-8 py-6 border border-gray-500 rounded-2xl">
      {children}
    </div>
  );
};
