import { ReactNode } from "react";

export function Badge({className, children}: {className?: string, children: ReactNode}) {
    return <span className={`border rounded-md ${className} p-1`}>{children}</span>;
}

export function UnderlineBadge({className, children}: {className?: string, children: ReactNode}) {
    return <span className={`border-b ${className} py-1`}>{children}</span>;
}