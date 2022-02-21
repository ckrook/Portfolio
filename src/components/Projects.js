import React from "react";
// TODO APP
import todo from "./../assets/todo.png";
import todologo from "./../assets/todo-logo.png";
// WEATHER APP
import weather from "./../assets/weatherapp.png";
import weatherlogo from "./../assets/weather-logo.png";

import { HiExternalLink } from "react-icons/hi";
import { GoMarkGithub } from "react-icons/go";

function Projects() {
  const projects = [
    {
      title: "Todo App",
      description: "Simple todo app built with vanilla js",
      logo: todologo,
      img: todo,
      badge: ["Typescript", "TailwindCSS", "Parcel", "Cypress"],
      live: "https://todo.charleskrook.io/",
      repo: "https://github.com/ckrook/TodoApp",
    },
    {
      title: "Weather App",
      description: "Shows current & historic weather data",
      logo: weatherlogo,
      img: weather,
      badge: ["React", "NextJS", "TailwindCSS", "FramerMotion"],
      live: "https://weatherapp-next.vercel.app/",
      repo: "https://github.com/ckrook/WeatherApp",
    },
  ];
  return (
    <div className="wrap">
      {projects.map((p) => {
        return (
          <div className="project">
            <div className="project__img">
              <div className="flex justify-center items-center">
                <img className=" w-4/5 p-4" src={p.logo} alt="Todo App" />
              </div>
              <div>
                <img className="rounded-xl" src={p.img} alt="Todo App" />
              </div>
            </div>

            <div className="flex justify-between px-8">
              <div className="flex flex-col">
                <div className="flex items-center mb-2">
                  <h2 className="font-bold mr-4">{p.title}</h2>
                  <HiExternalLink className=" sm:hidden w-7 h-7 md:w-6 md:h-6" />
                  <span className="hidden md:block text-gray-300 font-medium leading-[32px]">
                    {p.description}
                  </span>
                </div>
                <div className="flex flex-wrap md:gap-4 lg:gap-6 xl:gap-8 gap-4 gap-y-3 ">
                  {p.badge.map((b) => {
                    const classes = "badge-";
                    return <span className={classes}>{b}</span>;
                  })}
                </div>
              </div>
              <div className="flex flex-row sm:flex-col md:justify-between text-right font-medium">
                <div className="flex flex-row md:flex-auto justify-end md:items-center">
                  <a
                    className="hidden xl:block mr-2"
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live site
                  </a>
                  <HiExternalLink className="hidden sm:block w-7 h-7 md:w-6 md:h-6" />
                </div>
                <div className="flex justify-end md:items-center">
                  <a
                    className="hidden xl:block mr-2"
                    href={p.repo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github repo
                  </a>
                  <GoMarkGithub className="w-7 h-7 md:w-6 md:h-6" />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Projects;
