import React from "react";
import Link from "next/link";
import {
  AiOutlineHome,
  AiOutlineSearch,
  AiOutlineStar,
  AiOutlineFire,
} from "react-icons/ai";

const Topbar = () => {
  const routes = [
    {
      path: "/",
      name: "Home",
      icon: AiOutlineHome,
    },
    {
      path: "/search",
      name: "Search",
      icon: AiOutlineSearch,
    },
    {
      path: "/favorites",
      name: "Favorites",
      icon: AiOutlineStar,
    },
    {
      path: "/trending",
      name: "Trending",
      icon: AiOutlineFire,
    },
  ];

  return (
    <div className="w-full text-white flex gap-10 justify-center p-4">
      {routes.map((route, i) => {
        return (
          <Link key={i} href={route.path}>
            <span className="flex gap-2 items-center cursor-pointer hover:text-teal-300">
              {<route.icon />}
              {route.name}
            </span>
          </Link>
        );
      })}
    </div>
  );
};

export default Topbar;
