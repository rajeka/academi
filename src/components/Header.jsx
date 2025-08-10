import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from '@fortawesome/free-brands-svg-icons';

// import useScrollHeader from '../hooks/useScrollHeader';
import { Link } from 'react-router-dom';

const socials = [
  {
    icon: faEnvelope,
    url: 'mailto: rpekanayake@gmail.com',
  },
  {
    icon: faGithub,
    url: 'https://github.com/rajeka',
  },
  {
    icon: faLinkedin,
    url: 'https://www.linkedin.com/in/rpekanayake',
  },
  {
    icon: faMedium,
    url: 'https://medium.com',
  },
  {
    icon: faStackOverflow,
    url: 'https://stackoverflow.com',
  },
];

const Header = () => {
  return (
    <div className="top-0 left-0 transform">
      <div className="flex items-center justify-between text-zinc-200">
        <nav className="flex gap-2 p-2">
          <Link to="/">
            <img
              src="/logo.png"
              alt="Home logo"
              className="w-[60px] h-[60px] border-2 border-sky-400 rounded-full"
              title="AcademiFlow.com"
            />
          </Link>
          <ul className="nav-links flex justify-between items-center gap-2 ">
            {
              /* Add social media links based on the `socials` data */
              socials.map((l, index) => (
                <li
                  key={index}
                  className="hover:text-sky-500 transition-colors ease-in-out"
                >
                  <a href={l.url} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={l.icon} size="xl" />
                  </a>
                </li>
              ))
            }
          </ul>
        </nav>

        <nav className="max-w-full mr-5">
          {/* Add links to Projects and Contact me section */}
          <ul className="nav-links flex justify-between items-center gap-2 mx-3 ">
            <li className="hover:text-sky-500 transition-colors ease-in-out">
              <Link to="/projects">Projects</Link>
            </li>
            <li className="hover:text-sky-500 transition-colors ease-in-out">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
export default Header;
