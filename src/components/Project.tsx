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
    return (<div className="bg-linear-to-r from-[#24506B] to-cyan-600 hover:to-cyan-900 hover:bg-linear-65 rounded-2xl p-4 shadow-lg transition-normal transition-colors duration-200 flex flex-row items-center gap-4 group" key={project.title}>
        <Image width={100} height={62} src={project.thumbnail_src} alt={project.thumbnail_alt} unoptimized={true}/>
        <h3 className="text-3xl sm:w-400">
            <a href="#" onClick={(e)=>{e.preventDefault(); setProject(project)}} className="cursor-pointer">
                {project.title}
                <FontAwesomeIcon className="align-middle ml-2" icon={faEye}/>
            </a>
        </h3>
        <div className="w-0 text-mist-50 group-hover:w-full group-hover:sm:w-3/5 truncate transition-all duration-200 text-right">
            {project.description}
        </div>
    </div>);
}