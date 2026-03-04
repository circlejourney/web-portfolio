import Project from "../interfaces/ProjectInterface";
import { Dispatch, SetStateAction } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import Gallery from "./Gallery";
import InlineHeaderContent from "./InlineHeaderContent";
import ImageInterface from "../interfaces/ImageInterface";
import BorderCard from "./BorderCard";

export default function ProjectPanel({project, setViewingImage}: {
    project: Project,
    setViewingImage: Dispatch<SetStateAction<ImageInterface | null>>
}) {
    return (<>
            <div className="mb-4 text-center">
                <h2 className="mb-2 bg-foreground rounded-xl p-2 inline-block mr-3">
                    <span className="text-4xl text-accent">
                        {project.title}
                    </span>
                    <a href={project.url} target="cj-project">
                        <span className="text-2xl text-[#d8874a] align-top">
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="ms-2"/>
                        </span>
                    </a>
                </h2>
                
                <div className="text-xl mb-1">
                </div>

                <div className="mb-4">
                    {project.short_description}
                </div>
            </div>
            
            <div className="text-center mb-4">
                <Gallery images={project.gallery} setViewingImage={setViewingImage} />
            </div>

            <div className="flex gap-1">
                <BorderCard className="grow basis-0">
                    <InlineHeaderContent header="Position">{project.position}</InlineHeaderContent>
                </BorderCard>

                <BorderCard className="grow basis-0">
                    <InlineHeaderContent header="Skills">
                        {project.skills}
                    </InlineHeaderContent>
                </BorderCard>

                { project.client ? 
                <BorderCard className="grow basis-0">
                    <InlineHeaderContent header="Client">
                        {project.client}
                    </InlineHeaderContent>
                </BorderCard>
                : null }
            </div>

            <div className="font-light mt-6">
                {project.description}
            </div>
        </>);
}