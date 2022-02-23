import React from "react";

function AboutDescription() {
  return (
    <section className="text-white bg-gray-900">
      <div className="max-w-screen-xl m-auto">
        <div className="flex  flex-col-reverse flex-wrap max-w-screen-xl gap-10">
          <div className="flex flex-col">
            <p className="mt-6 text-gray-300">
              Hi! I'm Charles Krook, a junior Frontend Developer in Stockholm
              who is currently studying Frontend Development at{" "}
              <a
                href="https://medieinstitutet.se/utbildningar/front-end-developer/"
                target="_blank"
                rel="noreferrer"
                className="text-rose-500"
              >
                Medieinstitutet
              </a>{" "}
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
              maintaining{" "}
              <a
                className="text-rose-500"
                href="https://www.klarna.com/us/"
                target="_blank"
                rel="noreferrer"
              >
                Klarna's
              </a>{" "}
              internal infrastructure which has been an exciting time of
              personal and professional growth for me. However, since I started
              my studies in Frontend Development I feel excited for new
              adventures in my career.
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
              interest to you. Lets talk more over a coffee! ☕
            </p>
          </div>
          {/* <img
            className="w-full h-full rounded-xl"
            src="https://via.placeholder.com/550x363"
            alt="Charles Krook"
          /> */}
        </div>
      </div>
    </section>
  );
}

export default AboutDescription;
