import React from "react";
// TODO APP
import todo from "./../assets/todo.png";
import todologo from "./../assets/todo-logo.png";
// WEATHER APP
import weather from "./../assets/weatherapp.png";
import weatherlogo from "./../assets/weather-logo.png";

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
            <a href={p.live} target="_blank" rel="noreferrer">
              <div className="project__img">
                <div className="flex justify-center items-center">
                  <img className=" w-4/5 p-4" src={p.logo} alt="Todo App" />
                </div>
                <div>
                  <img className="rounded-xl" src={p.img} alt="Todo App" />
                </div>
              </div>
            </a>

            <div className="flex justify-between px-8">
              <div className="flex flex-col">
                <div className="flex items-center mb-2">
                  <a href={p.live}>
                    <h2 className="font-bold mr-4">{p.title}</h2>
                  </a>
                </div>
                <span className="text-gray-300 text-base font-medium leading-[22px]">
                  {p.description}
                </span>
              </div>
              <div className="flex flex-col md:gap-2 lg:gap-3 xl:gap-4 gap-2">
                <div className="flex justify-end">
                  <a
                    href={p.repo}
                    className="badge- github"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View on Github
                  </a>
                </div>
                <div className="flex flex-wrap justify-end gap-1">
                  {p.badge.map((b) => {
                    return (
                      <div>
                        <span className="badge- ">{b}</span>
                      </div>
                    );
                  })}
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
