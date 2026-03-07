import { MouseEventHandler, ReactNode } from "react";

export default function ProjectCard({onClick, className, children}: {onClick?: MouseEventHandler, className?: string, children: ReactNode}) {
    return <button onClick={onClick} className={`project-card text-link cursor-pointer flex justify-between h-full bg-linear-to-r from-[#b9cad0] to-[#c9d7dd] dark:from-[#24506B] dark:to-cyan-600 hover:dark:to-cyan-500 hover:from-[#c6dee7] hover:dark:from-[#24506B] hover:bg-linear-65 rounded-2xl p-4 shadow-lg transition-normal transition-colors duration-200 group ${className}`}>
        {children}
    </button>;
}