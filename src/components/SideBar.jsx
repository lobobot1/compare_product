'use client'
import Menu from "./Menu";
import { FaSignOutAlt } from "react-icons/fa";
import { signOut } from 'next-auth/react'

const SideBar = () => {
  return (
    <>
      <nav className="bg-[#202435] shadow-xl h-screen grid content-between">
        <div>
          <div className="text-[#2ed89a] text-2xl font-bold pt-7 px-5 flex items-center justify-between">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3"
              />
            </svg>
            <p className="[text-shadow:_0_1.5px_0_rgb(13_194_166_/_20%)] select-none ">
              Product QA
            </p>
          </div>
          <Menu />
        </div>

        <button className="capitalize bg-red-700 font-bold py-1 text-[#cfd1d5]" onClick={()=>signOut()}>
          sing out <FaSignOutAlt className="inline-block" />
        </button>

      </nav>
    </>
  );
};

export default SideBar;
