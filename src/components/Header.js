import { Link } from "react-router-dom";
import avatar from "./../assets/avatar.png";
import { BiPaperPlane } from "react-icons/bi";

import resume from "./../assets/Resume.pdf";
function Header() {
  return (
    <header className="header px-2 sm:px-0">
      <div className="wrap">
        <div className="flex gap-y-8 flex-col md:flex-row justify-between items-center">
          <a className="flex justify-start items-center sm:mb-0" href="/">
            <img
              className="rounded-full w-14 mr-4"
              src={avatar}
              alt="Charles Krook"
            />
            <div className="text-left">
              <span className="header__logo tracking-wider text-stone-50">
                Charles Krook
              </span>
              <h1 className="text-sm font-semibold tracking-wide text-stone-100">
                Frontend Developer & Designer
              </h1>
            </div>
          </a>

          <div className="flex justify-end items-center">
            <nav className="flex items-center grid grid-cols-3 gap-2 text-base tracking-wider font-bold bg-gray-900 rounded-lg sm:grid-cols-3 lg:grid-cols-3">
              <Link className="hover:opacity-75" to="/" rel="noreferrer">
                Home
              </Link>
              <Link to="/about" className="hover:opacity-75">
                About
              </Link>

              <a
                className="hover:opacity-75 bg-white text-gray-800 rounded-full p-4"
                href={resume}
                download
              >
                Resume
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
