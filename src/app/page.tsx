'use client';

import Image from "next/image";
import Link from "next/link";
import Project from "../components/Project";
import NavButton from "../components/NavButton";
import { useState } from "react";
import ProjectInterface from "../interfaces/ProjectInterface";
import ProjectPanel from "../components/ProjectPanel";
import projectList from "../data/projectList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare, faHouse, faList } from "@fortawesome/free-solid-svg-icons";
import Header from "../components/Header";

export default function Home() {
  
  const [project, setProject] = useState<ProjectInterface|null>(null);

  return (
      <main className="flex h-screen w-full flex-col md:flex-row items-stretch justify-between md:items-start">

        <div className="w-auto md:w-1/4 md:h-screen py-8 mx-9 md:mr-0 text-center">
          
          <div id="sidebar" className="h-full w-full p-6 flex flex-col justify-between rounded-top-5xl rounded-3xl shadow-lg">
            <div>
              <Image
                src="/cj.svg"
                alt="Circlejourney's logo"
                width={100}
                height={20}
                priority
                className="inline-block"
              />

              <h1 className="font-medium leading-10 tracking-tight w-full">
                <span className="text-3xl mr-2 inline-block">
                  Amari Low
                </span>
                <span className="text-lg inline-block">
                  (Circlejourney)
                </span>
              </h1>
              
              <p>
                Full stack web developer specialising in playful, creative, and research-centred websites
              </p>


              <div className="flex md:flex-col gap-2 mt-4 justify-center text-center">
                <NavButton href="#home" ref="home" handleClick={smoothScroll}>Home</NavButton>
                <NavButton href="#projects" ref="projects" handleClick={smoothScroll}>Projects</NavButton>
              </div>

            </div>

            <div className="text-sm text-gray-500 pt-3 text-center">
              Website created with React.JS, Next.JS and Tailwind CSS
            </div>
          </div>

        </div>
        
        <div id="scrollable" className="md:h-screen md:overflow-y-auto md:py-10 pl-20 pr-30 xs:w-full md:w-3/4 text-lg/10">

          <div id="home" className="font-normal md:flex-row my-15">
            
            <Header icon={faHouse} header={"Home"}/>
            
            <div>
              <p className="font-light text-gray-300">
                I'm Amari, a full stack web developer who specialises in producing visually stunning, creativity-oriented and informative websites.
                Currently, I am a contract-based web developer at <Link href="https://artfight.net">Art Fight <FontAwesomeIcon icon={faArrowUpRightFromSquare}/></Link>, where I design, develop and maintain new features for more than 600,000 users. I am also the founder and solo web developer of <Link href="https://chicken.pet">ChickenPet <FontAwesomeIcon icon={faArrowUpRightFromSquare}/></Link>, a game website with trading, forums, games and daily raffle mechanics.
              </p>

              <div className="my-8 p-8 border border-gray-500 rounded-2xl text-gray-300">
                <p className="text-2xl">
                  Skills
                </p>

                <ul className="list-disc list-inside font-light">
                  <li className="mt-2">
                    <span className="font-semibold">5+ years' experience</span> in PHP, MySQL, JavaScript, HTML, and CSS
                  </li>
                  <li className="mt-2">
                    <span className="font-semibold">2 years' experience</span> in Laravel, Typescript, React.JS, and Next.JS
                  </li>
                  <li className="mt-2">
                    <span className="font-semibold">Research-backed, user-centred design:</span> In my PhD research project, I studied how to improve interaction design practices for affective connection at a distance.
                  </li>
                  <li className="mt-2">
                    <span className="font-semibold">Leadership and project management skills:</span> I am experienced in coordinating research and user-testing, managing projects with complex goals and deliverables, and motivating teams to achieve project objectives.
                  </li>
                  <li className="mt-2">
                    <span className="font-semibold">Motivated independent learner:</span> I am a self-taught web developer who is confident upskilling and learning new frameworks independently with minimal guidance.
                  </li>
                </ul>
              </div>
              
            </div>

          </div>

          
          <div id="projects" className="font-normal md:flex-row my-15">
            
            <Header icon={faList} header={"Projects"}/>

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
    
  function smoothScroll(ref: string) {
    const element = document.getElementById(ref);
    const parent = element?.closest('#scrollable');
    if (element && parent) {
      parent.scrollTo({
        top: element.offsetTop - 50,
        behavior: 'smooth',
      })
    }
  }
}
