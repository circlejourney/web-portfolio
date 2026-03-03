import Project from "../interfaces/ProjectInterface";
import { Dispatch, SetStateAction } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import Gallery from "./Gallery";
import InlineHeaderContent from "./InlineHeaderContent";
import ImageInterface from "../interfaces/ImageInterface";

export default function ProjectPanel({project, setViewingImage}: {
    project: Project,
    setViewingImage: Dispatch<SetStateAction<ImageInterface | null>>
}) {
    return (<>
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
                <Gallery images={project.gallery} setViewingImage={setViewingImage} />
            </div>

            <div className="font-light mt-6">
                {project.description}
            </div>
        </>);
}