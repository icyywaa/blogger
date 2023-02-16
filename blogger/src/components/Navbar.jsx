import { useState } from "react";
import book from "../assets/book.png";

const Navbar = () => {
  const NavLinks = [{ name: "BLOG", link: "/blog" }];

  const [open, setOpen] = useState(false);

  return (
    <div className="hadow-md w-full fixed top-0 left-0">
      <div className="md:flex bg-white sm:px-4 md:px-10 px-7 py-2.5 dark:bg-gray-200 fixed w-full z-20 top-0 left-0">
        <div className="container flex flex-wrap items-center mx-auto font-bold text-2xl font-[Poppins]">
          <span className="text-3xl text-black mr-1 pt-2">
            <a href="/" className="flex items-center md:ml-20">
              <img
                src={book}
                className="object-contain h-7 md:h-10 mr-2 mb-2"
                alt="Blogger"
              />
            </a>
          </span>
          Blogger
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-1 cursor-pointer inline-flex items-center p-2 text-3xl text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>
        {/* The different paths in navbar */}
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-inherit md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 opacity-100" : "top-[-490px]"
          }`}
        >
          {/* mapping over said links, looks prettier than individual a:tags and links */}
          {NavLinks.map((link) => (
            <li
              key={link.name}
              className="md:ml-8 text-base md:my-0 my-7 whitespace-nowrap"
            >
              <a
                className="block content-center py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-gray-300 dark:text- dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                href={link.link}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
