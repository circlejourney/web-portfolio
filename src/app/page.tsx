'use client';

import Image from "next/image";
import Link from "next/link";
import NavButton from "../components/NavButton";
import { useState } from "react";
import ProjectInterface from "../interfaces/ProjectInterface";
import ProjectPanel from "../components/ProjectPanel";
import projectList from "../data/projectList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import Modal from "../components/Modal";
import Lightbox from "../components/Lightbox";
import ImageInterface from "../interfaces/ImageInterface";
import AllProjects from "../components/AllProjects";
import About from "../sections/About";
import Contact from "../sections/Contact";
import Projects from "../sections/Projects";
import Home from "../sections/Home";

export default function App() {
  
  const [project, setProject] = useState<ProjectInterface|null>(null);
  const [viewingImage, setViewingImage] = useState<ImageInterface|null>(null);
  const [projectListOpen, setProjectListOpen] = useState<boolean>(false);
  const highlightProjects = projectList.filter(project => project.highlight);

  return (
      <main className="flex w-full flex-col md:flex-row items-stretch justify-between md:items-start text-gray-700 dark:text-gray-300">

        <div className="md:sticky md:top-0 w-auto md:w-1/4 md:h-screen py-8 mx-9 md:mr-0 text-center">
          
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

              <h1 className="w-full text-gray-900 dark:text-gray-100 mb-4">
                <span className="text-4xl font-bold inline-block tracking-wide uppercase text-header">
                  Amari Low
                </span>
                <span className="text-lg inline-block font-medium">
                  (Also known as Circlejourney)
                </span>
              </h1>
              
              <div className="mb-5">
                Full stack web developer specialising in creative and research-centred websites
              </div>


              <div className="flex md:flex-col flex-wrap gap-2 mt-4 justify-center text-center">
                <NavButton href="#home" handleClick={smoothScroll}>Home</NavButton>
                <NavButton href="#projects" handleClick={smoothScroll}>Projects</NavButton>
                <NavButton href="#about" handleClick={smoothScroll}>About Me</NavButton>
                <NavButton href="#contact" handleClick={smoothScroll}>Contact</NavButton>
              </div>
              
              <div className="mt-4 text-xl">
                <span className="mr-2">Find me at</span>
                <Link href="https://www.linkedin.com/in/amari-l-29494b87/"><FontAwesomeIcon icon={faLinkedin}/></Link>
                <Link href="https://github.com/circlejourney"><FontAwesomeIcon icon={faGithub} /></Link>
                <Link href="https://circlejourney.net"><FontAwesomeIcon icon={faHouse}/></Link>
              </div>

            </div>

            <div className="text-sm text-gray-600 dark:text-gray-400 pt-3 text-center">
              Website created with React.js, Next.js and TailwindCSS
            </div>
          </nav>

        </div>
        
        <div id="scrollable" className="px-6 md:py-10 md:pl-20 md:pr-30 w-full md:w-3/4">
          
          <Home />
          
          <Projects highlightProjects={highlightProjects} setProject={setProject} setProjectListOpen={setProjectListOpen} />
          
          <About />
          
          <Contact/>

        </div>
        
        <Modal open={projectListOpen} closeCallback={()=>setProjectListOpen(false)}>
          <AllProjects projectList={projectList} />
        </Modal>
        
        <Modal open={project !== null} closeCallback={()=>setProject(null)}>
          {project ? <ProjectPanel project={project} setViewingImage={setViewingImage} /> : null}
        </Modal>

        <Lightbox open={viewingImage !== null} imageData={viewingImage} setViewingImage={setViewingImage}/>

      </main>
  );
    
  function smoothScroll(href: string) {
    const element = document.querySelector(href) as HTMLElement;
    if (element && parent) {
      scrollTo({
        top: element.offsetTop - 50,
        behavior: 'smooth',
      })
    }
  }
}
