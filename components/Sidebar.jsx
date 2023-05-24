import React from "react";
import Link from "next/link";
import Image from "next/image";
import { RxDashboard, RxSketchLogo, RxPerson } from "react-icons/rx";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";

const Sidebar = () => {
  return (
    <div className="w-20 h-screen p-4 fixed  bg-white border-r-[1px]">
      <div className="flex flex-col items-center">
        <Link
          href="/"
          className="inline-block p-3 text-white bg-purple-800 rounded-lg"
        >
          <RxSketchLogo size={20} />
        </Link>
        <span className="w-full p-2 border-gray-200 border-b-[1px] my"></span>
        <Link href="/">
          <div className="inline-block p-3 my-4 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200">
            <RxDashboard size={20} />
          </div>
        </Link>
        <Link href="/customers">
          <div className="inline-block p-3 my-4 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200">
            <RxPerson size={20} />
          </div>
        </Link>
        <Link href="/orders">
          <div className="inline-block p-3 my-4 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200">
            <HiOutlineShoppingBag size={20} />
          </div>
        </Link>
        <Link href="/">
          <div className="inline-block p-3 my-4 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200">
            <FiSettings size={20} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
