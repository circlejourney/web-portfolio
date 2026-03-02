'use client';

import Image from "next/image";
import Link from "next/link";
import Project from "../components/Project";
import NavButton from "../components/NavButton";
import { useState } from "react";
import ProjectInterface from "../interfaces/ProjectInterface";
import ProjectPanel from "../components/ProjectPanel";
import projectList from "../data/projectList";

export default function Home() {
  
  const [project, setProject] = useState<ProjectInterface|null>(null);

  return (
      <main className="flex h-screen w-full flex-col md:flex-row items-stretch justify-between md:items-start">

        <div className="w-full md:w-1/4 md:h-screen py-8 text-center px-6">
          
          <div className="h-full md:border-r-2 border-r-[#24506B] md:pr-6">
            <Image
              src="/cj.svg"
              alt="Circlejourney's logo"
              width={100}
              height={20}
              priority
              className="inline-block"
            />

            <h1 className="font-medium leading-10 tracking-tight w-full">
              <span className="text-3xl mr-3 inline-block">
                Amari Low
              </span>
              <span className="text-lg inline-block">
                (Circlejourney)
              </span>
            </h1>


            <div className="flex md:flex-col gap-2 mt-4 justify-center text-center">
              <NavButton href="#home">Home</NavButton>
              <NavButton href="#projects">Projects</NavButton>
            </div>
          </div>

        </div>
        
        <div className="md:h-screen md:overflow-y-auto p-10 xs:w-full md:w-3/4 text-lg/10">

          <div id="home" className="font-normal md:flex-row my-15">
            
            <h2 className="text-4xl mb-4">Home</h2>
            <div className="text-2xl mb-4">
              Amari Low &bull; full stack developer
            </div>
            
            <div>
              Frameworks: Laravel, React.JS, Next.JS
              <br/>
              Languages and environments: PHP, MySQL, JavaScript, Typescript, HTML, CSS
            </div>

          </div>

          
          <div id="projects" className="font-normal md:flex-row my-15">
            <h2 className="text-4xl mb-4">Projects</h2>
            Here are some projects.
            <div className="py-4">
              {projectList.map((project) => <Project project={project} setProject={setProject}/>)}
            </div>
          </div>

        </div>
        
        <div className={`fixed left-0 px-8 w-screen transition-all duration-400 ${project ? "h-screen py-8 top-0" : "h-0 p-0 top-1/2"}`}>
          <div className={`bg-accent rounded-2xl overflow-y-auto w-full px-8 ${project ? "h-full py-8" : "h-0"} relative transition-all duration-400`}>
            {project ? <ProjectPanel project={project} setProject={setProject} /> : null}
          </div>
        </div>

      </main>
  );
}
