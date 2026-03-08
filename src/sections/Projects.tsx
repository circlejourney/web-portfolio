import { faRectangleList } from "@fortawesome/free-solid-svg-icons";
import Header from "../components/Header";
import projectList from "../data/projectList";
import Project from "../components/Project";
import ProjectCard from "../components/ProjectCard";
import { Dispatch, SetStateAction } from "react";
import ProjectInterface from "../interfaces/ProjectInterface";

export default function Projects({highlightProjects, setProject, setProjectListOpen}: {highlightProjects: ProjectInterface[], setProject: Dispatch<SetStateAction<ProjectInterface|null>>, setProjectListOpen: Dispatch<SetStateAction<boolean>>}) {
    
    return (<div id="projects" className="font-normal md:flex-row my-15">
        <Header icon={faRectangleList} header={"Projects"}/>
        
        <div className="py-4 flex flex-col gap-4">
            {highlightProjects.map((project) => <Project project={project} key={project.title} setProject={setProject} />)}
            <ProjectCard className="text-2xl order-2 wrap-break-word" onClick={()=>setProjectListOpen(true)}>
            View all projects ({projectList.length})
            </ProjectCard>
        </div>
        </div>);
}