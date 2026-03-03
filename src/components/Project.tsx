'use client';

import Image from "next/image";
import React, { Dispatch, SetStateAction } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import ProjectInterface from "../interfaces/ProjectInterface";

export default function Project ({project, setProject}: {
    project: ProjectInterface,
    setProject: Dispatch<SetStateAction<ProjectInterface | null>>
}) {
    return (<a href="#" onClick={(e)=>{e.preventDefault(); setProject(project)}} className="block h-full bg-linear-to-r from-[#24506B] to-cyan-600 hover:to-cyan-900 hover:bg-linear-65 rounded-2xl p-4 shadow-lg transition-normal transition-colors duration-200 group">
        <div className="flex flex-row items-center gap-3">
            <Image className="inline-block" width={100} height={62} src={project.thumbnail_src} alt={project.thumbnail_alt} unoptimized={true}/>
            <h3 className="text-3xl">
                <span className="project-link">
                    {project.title}
                </span>
            </h3>
            <span className="text-gray-400 grow">
                {project.position}
            </span>
            <span className="text-gray-200 text-2xl">
                <FontAwesomeIcon className="align-middle ml-2" icon={faEye}/>
            </span>
        </div>
        <div className="text-mist-50 text-sm mt-2 opacity-100 group-hover:opacity-80 transition-all duration-200">
            {project.short_description}
        </div>
    </a>);
}