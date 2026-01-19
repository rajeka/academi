import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Link } from "react-router-dom";

const Card = ({ title, description, imageSrc, url }) => {
  const win_target = url.includes("construction") ? "_self" : "_blank";

  return (
    <div className="h-[400px] w-105 bg-zinc-50 rounded-2xl">
      <img
        src={imageSrc}
        alt=""
        className="object-fill rounded-2xl h-48 w-120"
      />
      <div className="font-bold mt-3 ml-3 mb-1 text-black">{title}</div>
      <div className="text-xs tracking-normal text-gray-800 mx-3 mb-1 flex flex-1">
        {description}
      </div>
      <span className="mb-2">
        <Link
          to={url}
          target={win_target}
          className="text-zinc-800 text-sm ml-2.5  hover:text-sky-500 transition-colors ease-in-out"
        >
          <span className="pr-2.5 font-semibold text-xs text-cyan-700">
            See more
          </span>
          <FontAwesomeIcon icon={faArrowRight} size="0.5x" />
        </Link>
      </span>
    </div>
  );
};

export default Card;
