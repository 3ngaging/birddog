"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import tgImg from "../assets/tg_yellow.svg";
import xImg from "../assets/x_yellow.svg";
import { Transition } from "@headlessui/react";
import { usePathname } from "next/navigation";

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
    <nav className="bg-orange-500 p-4 sticky top-0 z-50">
      <div className="mx-auto flex items-center">
        {/* Burger Icon */}
        <div className="md:hidden flex items-center">
          <div className="">
            <div className="flex items-center space-x-4">
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
          </div>
          
          <div className="mx-auto flex justify-end items-center space-x-4">
              <a href="https://t.me/birddogentry" className="hover:opacity-75">
                <Image
                  src={tgImg}
                  alt="telegram logo"
                  priority
                  height={32}
                  width={32}
                />
              </a>
              <a
                href="https://twitter.com/SOLbirddog"
                className="hover:opacity-75"
              >
                <Image src={xImg} alt="x logo" priority height={32} width={32} />
              </a>

              <a href="https://jup.ag/swap/SOL-BIRDDOG_3XTp12PmKMHxB6YkejaGPUjMGBLKRGgzHWgJuVTsBCoP" className="hover:text-gray-50 bg-orange-400 hover:bg-yellow-800 p-2 px-5 rounded-3xl border-4 border-yellow-400 text-xl">
                BUY NOW
              </a>
          </div>
        </div>

        {/* Mobile Menu */}
        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div
              className="fixed top-0 left-0 h-full w-full z-40 bg-orange-600 md:hidden"
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
                    className={isActive("/") ? "bg-yellow-500 rounded-3xl" : ""}
                  >
                    <Link
                      onClick={handleLinkClick}
                      href="/"
                      className="block text-lg px-2 py-4 text-white hover:bg-yellow-500 font-semibold rounded-3xl"
                    >
                      Home
                    </Link>
                  </li>
                  <li
                    className={
                      isActive("/meme-generator")
                        ? "bg-yellow-500 rounded-3xl"
                        : ""
                    }
                  >
                    <Link
                      onClick={handleLinkClick}
                      href="/meme-generator"
                      className="block text-lg px-2 py-4 text-white hover:bg-yellow-500 transition duration-300 rounded-3xl"
                    >
                      Meme Generator
                    </Link>
                  </li>
                  <li>
                    <span className="block text-lg px-2 py-4 text-yellow-800 cursor-not-allowed rounded-3xl">
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
                className="hover:text-gray-50 bg-orange-400 hover:bg-yellow-800 p-2 px-5 rounded-3xl"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/meme-generator"
                className="hover:text-gray-50 bg-orange-400 hover:bg-yellow-800 p-2 px-5 rounded-3xl"
              >
                Meme Generator
              </Link>
            </li>
            <li>
              <span className="cursor-not-allowed text-yellow-800 bg-orange-400 p-2 px-5 rounded-3xl">
                Coming Soon...
              </span>
            </li>
          </ul>

          <div className="flex items-center space-x-4">
            <a href="https://t.me/birddogentry" className="hover:opacity-75">
              <Image
                src={tgImg}
                alt="telegram logo"
                priority
                height={32}
                width={32}
              />
            </a>
            <a
              href="https://twitter.com/SOLbirddog"
              className="hover:opacity-75"
            >
              <Image src={xImg} alt="x logo" priority height={32} width={32} />
            </a>

            <a href="https://jup.ag/swap/SOL-BIRDDOG_3XTp12PmKMHxB6YkejaGPUjMGBLKRGgzHWgJuVTsBCoP" className="hover:text-gray-50 bg-orange-400 hover:bg-yellow-800 p-2 px-5 rounded-3xl border-4 border-yellow-400 text-xl">
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
