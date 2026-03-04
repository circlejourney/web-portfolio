import Project from "../interfaces/ProjectInterface";
import { Dispatch, SetStateAction } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import Gallery from "./Gallery";
import InlineHeaderContent from "./InlineHeaderContent";
import ImageInterface from "../interfaces/ImageInterface";
import BorderCard from "./BorderCard";
import Image from "next/image";
import StatBar from "./StatBar";

export default function ProjectPanel({project, setViewingImage}: {
    project: Project,
    setViewingImage: Dispatch<SetStateAction<ImageInterface | null>>
}) {
    return (<div className="py-4 px-12">
        <div className="mb-4 text-center flex flex-col md:flex-row justify-between items-center">
            <h2 className="mb-2 bg-foreground rounded-xl px-4 py-2 inline-block mr-3">
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

            <div className="mb-4 text-slate-600 dark:text-slate-400 md:max-w-1/2 md:text-right">
                {project.short_description}
                {project.stats ? <div className="mt-2"><StatBar stats={project.stats}/></div> : null}
            </div>
        </div>

        <div className="mb-4">
            <div className="p-3 bg-gray-400 dark:bg-gray-600 rounded-xl">
                <Image src={project.gallery[0].src} alt={project.gallery[0].alt} width={900} height={556} className="rounded-2xl mx-auto shadow-md"/>
            </div>
        </div>

        <div className="flex flex-col md:flex-row gap-1 mb-6">
            <BorderCard className="grow md:basis-0 text-center md:text-left">
                <InlineHeaderContent header="Position">{project.position}</InlineHeaderContent>
            </BorderCard>

            <BorderCard className="grow md:basis-0 text-center md:text-left">
                <InlineHeaderContent header="Skills">
                    {project.skills}
                </InlineHeaderContent>
            </BorderCard>

            { project.client ? 
            <BorderCard className="grow md:basis-0 text-center md:text-left">
                <InlineHeaderContent header="Company">
                    {project.client}
                </InlineHeaderContent>
            </BorderCard>
            : null }
        </div>

        <div className="font-light mb-4 text-lg">
            {project.description}
        </div>
        
        {
            project.gallery.length > 1 ?
            <div className="text-center mb-4">
                <Gallery images={project.gallery.slice(1)} setViewingImage={setViewingImage} />
            </div>
            : null
        }
        </div>);
}