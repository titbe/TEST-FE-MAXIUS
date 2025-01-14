"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { HiOutlineBars3 } from "react-icons/hi2";
import { IoCloseOutline } from "react-icons/io5";

export default function Header({ activeSection }) {
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const [language, setLanguage] = useState("en");
  const sidebarRef = useRef(null);

  const switchLanguage = (lang) => {
    setLanguage(lang);
  };

  useEffect(() => {
    if (isSidebarVisible) {
      document.body.classList.add("sidebar-open");
    } else {
      document.body.classList.remove("sidebar-open");
    }

    return () => {
      document.body.classList.remove("sidebar-open");
    };
  }, []);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  return (
    <header className="flex justify-between px-24 pt-14 z-20 max-sm:px-10 max-sm:pt-8">
      <div className="font-bold">
        <Link
          href="/#firstPage"
          className={`transition-colors duration-300 
    ${
      activeSection === "firstPage" || activeSection === "fourthPage"
        ? "text-black"
        : "text-white"
    }`}
        >
          MAXIUS
        </Link>
      </div>
      <div className="flex flex-col items-end relative z-20">
        <button onClick={toggleSidebar}>
          {isSidebarVisible ? (
            <IoCloseOutline className="size-10 text-white" />
          ) : (
            <HiOutlineBars3
              className={`size-10 ${
                activeSection === "firstPage" || activeSection === "fourthPage"
                  ? "!text-black"
                  : "text-white"
              }`}
            />
          )}
        </button>
        <div className="flex gap-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              switchLanguage("en");
            }}
            className={`
    ${
      language === "en"
        ? "text-[rgb(255,153,51)]"
        : isSidebarVisible
        ? "text-white"
        : activeSection === "firstPage" || activeSection === "fourthPage"
        ? "text-black"
        : "text-white"
    }
  `}
          >
            EN
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              switchLanguage("kr");
            }}
            className={`
    ${
      language === "kr"
        ? "text-[rgb(255,153,51)]"
        : isSidebarVisible
        ? "text-white"
        : activeSection === "firstPage" || activeSection === "fourthPage"
        ? "text-black"
        : "text-white"
    }
  `}
          >
            KR
          </button>
        </div>
      </div>
      {isSidebarVisible && (
        <div
          className="fixed inset-0 pointer-events-auto"
          onClick={(e) => {
            if (!sidebarRef.current || !sidebarRef.current.contains(e.target)) {
              setSidebarVisible(false);
            }
          }}
        />
      )}

      <div
        ref={sidebarRef}
        className={`fixed top-0 right-0 h-full w-1/3 bg-[url('/side-menu-open.png')] pt-[150px] pl-10 pr-[50px] pb-[50px] text-white transform transition-transform duration-300 ease-out  ${
          isSidebarVisible
            ? "translate-x-0 sidebar-visible max-sm:w-full"
            : "translate-x-full"
        }`}
      >
        <ul className="list-none p-0 m-0 select-none">
          <div className="pb-10">
            <div className="list btn_0 active cursor-pointer hover:text-[rgb(255,153,51)] ease-in-out duration-700 transition-all">
              <li className="btn-items-0 text-4xl pt-[25px]">Home</li>
              <div className="list-items"></div>
            </div>
            <div className="list btn_0 active cursor-pointer hover:text-[rgb(255,153,51)] ease-in-out duration-700 transition-all">
              <li className="btn-items-0 text-4xl pt-[25px]">Brochure</li>
              <div className="list-items"></div>
            </div>
            <div className="list btn_0 active cursor-pointer hover:text-[rgb(255,153,51)] ease-in-out duration-700 transition-all">
              <li className="btn-items-0 text-4xl pt-[25px]">Proposal</li>
              <div className="list-items"></div>
            </div>
            <div className="list btn_0 active cursor-pointer hover:text-[rgb(255,153,51)] ease-in-out duration-700 transition-all">
              <li className="btn-items-0 text-4xl pt-[25px]">Contact</li>
              <div className="list-items"></div>
            </div>
          </div>

          <div className="infoWrapper text-[13px] font-thin">
            <p className="pt-[50px] pb-[30px] border-white border-t">
              5F 12-30, Simin-daero 327beon-gil, Dongan-gu, Anyang-si,
              Gyeonggi-do, Republic of Korea
            </p>
            <p className="pb-5">
              <Link href="/" target="_blank" rel="noopener noreferrer">
                View Map
              </Link>
            </p>
            <p>Company.</p>
            <p className="pb-5">
              <Link href="mailto: support@maxius.io" title="">
                support@maxius.io
              </Link>
            </p>
            <p>Technical support </p>
            <p className="pb-5">
              <Link href="mailto: support@maxius.io" title="">
                support@maxius.io
              </Link>
            </p>
          </div>
        </ul>
      </div>
    </header>
  );
}
