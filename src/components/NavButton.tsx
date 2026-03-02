import Link from "next/link";
import React from "react";

export default function NavButton({href, children} : {href: string, children: React.ReactNode}) {
    return (<Link className="rounded-sm bg-accent p-2" href={href}>{children}</Link>);
}