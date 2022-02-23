import React from "react";
// LOGOS
import git from "./../assets/logos/git.svg";
import { default as html } from "./../assets/logos/html.svg";
import { default as mongo } from "./../assets/logos/mongodb.svg";
import { default as next } from "./../assets/logos/next.svg";
import { default as react } from "./../assets/logos/react.png";
import { default as sass } from "./../assets/logos/sass.svg";
import { default as tailwind } from "./../assets/logos/tailwind.svg";
import { default as ts } from "./../assets/logos/typescript.svg";

function TechLogos() {
  return (
    <section className="pt-24 pb-16 mx-auto max-w-7xl">
      <h1 className="mb-12 text-sm font-bold tracking-wide text-center text-gray-700 uppercase">
        Staying up to date with the latest technologies.
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-8 gap-6 md:gap-3 text-center">
        <div className="logo-card flex items-center justify-center">
          <img src={git} alt="Git" className="block object-contain h-12" />
        </div>
        <div className="logo-card flex items-center justify-center">
          <img src={html} alt="Html" className="block object-contain h-12" />
        </div>
        <div className="logo-card flex items-center justify-center">
          <img
            src={ts}
            alt="Typescript"
            className="block object-contain h-12"
          />
        </div>
        <div className="logo-card flex items-center justify-center">
          <img
            src={mongo}
            alt="Mongodb"
            className="block object-contain h-12"
          />
        </div>
        <div className="logo-card flex items-center justify-center">
          <img src={next} alt="NextJs" className="block object-contain h-12" />
        </div>
        <div className="logo-card flex items-center justify-center">
          <img src={react} alt="React" className="block object-contain h-12" />
        </div>
        <div className="logo-card flex items-center justify-center">
          <img src={sass} alt="Sass" className="block object-contain h-12" />
        </div>
        <div className="logo-card flex items-center justify-center">
          <img
            src={tailwind}
            alt="Tailwind"
            className="block object-contain h-12"
          />
        </div>
      </div>
    </section>
  );
}

export default TechLogos;
