import React from "react";

export default function InlineHeaderContent({ header, children }: {header: string, children: React.ReactNode}) {
    return (<><b>{header}</b> | <span className="light">{children}</span></>);
}