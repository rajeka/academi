import React from "react";
import { Link } from "react-router-dom";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Ranjan Ekanayake!";

const LandingSection = () => (
  <div className="z-0 bg-[#2A4365] h-[84vh] flex flex-col items-center justify-center">
    <section className="flex flex-col justify-center items-center">
      <img
        src="/myself.jpeg"
        alt="Your Avatar"
        className="w-[180px] h-[180px] rounded-b-full mt-5 border-4 border-[#61dafb] shadow-md"
      />
      <p className="text-xl text-zinc-300 m-5">{greeting}</p>
    </section>
    <section className="z-0 bg-zinc-200 text-zinc-700 min-w-auto rounded-lg max-w-[1100px] flex flex-col items-center justify-center">
      <div className="mt-2 font-bold text-3xl pt-2 text-sky-900">
        <h1>A Fullstack Engineer</h1>
      </div>
      <div>
        <article className="p-3 leading-relaxed tracking-wide">
          <p>
            I am a seasoned Full Stack Software Engineer with over 10 years of
            experience building responsive, secure enterprise applications. My
            expertise includes modern JavaScript, TypeScript using modern
            frameworks such as React, Next.js, and Angular along with API and
            backend development in Python, and Java.
          </p>
          <p>
            I have extensive experience with both relational databases
            (PostgreSQL, MySQL) and NoSQL databases MongoDB. With recent
            hands-on exposure to integrating AI into full stack solutions.
          </p>
          <p>
            I bring a unique combination of technical depth and innovation. I am
            well-suited for front-end, back-end, or full stack roles. Please
            refer to my attached resume for further details.
          </p>
        </article>
      </div>
      <p className="mb-3 pb-1 font-bold rounded-2xl px-5 text-sky-700 hover:bg-zinc-500 hover:text-sky-500 transition-colors ease-in-out">
        <Link to="/my_profile.pdf" target="_blank">
          My Resume
        </Link>
      </p>
    </section>
  </div>
);

export default LandingSection;
