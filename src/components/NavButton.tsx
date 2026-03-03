import Link from "next/link";
import React from "react";

export default function NavButton({href, handleClick, children} : {href: string, handleClick: CallableFunction, children: React.ReactNode}) {
    return (<Link onClick={(e)=>{ e.preventDefault(); handleClick(href); }} className="rounded-sm bg-accent p-2 shadow-sm" href={href}>
        {children}
    </Link>);
    
}