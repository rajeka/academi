import React from 'react';
import FullScreenSection from './FullScreenSection';
//import { Box, Heading } from '@chakra-ui/react';
import Card from './Card';
// import photo1 from '../assets/images/photo1.jpg';
const projects = [
  {
    title: 'AI Content Generator',
    description:
      'Create AI powered content generator for varied options. \n Integrated with Google Gemini AI, and buidl with Tailwind CSS, Shadcn UI with Mongo DB',
    getImageSrc: () => '/images/photo1.jpg',
    url: 'https://ai-gen-app-beta.vercel.app',
  },
  {
    title: 'Next.Js/React Cash App',
    description:
      'App allows to manage your transactions with income and expenses. Build with NextJs/React, Typescript, Tailwind CSS, Shadcn UI, Drizzle ORM, and PostgreSQL with Neon',
    getImageSrc: () => '/images/photo2.jpg',
    url: 'https://cash-app-murex.vercel.app',
  },
  {
    title: 'Photo Gallery',
    description:
      'A One-stop shop for photographers to share and monetize their photos, allowing them to have a second source of income',
    getImageSrc: () => '/images/photo3.jpg',
    url: '/construction',
  },
  {
    title: 'Event planner',
    description:
      'A mobile application for leisure seekers to discover unique events and activities in their city with a few taps',
    getImageSrc: () => '/images/photo4.jpg',
    url: '/construction',
  },
];

const ProjectsSection = () => {
  return (
    <>
      <span id="projects-section" />

      <FullScreenSection
        isDarkBackground
        className="bg-[#14532d] min-w-auto max-w-full flex items-center justify-center"
      >
        <div className="flex flex-col items-start mt-0 p-2 justify-around">
          <div className="font-bold text-2xl pb-2">Featured Projects</div>
          <div className="grid gap-6 grid-cols-2">
            {/* <div>Column 1 Content</div>
            <div>Column 2 Content</div> */}

            {projects.map((project, index) => (
              <Card
                key={index}
                title={project.title}
                description={project.description}
                imageSrc={project.getImageSrc()}
                url={project.url}
              />

              // <div key={project.url}>
              //   <div className="text-l m-3 text-zinc-200">{project.title}</div>
              //   <img src={photo1} width="250" alt="" />

              //   <div className="text-m text-gray-200 m-3 flex flex-1">
              //     {project.description}
              //   </div>
              // </div>
              // {const imageSrc = project.getImageSrc();}
            ))}
          </div>
        </div>
      </FullScreenSection>
    </>
  );
};

export default ProjectsSection;
