import React, { useState } from "react";
import { navbar } from "../data"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);


  const handleClickScroll = (elementId) => {
    if (!elementId) return;

    const element = document.getElementById(elementId);
    const headerOffset = document.getElementById('navbar').offsetHeight;
    var elementPosition = element.getBoundingClientRect().top;
    var offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    if (element) {
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const pages = navbar.pages;



  return (
    <nav className="bg-[#e7ebde] shadow-md fixed w-full z-30">
      <div id="navbar" className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="text-xl font-bold text-gray-800">
              <h1 className="font-gistesy">{`${navbar.bridesName} &`}</h1>
              <h1 className="font-gistesy">{navbar.groomsName}</h1>
            </a>
          </div>

          {/* Hamburger Menu for Mobile */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex md:items-center md:justify-center md:w-full md:space-x-8">
            {pages.map((entry, index) => (
              <div key={index} className="text-gray-800 hover:text-gray-600" onClick={() => handleClickScroll(entry.id)}>
                <h1 className="font-blackmango text-xl">{entry.name}</h1>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-[#e7ebde] border-t border-gray-200 transition-all duration-300 overflow-hidden ${isOpen ? 'h-screen' : 'h-0'} flex flex-col justify-center gap-4 items-center text-5xl`}>
        {pages.map((entry, index) => (
          <div
            key={index}
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
            onClick={() => { setIsOpen(false); handleClickScroll(entry.id); }}
          >
            <h1 className="font-blackmango">{entry.name}</h1>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
