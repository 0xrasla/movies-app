import Link from "next/link";
import { useState } from "react";
import { FaSearch, FaHome, FaHeart } from "react-icons/fa";

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
      name: "Favorites",
      icon: FaHeart,
      url: "/favorites",
    },
  ];

  const userControlLinks = [
    {
      name: "Settings",
      icon: FaSearch,
      url: "/settings",
    },
  ];

  return (
    <div className="w-2/12 h-full bg-slate-800">
      <h2 className="text-2xl font-bold text-slate-400 pl-6 pt-3">
        Movie Time
      </h2>
      <div className="flex gap-5 flex-col pl-6 pt-6">
        <h6 className="text-slate-400 text-sm">MENU</h6>
        {commonLinks.map((link, index) => (
          <Link
            key={index}
            href={link.url}
            className="text-white flex gap-3 items-center"
          >
            <link.icon className="w-4 h-4 text-slate-400" />
            <span className="text-lg text-slate-400 outline-slate-600">
              {link.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
