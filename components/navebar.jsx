import Link from "next/link";
import { useState } from "react";
import { FaSearch, FaHome, FaHeart } from "react-icons/fa";
import { IoPeopleCircleSharp } from "react-icons/io5";
import { FiSettings, FiHelpCircle } from "react-icons/fi";

export default function Navebar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const commonLinks = [
    {
      name: "Home",
      icon: FaSearch,
      url: "/",
    },
    {
      name: "Discover",
      icon: FaHome,
      url: "/discover",
    },
    {
      name: "Community",
      icon: IoPeopleCircleSharp,
      url: "/community",
    },
    {
      name: "Favorites",
      icon: FaHeart,
      url: "/favorites",
    },
  ];

  const userControlLinks = [
    {
      name: "Settings",
      icon: FiSettings,
      url: "/settings",
    },
    {
      name: "Help",
      icon: FiHelpCircle,
      url: "/help",
    },
  ];

  return (
    <div className="w-2/12 h-full bg-slate-800">
      <h2 className="text-2xl font-bold text-slate-400 pl-6 pt-3">
        Movie Time
      </h2>
      <div className="flex flex-col h-full">
        <div>
          <div className="flex gap-5 flex-col pl-6 pt-6">
            <h6 className="text-slate-400 text-sm">MENU</h6>
            {commonLinks.map((link, index) => (
              <Link
                key={index}
                href={link.url}
                className="sidebar-link group flex gap-3 items-center"
              >
                <link.icon className="sidebar-icon w-4 h-4 text-slate-400 group-hover:text-red-600" />
                <span className="sidebar-label text-xl text-slate-400 outline-slate-600 group-hover:text-white">
                  {link.name}
                </span>
              </Link>
            ))}
          </div>
          <div className="w-11/12 m-auto mt-7 bg-slate-600 h-0.5 rounded-md"></div>
          <div className="flex gap-5 flex-col pl-6 pt-6">
            {userControlLinks.map((link, index) => (
              <Link
                key={index}
                href={link.url}
                className="sidebar-link group flex gap-3 items-center"
              >
                <link.icon className="sidebar-icon w-4 h-4 text-slate-400 group-hover:text-red-600" />
                <span className="sidebar-label text-xl text-slate-400 outline-slate-600 group-hover:text-white">
                  {link.name}
                </span>
              </Link>
            ))}
          </div>
        </div>

        <div className="flex gap-5 flex-col pl-6 pt-6">
          <Link
            href="/logout"
            className="sidebar-link group flex gap-3 items-center"
          >
            <FiSettings className="sidebar-icon w-4 h-4 text-slate-400 group-hover:text-red-600" />
            <span className="sidebar-label text-xl text-slate-400 outline-slate-600 group-hover:text-white">
              Logout
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
