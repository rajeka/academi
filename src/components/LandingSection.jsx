import React from "react";
import { Link } from "react-router-dom";

const greeting = "Hello, I am Ranjan Ekanayake!";

const LandingSection = () => (
  <div className="z-0 bg-[#2A4365] h-[84vh] flex flex-col items-center justify-center">
    <section className="flex flex-col justify-center items-center">
      <img
        src="/myself.jpeg"
        alt="Your Avatar"
        className="md:w-[180px] md:h-[180px] md:rounded-b-full mt-5 md:border-4 border-[#61dafb] shadow-md w-[100px] h-[100px] rounded-full"
      />
      <p className="text-xl text-zinc-300 m-5">{greeting}</p>
    </section>
    <section className="z-0 bg-zinc-200 text-zinc-700 min-w-auto rounded-lg max-w-[900px] flex flex-col items-center justify-center shadow-[2px_4px_8px_rgba(0,0,0,0.25)]">
      <div className="mt-2 font-bold text-3xl pt-2 text-sky-900">
        <h1>A Fullstack Engineer</h1>
      </div>
      <div>
        <article className="px-3 leading-normal tracking-normal text-sm">
          <p className="mb-1">
            I'm a Full Stack Software Engineer with over 10 years of experience
            crafting responsive, secure enterprise applications that solve real
            business problems.
          </p>
          <p className="my-1">
            I specialize in modern JavaScript and TypeScript ecosystems—building
            with React, Next.js, and Angular on the frontend, while architecting
            robust APIs and backend systems in Python and Java. My database
            expertise spans both relational (PostgreSQL, MySQL) and NoSQL
            (MongoDB) solutions, allowing me to choose the right tool for each
            challenge.
          </p>
          <p className="my-1">
            Recently, I've been integrating AI capabilities into full-stack
            applications, exploring how machine learning can enhance user
            experiences and business outcomes.
          </p>
          <p>
            Whether you need a frontend specialist, backend engineer, or
            full-stack engineer, I bring both the technical depth and practical
            experience to drive your projects forward. Please refer to my
            attached resume for further details.
          </p>
        </article>
      </div>
      <p className="mb-2 pb-1 font-bold rounded-2xl px-5 text-sky-700 hover:bg-zinc-500 hover:text-sky-500 transition-colors ease-in-out">
        <Link to="/my_profile.pdf" target="_blank">
          My Resume
        </Link>
      </p>
    </section>
  </div>
);

export default LandingSection;
