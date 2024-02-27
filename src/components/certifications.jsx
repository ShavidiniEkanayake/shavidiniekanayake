import React, { useEffect, useState } from "react";
import { cn } from "../utils/cn";

export const Certifications = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}) => {
  const certifications = [
    {
      name: "Microsoft Certified: Azure Fundamentals (AZ-900)",
      date: "July 15, 2022",
      image: "./images/microsoft.png",
      style: "sc"
    },
    {
      name: "Postman API Fundamentals Student Expert",
      date: "December 24, 2022",
      image: "./images/postman-student-expert.png",
    },
    {
      name: "Scrum Foundation Professional (SFPC)",
      date: "July 24, 2021",
      image: "./images/scrum.png",
    },
    {
      name: "Oracle Foundations Associate",
      date: "November 22, 2021",
      image: "./images/oracle-cloud.png",
    },
    {
      name: "Remote Work and Virtual Collaboration Professional",
      date: "December 07, 2021",
      image: "./images/rwvcpc.avif",
    },
    {
      name: "Oracle Cloud Data Management Foundations Associate",
      date: "December 05, 2022",
      image: "./images/oracle-cloud-data.png",
    },
  ];

  const containerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  
  useEffect(() => {
    addAnimation();
  }, []);

  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  return (
    <div>
      <div className="container mt-20 mb-10">
        <h1 className="font-Satoshi font-black text-5xl md:text-6xl">
          Certifications
        </h1>
      </div>

      <div
        ref={containerRef}
        className={cn(
          "scroller relative z-20  overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
          className
        )}
      >
        <ul
          ref={scrollerRef}
          className={cn(
            " flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
            start && "animate-scroll ",
            pauseOnHover && "hover:[animation-play-state:paused]"
          )}
        >
          {certifications.map((certification, index) => (
            <li
              className={`bg-white w-[350px] max-w-full relative rounded-xl border border-b-0 flex-shrink-0  px-8 py-6 md:w-[450px] hover:bg-[#FFF0F0] hover:border-[#FFC4C4]  transition-transform duration-300 transform object-cover grayscale hover:grayscale-0 ease-in-out ${
                hoveredIndex === index ? "scale-110" : "scale-100"
              }`}
              style={{ cursor: 'pointer', zIndex: hoveredIndex === index ? 1 : 0 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              key={certification.name}
            >
              <blockquote>
                <div
                  aria-hidden="true"
                  className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
                ></div>
                <img
                  src={certification.image}
                  alt={certification.name}
                  className="w-24 h-24 mx-auto mb-4"
                />
                <p className="font-Satoshi font-semibold text-lg text-center">
                  {certification.name}
                </p>
                <p className="text-gray-500 text-center">
                  {certification.date}
                </p>
              </blockquote>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
