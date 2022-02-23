import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

function NotFound() {
  return (
    <div>
      <Header />
      <div className="wrap text-center py-16">
        <span className="text-5xl font-bold">404</span>
        <h1 className="text-2xl mb-6 font-semi">
          Ops, it looks like this page was not found{" "}
        </h1>

        <a
          class="inline-block px-12 py-3 font-bold text-white bg-orange-600 hover:opacity-80 rounded-full focus:outline-none focus:ring"
          href="/"
        >
          Return home
        </a>
      </div>
      <Footer />
    </div>
  );
}

export default NotFound;
