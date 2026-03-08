import Link from "next/link";
import React from "react";

export default function NavButton({href, handleClick, children} : {href: string, handleClick: CallableFunction, children: React.ReactNode}) {
    return (<Link onClick={(e)=>{ e.preventDefault(); handleClick(href); }} className="transition-colors duration-100 nav-button bg-linear-to-r from-[#b9cad0] to-[#c9d7dd] dark:from-[#223f52] dark:to-[#24506B] hover:dark:to-cyan-500 hover:to-[#c6dee7] hover:dark:from-[#24506B] rounded-sm p-1 md:p-2 shadow-sm" href={href}>
        {children}
    </Link>);
    
}