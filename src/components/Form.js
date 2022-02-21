import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { IoIosCheckmark } from "react-icons/io";

function Form() {
  const [sent, setSent] = useState(false);
  let button;
  if (sent) {
    button = <IoIosCheckmark className="w-10 h-10" />;
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
    <section>
      <div className="max-w-screen-xl px-4 pb-8 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div className="lg:py-12 lg:col-span-2">
            <p className="max-w-xl text-lg">
              Now its time to hear more about what you do. <br />
              Please do not hesitate to get in touch if you feel like we could
              make something great together.
            </p>

            <div className="mt-8">
              <a
                href="tel:+46700230543"
                className="text-2xl font-bold text-orange-600"
              >
                +46 70 023 05 43
              </a>

              <address className="mt-2 not-italic"></address>
            </div>
          </div>

          <div className="p-8 rounded-lg lg:p-12 lg:col-span-3">
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

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
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

              <div>
                <label className="sr-only" for="message">
                  Message
                </label>
                <textarea
                  className="w-full p-3 text-sm border-gray-200 bg-gray-800 rounded-lg"
                  placeholder="Message"
                  rows="8"
                  name="message"
                  id="message"
                ></textarea>
              </div>

              <div className="mt-4">
                <button
                  type="submit"
                  className={
                    sent
                      ? "sent inline-flex items-center justify-center w-full px-5 py-3 text-white bg-black rounded-lg sm:w-auto"
                      : "inline-flex items-center justify-center w-full px-5 py-3 text-white bg-black rounded-lg sm:w-auto"
                  }
                >
                  <span className="font-medium">
                    {" "}
                    {sent ? "Sent!" : "Send Enquiry"}{" "}
                  </span>

                  {button}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Form;
