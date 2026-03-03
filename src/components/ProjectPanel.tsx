import Image from "next/image";
import Project from "../interfaces/ProjectInterface";
import { Dispatch, SetStateAction } from "react";
import ProjectInterface from "../interfaces/ProjectInterface";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import Gallery from "./Gallery";

export default function ProjectPanel({project, setProject}: {
    project: Project,
    setProject: Dispatch<SetStateAction<ProjectInterface | null>>
}) {
    return (<>
            <button onClick={()=>setProject(null)} className="fixed top-14 right-14 cursor-pointer">
                <FontAwesomeIcon icon={faTimes}/>
            </button>
            
            <div className="text-center">
                <Gallery images={project.gallery} />
            </div>

            <h2 className="text-2xl mt-4">
                <a href={project.url} target="cj-project">
                    {project.title}
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="ms-2"/>
                </a>
            </h2>
            <div className="font-light">
                {project.description}
            </div>
        </>);
}