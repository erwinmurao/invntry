import React from "react";
import Logo from "../../../assets/hero.png";
import Sidebar from "../SIDEBAR/Sidebar";
import SecondarySidebar from "../SIDEBAR/SecondarySidebar";

const Dashboard = () => {
  return (
    // 1. h-screen and overflow-hidden locks the viewport so the whole page doesn't scroll
    <div className="dashboard h-screen flex flex-col overflow-hidden">
      {/* FIXED TOP MENU */}
      <div className="menu flex justify-between items-center p-4 bg-gray-800 text-white shrink-0">
        <div className="flex space-x-20 ml-4 p-2 ">
          <div className="space-x-2  flex items-center">
            <img src={Logo} alt="Logo" className="h-10 w-10" />
          </div>

          <div className="flex items-center  border w-100 2px p-2">
            <div className="mr-2 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5 h-5 text-gray-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search..."
              className="w-full bg-transparent focus:outline-none text-white"
            />
          </div>
        </div>

        <div className="flex space-x-10">
          <div className="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
              />
            </svg>
          </div>
          <div className="mr-10 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* LOWER SECTION */}
      <div className="flex flex-row flex-1   overflow-hidden">
        {/* FIXED LEFT SIDEBAR */}
        <div className="left-container w-[12%] bg-gray-800  shrink-0">
          <Sidebar />
        </div>

        {/* SCROLLABLE RIGHT CONTENT */}
        <div className="right-container flex-1 bg-white overflow-y-auto">
          {/* This inner div is where your Inventory Management title, cards, and table live */}
          <div className="p-6">
            <SecondarySidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
