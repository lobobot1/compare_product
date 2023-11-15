'use client'
import React from 'react'
import SideBar from "../../components/SideBar";
import { FetchingProvider } from "../../context/FetchingProvider";

const homeLayout = ({children}) => {
  return (
    <div>
        <FetchingProvider>
          <div className="flex flex-row">
            <aside className="md:w-[14.6%]  min-h-screen">
              <SideBar />
            </aside>
            <main className="md:w-[85.4%] h-screen">
              <div className="bg-[#324068] p-10 h-full">{children}</div>
            </main>
          </div>
        </FetchingProvider>
    </div>
  )
}

export default homeLayout