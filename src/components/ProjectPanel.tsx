import Image from "next/image";
import Project from "../interfaces/ProjectInterface";
import { Dispatch, SetStateAction } from "react";
import ProjectInterface from "../interfaces/ProjectInterface";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

export default function ProjectPanel({project, setProject}: {
    project: Project,
    setProject: Dispatch<SetStateAction<ProjectInterface | null>>
}) {
    return (<>
            <button onClick={()=>setProject(null)} className="absolute top-5 right-5">
                <FontAwesomeIcon icon={faTimes}/>
            </button>
            
            <div className="text-center">
                <Image width="500" height="350" src={project.thumbnail_src} alt={project.thumbnail_alt} unoptimized={true} />
            </div>

            <h2 className="text-2xl mt-4">
                <a href={project.url} target="cj-project">
                    {project.title}
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="ms-2"/>
                </a>
            </h2>
            <div>
                {project.description}
            </div>
        </>);
}