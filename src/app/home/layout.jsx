"use client";
import SideBar from "../../components/SideBar";
import { SWRConfig } from "swr";
import CacheProvider from "../utils/CacheProvider";
import { FetchingProvider } from "../../context/FetchingProvider";

const homeLayout = ({ children }) => {
  return (
    <SWRConfig value={{ provider: () => CacheProvider() }}>
      <FetchingProvider>
        <div className="flex flex-row">
          <aside className="md:w-[14.6%]  min-h-screen">
            <SideBar />
          </aside>
          <section className="md:w-[85.4%] h-screen">
            <div className="bg-[#324068] p-10 h-full">{children}</div>
          </section>
        </div>
      </FetchingProvider>
    </SWRConfig>
  );
};

export default homeLayout;
