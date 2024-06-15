import React from "react";
import { BellIcon, ChatBubbleLeftIcon, GlobeAltIcon,MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import SearchBar from "./SearchBar";

const Nav = () => {
  return (
    <div>
      <header className="bg-white">
        <div className="mt-8 mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
        
            <div className="flex items-center gap-4">
            <a href="#">
              <img src="/assets/Ellipse40.png" alt="logo" width={60} height={60} className="max-w-30 h-30 md:max-w-none" />
            </a>
            <div className="hidden md:block">
              <SearchBar />
            </div>
            <div className="md:hidden">
              <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
            </div>
          </div>

            <span className="text-3xl font-semibold mx-auto max-md:text-2xl">Offers & Deals</span>

            <div className="flex items-center gap-4 md:gap-7 max-md:gap-2"> {/* Gap adjusted for different screen sizes */}
              <div className="relative">
                <button onClick={() => console.log("hello")}>
                  <BellIcon className="h-6 w-6 text-gray-500" />
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">10</span>
                </button>
              </div>

              <div className="relative">
                <button onClick={() => console.log("hello")}>
                  <ChatBubbleLeftIcon className="h-6 w-6 text-gray-500" />
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">15</span>
                </button>
              </div>

              <div className="relative">
                <button onClick={() => console.log("hello")}>
                  <GlobeAltIcon className="h-6 w-6 text-gray-500" />
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">89</span>
                </button>
              </div>

              <a href="#">
                <img src="/assets/avatar.png" alt="User Avatar" className="h-10 w-10 rounded-full" />
              </a>
            </div>
          </div>

          <nav className="mt-6">
          <ul className="flex flex-wrap justify-center gap-2 md:text-2xl md:gap-10 text-lg py-4 max-md:gap-4">
  <li className="flex items-center">
    <a className="text-gray-700 transition hover:text-red-500 underline underline-offset-2 px-2 py-1 rounded-md flex items-center" href="#">
      LaunchPad 
    </a>
  </li>
  <li className="flex items-center">
    <a className="text-gray-700 transition hover:text-red-500 underline underline-offset-2 px-2 py-1 rounded-md flex items-center" href="#">
      Learning 
    </a>
  </li>
  <li className="flex items-center">
    <a className="text-gray-700 transition hover:text-red-500 underline underline-offset-2 px-2 py-1 rounded-md flex items-center" href="#">
      Networking 
    </a>
  </li>
  <li className="flex items-center">
    <a className="text-gray-700 transition hover:text-red-500 underline underline-offset-2 px-2 py-1 rounded-md flex items-center" href="#">
      Projects 
    </a>
  </li>
  <li className="flex items-center">
    <a className="text-gray-700 transition hover:text-red-500 underline underline-offset-2 px-2 py-1 rounded-md flex items-center" href="#">
      Jobs 
    </a>
  </li>
</ul>



          </nav>
        </div>
      </header>
    </div>
  );
};

export default Nav;
    