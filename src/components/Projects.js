import React from "react";
// TODO APP
import todo from "./../assets/todo.png";
import todologo from "./../assets/todo-logo.png";
// WEATHER APP
import weather from "./../assets/weatherapp.png";
import weatherlogo from "./../assets/weather-logo.png";

// DIGITALA VERK
import digitalaverk from "./../assets/digitalaverk.png";
import digitalaverk2 from "./../assets/digitalaverk2.png";

// MESSAGE APP
import messageApp from "./../assets/message-app.png";
import messageAppLogo from "./../assets/message-app-logo.png";

function Projects() {
  const projects = [
    {
      title: "Message App",
      description:
        "A simple message app built with NextJS, Firebase, tailwind & styled componets",
      logo: messageAppLogo,
      img: messageApp,
      badge: [
        "Typescript",
        "NextJS",
        "Firebase",
        "Tailwind",
        "styled components",
      ],
      live: "https://message-app-beta.vercel.app/",
      repo: "https://github.com/ckrook/Message-app",
    },
    {
      title: "Digitalaverk",
      description: "A swedish NFT marketplace where digital art can be minted.",
      logo: digitalaverk,
      img: digitalaverk2,
      badge: ["Typescript", "NextJS", "Sanity", "Thirdweb", "Tailwind"],
      live: "https://nft-drop-p671mbzgg-ckrook.vercel.app/",
      repo: "https://github.com/ckrook/Digitalaverk",
    },
    {
      title: "Todo App",
      description: "A minimalistic todo app with some lightweight features.",
      logo: todologo,
      img: todo,
      badge: ["Typescript", "Parcel", "Tailwind", "Cypress"],
      live: "https://todo.charleskrook.io/",
      repo: "https://github.com/ckrook/TodoApp",
    },
    {
      title: "Weather App",
      description:
        "Simple weather app that is showcasing the current temperature, humidity, clouds and 7 days forecast.",
      logo: weatherlogo,
      img: weather,
      badge: ["React", "NextJS", "API", "Tailwind", "FramerMotion"],
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
                <div className="flex flex-1 justify-center items-center">
                  <img className=" w-4/5 p-4" src={p.logo} alt="Todo App" />
                </div>
                <div className="flex-1">
                  <img className="rounded-xl" src={p.img} alt="Todo App" />
                </div>
              </div>
            </a>

            <div className="flex flex-col sm:flex-row justify-start sm:justify-between px-4 sm:px-8">
              <div className="flex flex-col">
                <div className="flex items-center justify-between mb-2">
                  <a href={p.live}>
                    <h2 className="font-bold mr-4">{p.title}</h2>
                  </a>
                  <a
                    href={p.repo}
                    className="badge- github block sm:hidden"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View on Github
                  </a>
                </div>
                <span className="text-gray-300 text-base font-medium leading-[22px] mb-2 sm:mb-0">
                  {p.description}
                </span>
              </div>
              <div className="flex flex-col md:gap-2 lg:gap-3 xl:gap-4 gap-2">
                <div className="flex justify-start sm:justify-end">
                  <a
                    href={p.repo}
                    className="badge- github hidden sm:block"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View on Github
                  </a>
                </div>
                <div className="flex flex-wrap justify-start sm:justify-end gap-1">
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
