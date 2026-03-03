import React from 'react';

export default function BorderCard({ className, children, header } : {className: string, children: React.ReactNode, header?: string}) {
  return (
    <div className={`border border-gray-400 dark:border-gray-700 rounded-2xl ${className}`}>
        {header ? <div className='bg-gray-400 dark:bg-gray-700 rounded-t-2xl px-5 py-2 text-lg'>{header}</div> : null}
        <div className={`px-6 py-4`}>
        {children}
        </div>
    </div>
  );
};
