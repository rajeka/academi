import React from 'react';
import { Link } from 'react-router-dom';
import FullScreenSection from './FullScreenSection';

const greeting = 'Hello, I am Ranjan Ekanayake!';
const bio1 = 'A Fullstack Engineer';
const bio2 =
  'I am a seasoned Full Stack Software Engineer with over 10 years of experience.\n \
    I have deep expertise in building responsive, secure fullstack web applications using modern JavaScript frameworks such as React and Angular, along with backend development in Python and Java.\n \
     I’ve worked extensively with both relational databases (e.g., PostgreSQL, MySQL) and NoSQL databases (e.g., MongoDB, Cassandra).\n \
    My background combines full-stack development, a strong front-end focus, and a proven ability to deliver scalable, secure solutions. These strengths make me a strong fit for any fullstack position.';

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <div className="bg-[#2A4365] h-[84vh] flex flex-col items-center justify-center">
    <section className="flex flex-col justify-center items-center">
      <img
        src="/myself.jpeg"
        alt="Your Avatar"
        className="w-[180px] h-[180px] rounded-b-full mt-5 border-4 border-[#61dafb] shadow-md"
      />
      <p className="text-xl text-zinc-300 m-5">{greeting}</p>
    </section>
    <section className="bg-zinc-200 text-zinc-700 min-w-auto rounded-lg max-w-[700px] flex flex-col items-center justify-center">
      <div className="mt-2 font-bold text-3xl pt-2 text-sky-900">{bio1}</div>
      <div className="p-3 leading-relaxed tracking-wide ">{bio2}</div>
      <p className="mb-3 py-1 font-bold rounded-2xl px-5 text-sky-700 hover:bg-zinc-500 hover:text-sky-500 transition-colors ease-in-out">
        <Link to="/my_profile.pdf" target="_blank">
          My Resume
        </Link>
      </p>
    </section>
  </div>
);

export default LandingSection;
