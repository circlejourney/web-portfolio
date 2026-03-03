import Image from "next/image";
import Project from "../interfaces/ProjectInterface";
import { Dispatch, SetStateAction } from "react";
import ProjectInterface from "../interfaces/ProjectInterface";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import Gallery from "./Gallery";
import InlineHeaderContent from "./InlineHeaderContent";
import BorderCard from "./BorderCard";

export default function ProjectPanel({project, setProject}: {
    project: Project,
    setProject: Dispatch<SetStateAction<ProjectInterface | null>>
}) {
    return (<>
            <button onClick={()=>setProject(null)} className="fixed top-14 right-14 cursor-pointer">
                <FontAwesomeIcon icon={faTimes}/>
            </button>

            <div className="text-center mb-4">
                <h2 className="text-4xl mb-2">
                    {project.title}
                </h2>
                <div className="text-xl mb-1">
                <a href={project.url} target="cj-project">
                    {project.url.replace("https://", "")}
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="ms-2"/>
                </a>
                </div>
                <div>
                    <InlineHeaderContent header="Position">{project.position}</InlineHeaderContent>
                </div>
                <div className="font-light opacity-80">
                    {project.skills}
                </div>
            </div>
            
            <div className="text-center mb-4">
                <Gallery images={project.gallery} />
            </div>

            <div className="font-light mt-6">
                {project.description}
            </div>
        </>);
}