'use client'
import "./globals.css";
import { Inter } from "next/font/google";
import SideBar from "../components/SideBar";
import { FetchingProvider } from "../context/FetchingProvider";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} `}>
        <FetchingProvider>
          <div className="flex flex-row">
            <aside  className="md:w-[14.6%]  min-h-screen">
              <SideBar />
            </aside>
            <main className="md:w-[85.4%] h-screen">
              <div className="bg-[#324068] p-10 h-full">
                {children}
              </div>
            </main>
          </div>
        </FetchingProvider>
      </body>
    </html>
  );
}
