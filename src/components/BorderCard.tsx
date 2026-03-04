import React from 'react';

export default function BorderCard({ className, children, header } : {className?: string, children: React.ReactNode, header?: string}) {
  return (
    <div className={`flex flex-col border overflow-hidden border-slate-400 dark:border-slate-500 rounded-2xl ${className || null}`}>
        {header ? <div className='border-b border-slate-400 dark:border-slate-500 px-5 py-2 text-lg'>{header}</div> : null}
        <div className="px-6 py-4 grow flex items-center">
          <div>
            {children}
          </div>
        </div>
    </div>
  );
};
