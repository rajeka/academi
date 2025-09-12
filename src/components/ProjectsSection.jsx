import React from 'react';
import FullScreenSection from './FullScreenSection';
import Card from './Card';

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
    title: 'My Store',
    description:
      'My Store is a full-featured e-commerce application where consumers can browse and purchase products, while administrators have complete control over managing the store.\n  A full-featured shopping platform with reviews, PayPal and Stripe integration, email receipts and more.\n',
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
            {projects.map((project, index) => (
              <Card
                key={index}
                title={project.title}
                description={project.description}
                imageSrc={project.getImageSrc()}
                url={project.url}
              />
            ))}
          </div>
        </div>
      </FullScreenSection>
    </>
  );
};

export default ProjectsSection;
