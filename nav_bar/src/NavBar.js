/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState, useRef } from "react";
import { FaBars } from "react-icons/fa";
import { links } from "./data";
const NavBar = () => {
  const [displayLinks, setDisplayLinks] = useState(false);
  const linksContainer = useRef(null);
  const linksRef = useRef(null);
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (displayLinks) {
      linksContainer.current.style.height = `${linksHeight}px`;
    } else {
      linksContainer.current.style.height = "0px";
    }
  }, [displayLinks]);
  const handleToggle = () => {
    setDisplayLinks(!displayLinks);
  };
  return (
    <nav className="shadow-md ">
      <div className="container pl-3 pr-3 py-3 m-auto">
        <div className="navigation md:flex md:justify-between md:items-center">
          <div className="flex justify-between items-center">
            <div className="logo">
              <h2 className=" text-2xl text-blue-500 font-bold select-none">
                Logo
              </h2>
            </div>
            <button
              className="navigation-toggle text-2xl text-blue-500 md:hidden "
              onClick={handleToggle}
            >
              <FaBars />
            </button>
          </div>
          <div
            ref={linksContainer}
            className="links-container overflow-hidden  "
          >
            <ul
              ref={linksRef}
              className=" py-4 md:flex md:justify-between  md:items-center md:py-0"
            >
              {links.map((link) => {
                return (
                  <li
                    key={link.id}
                    className="text-base transition-colors  capitalize mb-3 hover:bg-blue-500 hover:text-white p-1 cursor-pointer md:mr-5 md:mb-0 md:text-gray-500 md:hover:bg-transparent md:hover:text-gray-900"
                  >
                    <a href="#" className=" leading-8">
                      {link.text}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
