'use client';

import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareArrowUpRight } from '@fortawesome/free-solid-svg-icons';
import ProjectInterface from "../interfaces/ProjectInterface";
import { UnderlineBadge } from "./Badge";
import StatBar from "./StatBar";
import ProjectCard from "./ProjectCard";

export default function Project ({project, setProject}: {
    project: ProjectInterface,
    setProject: Dispatch<SetStateAction<ProjectInterface | null>>
}) {
    return (<ProjectCard onClick={()=>setProject(project)}>
        <div>
            <div className="flex flex-row items-center flex-wrap gap-3">
                <Image className="inline-block order-1" width={100} height={62} src={project.thumbnail_src} alt={project.thumbnail_alt} unoptimized={true}/>
                <h3 className="text-2xl order-2 wrap-break-word">
                    {project.title}
                </h3>
                { project.position ? 
                <div className="text-gray-700 dark:text-gray-300 opacity-80 grow order-4 lg:order-3">
                    {project.position}
                </div> : null }
                { project.created ? 
                <div className="text-gray-700 dark:text-gray-300 opacity-80 grow order-4 lg:order-3">
                    (Initiated in {project.created})
                </div> : null }
            </div>
            <div className="text-gray-900 dark:text-gray-50 text-sm mt-2 opacity-100 group-hover:opacity-80 transition-all duration-200">
                {project.short_description}
            </div>
            <div className="font-light text-gray-700 dark:text-gray-300 mt-4">
                {project.stats ? <StatBar stats={project.stats}/> : null}
                {project.skills.split(/,\s*/).map( skill => <UnderlineBadge className="mr-2" key={skill}>{skill}</UnderlineBadge> )}
            </div>
        </div>
        
        <span className="text-gray-800 dark:text-gray-200 text-2xl mr-2 order-3 lg:order-4 hidden md:block">
            <FontAwesomeIcon className="align-middle ml-2" icon={faSquareArrowUpRight}/>
        </span>
    </ProjectCard>);
}