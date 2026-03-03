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
import { faArrowUpRightFromSquare, faHouse, faRectangleList } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import Header from "../components/Header";
import BorderCard from "../components/BorderCard";
import Modal from "../components/Modal";
import Lightbox from "../components/Lightbox";
import ImageInterface from "../interfaces/ImageInterface";

export default function Home() {
  
  const [project, setProject] = useState<ProjectInterface|null>(null);
  const [viewingImage, setViewingImage] = useState<ImageInterface|null>(null);

  return (
      <main className="flex h-screen w-full flex-col md:flex-row items-stretch justify-between md:items-start text-gray-700 dark:text-gray-300">

        <div className="w-auto md:w-1/4 md:h-screen py-8 mx-9 md:mr-0 text-center">
          
          <nav id="sidebar" className="h-full w-full p-6 flex flex-col justify-between rounded-top-5xl rounded-3xl shadow-xl">
            <div>
              <Image
                src="/cj.svg"
                alt="Circlejourney's logo"
                width={100}
                height={20}
                priority
                className="inline-block"
              />

              <h1 className="font-medium leading-10 tracking-tight w-full text-gray-900 dark:text-gray-100">
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
                <NavButton href="#home" handleClick={smoothScroll}>Home</NavButton>
                <NavButton href="#projects" handleClick={smoothScroll}>Projects</NavButton>
              </div>
              
              <div className="mt-4 text-xl">
                <span className="mr-2">Find me at</span>
                <Link href="https://www.linkedin.com/in/amari-l-29494b87/"><FontAwesomeIcon icon={faLinkedin}/></Link>
                <Link href="https://github.com/circlejourney"><FontAwesomeIcon icon={faGithub} /></Link>
                <Link href="https://circlejourney.net"><FontAwesomeIcon icon={faHouse}/></Link>
              </div>

            </div>

            <div className="text-sm text-gray-600 dark:text-gray-500 pt-3 text-center">
              Website created with React.JS, Next.JS and Tailwind CSS
            </div>
          </nav>

        </div>
        
        <div id="scrollable" className="md:h-screen md:overflow-y-auto md:py-10 pl-20 pr-30 xs:w-full md:w-3/4 text-[16px]/10">

          <div id="home" className="font-normal md:flex-row my-15">
            
            <Header icon={faHouse} header={"Home"}/>
            
            <div>
              <p className="font-light">
                I&apos;m Amari, a full stack web developer who loves making visually appealing, creativity-oriented and informative websites.
                Currently, I am a contract-based web developer at <Link href="https://artfight.net" target="_blank">Art Fight <FontAwesomeIcon icon={faArrowUpRightFromSquare}/></Link>, where I design, develop and maintain new features for more than 600,000 users. I am also the founder and solo web developer of <Link href="https://chicken.pet" target="_blank">ChickenPet <FontAwesomeIcon icon={faArrowUpRightFromSquare}/></Link>, a game website with 1,500 players, featuring trading, forums, and raffle mechanics.
              </p>

              <BorderCard>
                <h3 className="text-2xl">
                  Skills
                </h3>

                <ul className="list-disc list-inside font-light">
                  <li>
                    <span className="font-semibold">5+ years&apos; experience</span> in PHP, MySQL, JavaScript, HTML, and CSS
                  </li>
                  <li>
                    <span className="font-semibold">2 years&apos; experience</span> in Laravel, Typescript, React.JS, and Next.JS
                  </li>
                  <li>
                    <span className="font-semibold">Research-backed, user-centred design:</span> I&apos;ve conducted PhD research into improving interaction design practices for affective connection.
                  </li>
                  <li>
                    <span className="font-semibold">Leadership and project management skills:</span> I have experience coordinating research, user-testing, and projects with complex goals and deliverables.
                  </li>
                  <li>
                    <span className="font-semibold">Motivated independent learner:</span> As a self-taught web developer, I&apos;m confident upskilling and learning frameworks independently with minimal guidance.
                  </li>
                </ul>
              </BorderCard>
              
            </div>

          </div>

          
          <div id="projects" className="font-normal md:flex-row my-15">
            <Header icon={faRectangleList} header={"Projects"}/>
            
            <div className="py-4 flex flex-col gap-4">
              {projectList.map((project) => <Project project={project} setProject={setProject} key={project.title}/>)}
            </div>
          </div>

        </div>
        
        <Modal open={project !== null} closeCallback={setProject}>
          {project ? <ProjectPanel project={project} setViewingImage={setViewingImage} /> : null}
        </Modal>

        <Lightbox open={viewingImage !== null} imageData={viewingImage} setViewingImage={setViewingImage}/>

      </main>
  );
    
  function smoothScroll(href: string) {
    const element = document.querySelector(href) as HTMLElement;
    const parent = element?.closest('#scrollable');
    if (element && parent) {
      parent.scrollTo({
        top: element.offsetTop - 50,
        behavior: 'smooth',
      })
    }
  }
}
