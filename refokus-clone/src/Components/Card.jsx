import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
function Card({ card }) {
  return (
    <div
      className={`w-[${card.width}] hover:bg-violet-500 duration-400 delay-75 hover:px-6 mx-auto rounded-lg py-4 px-5 bg-zinc-700`}
    >
      <div className="h-full flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-center">
            <h2 className="text-sm uppercase">{card.title}</h2>
            <IoIosArrowRoundForward className="text-2xl" />
          </div>
          <h1 className="text-2xl w-1/3 mt-5 font-medium">{card.detail}</h1>
        </div>
        <div className="mt-20">
          {card.startProject && (
            <>
             
              <h1 className="text-7xl font-semibold">Start a Project.</h1>
              <button className="px-5 mt-4 py-2 border-1 rounded-full">
                Contact
              </button>
            </>
          )}
        </div>
        {card.para && (
          <p className="text-sm mt-2 text-zinc-400">
            Branding, Web Design, Webflow, Creative Development
          </p>
        )}
      </div>
    </div>
  );
}

export default Card;
