import Link from "next/link";
import React from "react";

export default function NavButton({href, ref, handleClick, children} : {href: string, ref: string, handleClick: CallableFunction, children: React.ReactNode}) {
    return (<Link onClick={(e)=>{ e.preventDefault(); handleClick(ref); }} className="rounded-sm bg-accent p-2 shadow-sm" href={href}>
        {children}
    </Link>);
    
}