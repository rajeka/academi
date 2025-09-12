import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ title, description, imageSrc, url }) => {
  const win_target = url.includes('construction') ? '_self' : '_blank';

  return (
    <div className="h-[360px] w-110 bg-zinc-50 rounded-2xl">
      <img
        src={imageSrc}
        alt=""
        className="object-fill rounded-2xl h-48 w-110"
      />
      <div className="font-bold mt-3 ml-3 mb-1 text-black">{title}</div>
      <div className="text-m text-gray-800 ml-3 mb-2 flex flex-1">
        {description}
      </div>
      <span className="mb-2">
        <Link
          to={url}
          target={win_target}
          className="text-zinc-800 text-sm ml-2.5  hover:text-sky-500 transition-colors ease-in-out"
        >
          <span className="pr-2.5 font-semibold">See more</span>
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </Link>
      </span>
    </div>
  );
};

export default Card;
