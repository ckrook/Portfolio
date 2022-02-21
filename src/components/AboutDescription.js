import React from "react";

function AboutDescription() {
  return (
    <section className="text-white bg-gray-900">
      <div className="max-w-screen-xl px-4 pt-8 sm:px-6 lg:px-8 m-auto">
        <div className="flex flex-row lg:flex-nowrap flex-wrap max-w-screen-xl gap-10">
          <div className="flex flex-col">
            <h2 className="text-3xl font-bold sm:text-4xl">About</h2>

            <p className="mt-6 text-gray-300">
              Hey! I'm Charles Krook, a junior Front-End Developer in Stockholm
              who is currently studying Front-end Development at Medieinstitutet
              and are looking to apply for an internship this fall - October
              2022.
            </p>
            <p className="mt-6 text-gray-300">
              Ever since my late teens I have been interested in web
              technologies & design. Which has gradually led me down the path of
              Frontend Development.
            </p>
            <p className="mt-6 text-gray-300">
              I have previously worked supporting e-commerce merchants and
              maintaining Klarna's internal infrastructure which has been an
              exciting time of personal and professional growth for me. However,
              since I started my studies in Front-End Development I feel excited
              for new adventures in my career.
            </p>
            <p className="mt-6 text-gray-300">
              There is much to be said for experience and education, but most
              vital to succeeding at any job are someone’s personal qualities. I
              am naturally very ambitious and curious. I have the ability to
              easily cooperate with others. I would also describe myself as
              adaptable, quality-conscious and verbal.
            </p>
            <p className="mt-6 text-gray-300">
              I hope that this brief presentation of who I am has been of
              interest to you. Lets talk more over a coffee!
            </p>
          </div>
          <img
            className="w-full h-full"
            src="https://via.placeholder.com/550x663"
            alt="Charles Krook"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutDescription;
