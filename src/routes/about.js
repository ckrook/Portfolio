import Footer from "../components/Footer";
import Header from "../components/Header";
import profile from "./../assets/profile.png";

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

export default function Expenses() {
  return (
    <div>
      <Header />
      <section class="text-white bg-gray-900">
        <div class="max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 m-auto">
          <div class="flex flex-row max-w-screen-xl gap-10">
            <div className="flex flex-col">
              <h2 class="text-3xl font-bold sm:text-4xl">About</h2>

              <p class="mt-6 text-gray-300">
                Hey! I'm Charles Krook, a junior Front-End Developer in
                Stockholm who is currently studying Front-end Development at
                Medieinstitutet and are looking to apply for an internship this
                fall - October 2022.
              </p>
              <p class="mt-6 text-gray-300">
                Ever since my late teens I have been interested in web
                technologies & design. Which has gradually led me down the path
                of Frontend Development.
              </p>
              <p class="mt-6 text-gray-300">
                I have previously worked supporting e-commerce merchants and
                maintaining Klarna's internal infrastructure which has been an
                exciting time of personal and professional growth for me.
                However, since I started my studies in Front-End Development I
                feel excited for new adventures in my career.
              </p>
              <p class="mt-6 text-gray-300">
                There is much to be said for experience and education, but most
                vital to succeeding at any job are someone’s personal qualities.
                I am naturally very ambitious and curious. I have the ability to
                easily cooperate with others. I would also describe myself as
                adaptable, quality-conscious and verbal.
              </p>
              <p class="mt-6 text-gray-300">
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

          <section class="px-4 pt-24 pb-4 mx-auto max-w-7xl">
            <h1 class="mb-12 text-sm font-bold tracking-wide text-center text-gray-700 uppercase">
              Staying up to date with the latest technologies.
            </h1>
            <div class="grid grid-cols-2 gap-6 text-center lg:grid-cols-8">
              <div class="logo-card flex items-center justify-center">
                <img
                  src={window.location.origin + git}
                  alt="Slack Logo"
                  class="block object-contain h-12"
                />
              </div>
              <div class="logo-card flex items-center justify-center">
                <img
                  src={window.location.origin + html}
                  alt="Algolia Logo"
                  class="block object-contain h-12"
                />
              </div>
              <div class="logo-card flex items-center justify-center">
                <img
                  src={window.location.origin + ts}
                  alt="Vimeo Logo"
                  class="block object-contain h-12"
                />
              </div>
              <div class="logo-card flex items-center justify-center">
                <img
                  src={window.location.origin + mongo}
                  alt="Algolia Logo"
                  class="block object-contain h-12"
                />
              </div>
              <div class="logo-card flex items-center justify-center">
                <img
                  src={window.location.origin + next}
                  alt="Postcss Logo"
                  class="block object-contain h-12"
                />
              </div>
              <div class="logo-card flex items-center justify-center">
                <img
                  src={window.location.origin + react}
                  alt="TailwindCSS Logo"
                  class="block object-contain h-12"
                />
              </div>
              <div class="logo-card flex items-center justify-center">
                <img
                  src={window.location.origin + sass}
                  alt="Discord Logo"
                  class="block object-contain h-12"
                />
              </div>
              <div class="logo-card flex items-center justify-center">
                <img
                  src={window.location.origin + tailwind}
                  alt="Vimeo Logo"
                  class="block object-contain h-12"
                />
              </div>
            </div>
          </section>
        </div>
      </section>

      <section>
        <div class="max-w-screen-xl px-4 pb-8 mx-auto sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div class="lg:py-12 lg:col-span-2">
              <p class="max-w-xl text-lg">
                Now its time to hear more about what you do. <br />
                Please do not hesitate to get in touch if you feel like we could
                make something great together.
              </p>

              <div class="mt-8">
                <a
                  href="tel:+46700230543"
                  class="text-2xl font-bold text-orange-600"
                >
                  +46 70 023 05 43
                </a>

                <address class="mt-2 not-italic">
                  282 Kevin Brook, Imogeneborough, CA 58517
                </address>
              </div>
            </div>

            <div class="p-8 rounded-lg lg:p-12 lg:col-span-3">
              <form action="" class="space-y-4">
                <div>
                  <label class="sr-only" for="name">
                    Name
                  </label>
                  <input
                    class="w-full p-3 text-sm border-gray-200  bg-gray-800 rounded-lg"
                    placeholder="Name"
                    type="text"
                    id="name"
                  />
                </div>

                <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label class="sr-only" for="email">
                      Email
                    </label>
                    <input
                      class="w-full p-3 text-sm border-gray-200 bg-gray-800 rounded-lg"
                      placeholder="Email address"
                      type="email"
                      id="email"
                    />
                  </div>

                  <div>
                    <label class="sr-only" for="phone">
                      Phone
                    </label>
                    <input
                      class="w-full p-3 text-sm border-gray-200 bg-gray-800 rounded-lg"
                      placeholder="Phone Number"
                      type="tel"
                      id="phone"
                    />
                  </div>
                </div>

                <div>
                  <label class="sr-only" for="message">
                    Message
                  </label>
                  <textarea
                    class="w-full p-3 text-sm border-gray-200 bg-gray-800 rounded-lg"
                    placeholder="Message"
                    rows="8"
                    id="message"
                  ></textarea>
                </div>

                <div class="mt-4">
                  <button
                    type="submit"
                    class="inline-flex items-center justify-center w-full px-5 py-3 text-white bg-black rounded-lg sm:w-auto"
                  >
                    <span class="font-medium"> Send Enquiry </span>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-5 h-5 ml-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
