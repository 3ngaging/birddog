"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Transition } from "@headlessui/react";
import { usePathname } from "next/navigation";
import tgImg from "../files/telegram.svg";
import xImg from "../files/square-x-twitter.svg";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();

  // Function to handle link click
  const handleLinkClick = () => {
    setIsOpen(false); // Close the mobile menu
  };

  // Function to check if the path is active to apply active styles
  const isActive = (path) => {
    return pathName === path;
  };

  return (
    <nav className="bg-stone-950 sticky top-0 p-5">
      <div className="">
        {/* Burger Icon */}
        <div className="md:hidden flex justify-between">
          <div className="flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="outline-none mobile-menu-button"
            >
              <svg
                className="w-6 h-6 text-white"
                x-show="!showMenu"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>

          <div className="flex justify-end items-center space-x-4">
            <a
              href="https://t.me/birddogentry"
              className="hover:opacity-75"
              target="_blank"
            >
              <Image
                src={tgImg}
                alt="telegram logo"
                priority
                height={32}
                width={32}
                className="" 
              />
            </a>
            <a
              href="https://twitter.com/SOLbirddog"
              className="hover:opacity-75"
              target="_blank"
            >
              <Image src={xImg} className="" alt="x logo" priority height={32} width={32} />
            </a>

            <a
              href="https://jup.ag/swap/SOL-BIRDDOG_3XTp12PmKMHxB6YkejaGPUjMGBLKRGgzHWgJuVTsBCoP"
              className="bg-gradient-to-r from-purple-500 to-teal-400 hover:opacity-75 p-2 px-5 border-4 border-white rounded-3xl text-xl"
              target="_blank"
            >
              BUY NOW
            </a>
          </div>
        </div>

        {/* Mobile Menu */}
        <Transition
          show={isOpen}
          enter="transition ease-out duration-200 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div
              className="fixed top-0 left-0 h-full w-full z-50 bg-stone-950 md:hidden"
              id="mobile-menu"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute p-4 text-white text-3xl"
              >
                &times; {/* This is a simple way to create an "X" symbol */}
              </button>

              <div className="flex h-full items-center justify-center text-center">
                <ul className="space-y-6">
                  <li
                    className={isActive("/") ? "bg-white text-black rounded-3xl" : "text-white"}
                  >
                    <Link
                      onClick={handleLinkClick}
                      href="/"
                      className="block text-lg px-2 py-4 hover:bg-white hover:text-black font-semibold rounded-3xl"
                    >
                      Home
                    </Link>
                  </li>
                  <li
                    className={
                      isActive("/meme-generator")
                        ? "bg-white text-black rounded-3xl text-white"
                        : ""
                    }
                  >
                    <Link
                      onClick={handleLinkClick}
                      href="/meme-generator"
                      className="block text-lg px-2 py-4 hover:bg-white hover:text-black transition duration-300 rounded-3xl"
                    >
                      Meme Generator
                    </Link>
                  </li>
                  <li>
                    <span className="block text-lg px-2 py-4 text-gray-600 cursor-not-allowed rounded-3xl">
                      Coming Soon...
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </Transition>

        {/* Desktop Menu */}
        <div className="hidden md:flex justify-between items-center w-full">
          <ul className="flex space-x-4">
            <li>
              <Link
                href="/"
                className={
                  isActive("/")
                    ? "hover:border-2 hover:border-white hover:text-white border-2 border-black text-black bg-white hover:bg-black p-2 px-5 rounded-3xl"
                    : "hover:text-black hover:bg-white p-2 px-5 rounded-3xl"
                }
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/meme-generator"
                className={
                  isActive("/meme-generator")
                    ? "hover:border-2 hover:border-white hover:text-white border-2 border-black text-black bg-white hover:bg-black p-2 px-5 rounded-3xl"
                    : "hover:text-black hover:bg-white p-2 px-5 rounded-3xl"
                }
              >
                Meme Generator
              </Link>
            </li>
            <li>
              <span className="cursor-not-allowed text-gray-700 p-2 px-5 rounded-3xl">
                Coming Soon...
              </span>
            </li>
          </ul>

          <div className="flex items-center space-x-4">
            <a
              href="https://t.me/birddogentry"
              className="hover:opacity-75"
              target="_blank"
            >
              <Image
                src={tgImg}
                alt="telegram logo"
                priority
                height={32}
                width={32}
                className="" 
              />
            </a>
            <a
              href="https://twitter.com/SOLbirddog"
              className="hover:opacity-75"
              target="_blank"
            >
              <Image src={xImg} className="" alt="x logo" priority height={32} width={32} />
            </a>

            <a
              href="https://jup.ag/swap/SOL-BIRDDOG_3XTp12PmKMHxB6YkejaGPUjMGBLKRGgzHWgJuVTsBCoP"
              className="bg-gradient-to-r from-purple-500 to-teal-400 hover:opacity-75 p-2 px-5 rounded-3xl border-4 border-white text-xl"
              target="_blank"
            >
              BUY NOW
            </a>
          </div>
        </div>
      </div>

      {/* This code toggles the menu on smaller screens */}
    </nav>
  );
};

export default Nav;
