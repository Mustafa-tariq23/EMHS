import { useState } from "react";
import { Link } from "react-router-dom";
import DropDown from "./DropDown";

const Navbar = () => {
  const [isNavbarOpen, setNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setNavbarOpen(!isNavbarOpen);
  };

  return (
    <nav className=" mirror h-18 bg-white border-gray-200 scroll-smooth focus:scroll-auto shadow-lg	 fixed w-full z-30 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-2">
        <span className=" h-16 w-28 p-4 self-center text-2xl font-semibold whitespace-nowrap text-white flex items-center space-x-3 rtl:space-x-reverse">
          <Link to="/">
            <img
              src="assets/logo.png"
              alt="logo"
              className="h-16 w-full min-w-32"
            />
          </Link>
        </span>
        <button
          onClick={toggleNavbar}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm  rounded-lg md:hidden focus:outline-none focus:ring-2"
          aria-controls="navbar-multi-level"
          aria-expanded={isNavbarOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${
            isNavbarOpen ? "block" : "hidden"
          } w-full md:block md:w-auto`}
          id="navbar-multi-level"
        >
          <ul className="flex flex-col font-medium p-0 md:p-0 mt-4 border rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            {/* Home */}
            <li className="hover:bg-[#0a3cff] ease-linear hover:text-white rounded-lg duration-200">
              <Link to="/" className="block py-2 px-2" aria-current="page">
                Home
              </Link>
            </li>
            {/* about */}
            <li className="hover:bg-[#0a3cff] ease-linear hover:text-white rounded-lg duration-200">
              <Link
                to="/AboutUs"
                className="block py-2 px-2 duration-500 rounded"
              >
                About Us
              </Link>
            </li>
            {/* Services */}
            <li className="flex items-center hover:bg-[#0a3cff] ease-linear hover:text-white rounded-lg duration-200">
              <DropDown />
            </li>
            {/* Contact */}
            <li className="hover:bg-[#0a3cff] ease-linear hover:text-white rounded-lg duration-200">
              <Link
                to="/ContactUs"
                className="block px-2 py-2 duration-500 rounded"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
