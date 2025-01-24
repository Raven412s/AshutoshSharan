import React from "react";

import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";
import Image from "next/image";

const Experience = () => {
  return (
    <div className="py-20 w-full">
      <h1 className="heading">
        My <span className="text-purple">work experience</span>
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: "calc(1.75rem * 0.96)",
            }}
            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-4">
              {/* Thumbnail */}
              {card.thumbnail && (
                <Image
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  src={card.thumbnail}
                  alt="Experience thumbnail"
                  className="lg:w-32 md:w-20 w-16"
                />
              )}

              <div className="lg:ms-5">
                {/* Title */}
                <h1 className="text-start text-xl md:text-2xl font-bold">
                  {card.title}
                </h1>

                {/* Company and Time Period */}
                {card.company && card.timePeriod && (
                  <p className="text-start text-sm text-gray-400 mt-2">
                    <span className="font-semibold text-white">
                      {card.company}
                    </span>{" "}
                    | {card.timePeriod}
                  </p>
                )}

                {/* Description */}
                {card.desc && (
                  <p className="text-start text-white-100 mt-3 font-semibold">
                    {card.desc}
                  </p>
                )}

                {/* Key Services */}
                {card.keyServices && card.keyServices.length > 0 && (
                  <ul className="text-start text-sm text-gray-400 mt-2 list-disc list-inside">
                    {card.keyServices.map((service, index) => (
                      <li key={index}>{service}</li>
                    ))}
                  </ul>
                )}

                {/* Tech Stack */}
                {card.techStack && card.techStack.length > 0 && (
                  <div className="text-start text-sm text-gray-400 mt-4 flex flex-wrap gap-2">
                    {card.techStack.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-gray-800 text-white px-3 py-1 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                {/* Icons */}
                {card.iconLists && card.iconLists.length > 0 && (
                  <div className="flex items-center mt-4">
                    {card.iconLists.map((icon, index) => (
                      <div
                        key={index}
                        className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                        style={{
                          transform: `translateX(-${5 * index + 2}px)`,
                        }}
                      >
                        <Image fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"  src={icon} alt={`icon-${index}`} className="p-2" />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;
