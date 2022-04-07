// IMPORTS
import "./App.css";
import { Link } from "react-router-dom";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <main>
        <section>
          <div className="max-w-screen-xl px-4 py-24 mx-auto sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-semibold text-white sm:text-5xl">
                Hello! I'm Charles
              </h1>
              <div>
                <p className="max-w-xl font-medium mx-auto mt-4 mb-4 text-lg tracking-wider">
                  I'm a Frontend developer based in Stockholm, Sweden who loves
                  to learn about modern web technologies.
                </p>

                <div className="inline-block p-[2px] bg-green-500 text-white rounded-full active:text-opacity-75 focus:outline-none focus:ring">
                  <Link to="/about">
                    <span className="tracking-wider block px-8 py-3 text-sm font-bold rounded-full hover:bg-transparent uppercase">
                      Get in touch!
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;
