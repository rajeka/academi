import { Link } from 'react-router-dom';
import FullScreenSection from './FullScreenSection';
import './common.css';
export default function NotFound() {
  return (
    <FullScreenSection
      isDarkBackground
      className="bg-sky-800 min-w-auto max-w-full flex items-center justify-center h-[84vh]"
    >
      <div className="flex flex-col items-center justify-center gap-5">
        <h1 className="text-4xl">404 - Page Not Found</h1>
        <Link to="/" className="text-zinc-300 hover:text-sky-500">
          Go to Home
        </Link>
      </div>
    </FullScreenSection>
  );
}
