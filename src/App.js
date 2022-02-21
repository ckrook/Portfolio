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
              <h1 className="text-4xl font-extrabold text-transparent sm:text-6xl bg-clip-text bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100">
                Hello! I'm Charles
              </h1>
              <div>
                <p className="max-w-xl font-medium mx-auto mt-6 mb-4 text-lg">
                  I'm a Frontend developer based in Stockholm, Sweden who loves
                  to learn about new web technologies and bouldering with
                  friends.
                </p>

                <a
                  className="inline-block p-[2px] rounded-full bg-gradient-to-r from-rose-100 to-teal-100 hover:text-white active:text-opacity-75 focus:outline-none focus:ring"
                  href="/download"
                >
                  <Link to="/about">
                    <span className="block px-8 py-3 text-sm font-bold bg-slate-900 rounded-full hover:bg-transparent hover:text-gray-900">
                      More about me
                    </span>
                  </Link>
                </a>
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
