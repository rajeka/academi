import FullScreenSection from './FullScreenSection';
import { Link } from 'react-router-dom';

const message = 'Coming soon...';

export default function Construction() {
  return (
    <FullScreenSection
      isDarkBackground
      className="bg-sky-800 min-w-auto max-w-full flex items-center justify-center h-[84vh]"
    >
      <div className="flex flex-col justify-around ">
        <img
          src="/construction.jpeg"
          alt="Page under construction"
          className="w-[350px] h-[200px] rounded-2xl border-5 border-sky-500"
        />
        <p className="p-4">{message}</p>
        <Link
          to="/projects"
          className="text-zinc-300 hover:text-sky-500 translate-1 p-4"
        >
          Go Back
        </Link>
      </div>
    </FullScreenSection>
  );
}
