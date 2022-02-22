import React, { useState } from "react";
import avatar from "./../assets/avatar.png";
import ModalForm from "./ModalForm";

function Header() {
  return (
    <header className="header">
      <div className="wrap">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <a className="flex justify-start items-center mb-6 sm:mb-0" href="/">
            <img className="rounded-full w-14 mr-4" src={avatar} alt="" />
            <div className="text-left">
              <span className="header__logo">Charles Krook</span>
              <h1 className="text-sm font-medium">
                Frontend Developer & Designer
              </h1>
            </div>
          </a>

          <div className="flex justify-end">
            <button className="inline-block p-[2px] rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 hover:text-white active:text-opacity-75 focus:outline-none focus:ring">
              <a
                href="/about#contactme"
                className="block px-8 py-3 text-sm font-bold  bg-gray-900 rounded-full hover:bg-transparent"
              >
                Get in touch
              </a>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
