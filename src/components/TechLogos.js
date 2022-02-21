import React from "react";
// LOGOS
import adobe from "./../assets/logos/adobe.svg";
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
    <section className="px-4 pt-24 pb-16 mx-auto max-w-7xl">
      <h1 className="mb-12 text-sm font-bold tracking-wide text-center text-gray-700 uppercase">
        Staying up to date with the latest technologies.
      </h1>
      <div className="grid grid-cols-2 gap-6 text-center lg:grid-cols-8">
        <div className="logo-card flex items-center justify-center">
          <img
            src={window.location.origin + git}
            alt="Slack Logo"
            className="block object-contain h-12"
          />
        </div>
        <div className="logo-card flex items-center justify-center">
          <img
            src={window.location.origin + html}
            alt="Algolia Logo"
            className="block object-contain h-12"
          />
        </div>
        <div className="logo-card flex items-center justify-center">
          <img
            src={window.location.origin + ts}
            alt="Vimeo Logo"
            className="block object-contain h-12"
          />
        </div>
        <div className="logo-card flex items-center justify-center">
          <img
            src={window.location.origin + mongo}
            alt="Algolia Logo"
            className="block object-contain h-12"
          />
        </div>
        <div className="logo-card flex items-center justify-center">
          <img
            src={window.location.origin + next}
            alt="Postcss Logo"
            className="block object-contain h-12"
          />
        </div>
        <div className="logo-card flex items-center justify-center">
          <img
            src={window.location.origin + react}
            alt="TailwindCSS Logo"
            className="block object-contain h-12"
          />
        </div>
        <div className="logo-card flex items-center justify-center">
          <img
            src={window.location.origin + sass}
            alt="Discord Logo"
            className="block object-contain h-12"
          />
        </div>
        <div className="logo-card flex items-center justify-center">
          <img
            src={window.location.origin + tailwind}
            alt="Vimeo Logo"
            className="block object-contain h-12"
          />
        </div>
      </div>
    </section>
  );
}

export default TechLogos;
