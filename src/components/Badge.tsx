import { ReactNode } from "react";

export default function Badge({className, children}: {className?: string, children: ReactNode}) {
    return <span className={`border-b-1 ${className} py-1`}>{children}</span>;
}