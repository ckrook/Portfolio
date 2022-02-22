import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { IoIosCheckmark } from "react-icons/io";

function Form() {
  const [sent, setSent] = useState(false);
  let button;
  if (sent) {
    button = <IoIosCheckmark className="w-7 h-7" />;
  } else {
    button = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5 ml-3"
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
    );
  }

  function sendEmail(e) {
    e.preventDefault();
    if (
      e.target[0].value === "" ||
      e.target[1].value === "" ||
      e.target[2].value === "" ||
      e.target[3].value === ""
    )
      return;

    emailjs
      .sendForm(
        "service_1xn10k6",
        "template_i4bwz3a",
        e.target,
        "user_63qjf7V9nZuRJAXwFVfav"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    setSent(true);
  }
  return (
    <section name="contactme" id="contactme">
      <div className="max-w-screen-xl pb-8 mx-auto">
        <div className="grid grid-cols-1 gap-x-2 lg:grid-cols-7">
          <div className="lg:col-span-7">
            <div className="h-full">
              <div class="h-full flex items-center bg-gray-900 rounded-xl">
                <h5 class="mb-3 text-xl md:text-4xl lg:text-3xl font-bold text-gray-200">
                  Lets talk!
                </h5>
              </div>
            </div>
          </div>

          <div className="rounded-lg lg:col-span-7">
            <form onSubmit={sendEmail} className="space-y-4">
              <div>
                <label className="sr-only" for="name">
                  Name
                </label>
                <input
                  className="w-full p-3 text-sm border-gray-200  bg-gray-800 rounded-lg"
                  placeholder="Name"
                  type="text"
                  name="user_name"
                  id="name"
                />
              </div>

              <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                <div>
                  <label className="sr-only" for="email">
                    Email
                  </label>
                  <input
                    className="w-full p-3 text-sm border-gray-200 bg-gray-800 rounded-lg"
                    placeholder="Email address"
                    type="email"
                    name="user_email"
                    id="email"
                  />
                </div>

                <div>
                  <label className="sr-only" for="phone">
                    Phone
                  </label>
                  <input
                    className="w-full p-3 text-sm border-gray-200 bg-gray-800 rounded-lg"
                    placeholder="Phone Number"
                    type="tel"
                    name="user_phone"
                    id="phone"
                  />
                </div>
              </div>

              <div className="flex gap-4">
                <label className="sr-only" for="message">
                  Message
                </label>
                <textarea
                  className=" p-3 text-sm border-gray-200 bg-gray-800 rounded-lg"
                  placeholder="Message"
                  rows="8"
                  cols="120"
                  name="message"
                  id="message"
                ></textarea>
              </div>
              <button
                type="submit"
                className={
                  sent
                    ? "sent inline-flex items-center justify-center w-full px-5 py-3 text-white bg-black rounded-lg sm:w-full"
                    : "inline-flex items-center justify-center w-full px-5 py-3 text-white bg-black rounded-lg sm:w-full"
                }
              >
                <span className="font-medium">{sent ? "Sent!" : "Send"}</span>

                {button}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Form;
