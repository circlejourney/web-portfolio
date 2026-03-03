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
    return (<a href="#" onClick={(e)=>{e.preventDefault(); setProject(project)}} className="block h-full bg-linear-to-r from-[#b9cad0] to-[#c9d7dd] dark:from-[#24506B] dark:to-cyan-600 hover:dark:to-cyan-500 hover:from-[#c6dee7] hover:dark:from-[#24506B] hover:bg-linear-65 rounded-2xl p-4 shadow-lg transition-normal transition-colors duration-200 group">
        <div className="flex flex-row items-center gap-3">
            <Image className="inline-block" width={100} height={62} src={project.thumbnail_src} alt={project.thumbnail_alt} unoptimized={true}/>
            <h3 className="text-3xl">
                {project.title}
            </h3>
            <span className="text-gray-700 dark:text-gray-300 opacity-80 grow">
                {project.position}
            </span>
            <span className="text-gray-800 dark:text-gray-200 text-2xl mr-2">
                <FontAwesomeIcon className="align-middle ml-2" icon={faEye}/>
            </span>
        </div>
        <div className="text-gray-900 dark:text-gray-50 text-sm mt-2 opacity-100 group-hover:opacity-80 transition-all duration-200">
            {project.short_description}
            <br/>
            <span className="font-light text-gray-700 dark:text-gray-300">{project.skills}</span>
        </div>
    </a>);
}