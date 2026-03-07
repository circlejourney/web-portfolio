import Image from "next/image";
import ProjectInterface from "../interfaces/ProjectInterface";
import BorderCard from "./BorderCard";
import Project from "./Project";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import StatBar from "./StatBar";
import { UnderlineBadge } from "./Badge";
import Link from "next/link";

export default function AllProjects({projectList}: { projectList: ProjectInterface[] }) {
    return (<div className="py-4 flex flex-wrap justify-center gap-4">
        { projectList.map( project => <BorderCard className="w-3/7" itemsCenter={false} key={project.title}>
            <div className="flex flex-row items-center flex-wrap gap-3">
                <Image className="inline-block order-1" width={100} height={62} src={project.thumbnail_src} alt={project.thumbnail_alt} unoptimized={true}/>
                <h3 className="text-2xl order-2 wrap-break-word">
                    <Link href={project.url} target="project">
                        {project.title} <span className="align-super text-base">
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                        </span>
                    </Link>
                </h3>
                <div className="text-gray-700 dark:text-gray-300 opacity-80 grow order-4 lg:order-3">
                    {project.position}
                </div>
            </div>
            <div className="text-gray-900 dark:text-gray-50 text-sm mt-2 opacity-100 group-hover:opacity-80 transition-all duration-200">
                {project.short_description}
            </div>
            <div className="font-light text-gray-700 dark:text-gray-300 mt-4">
                {project.stats ? <StatBar stats={project.stats}/> : null}
                {project.skills.split(/,\s*/).map( skill => <UnderlineBadge className="mr-2" key={skill}>{skill}</UnderlineBadge> )}
            </div>
        </BorderCard>) }
    </div>)
}