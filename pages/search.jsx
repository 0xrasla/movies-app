import React from "react";
import UserLayout from "../components/layouts/userlayout";
import { AiOutlineSearch } from "react-icons/ai";

const Search = () => {
  return (
    <UserLayout>
      <div className="w-full text-white flex text-2xl justify-center">
        <input
          className="p-4 w-1/2 rounded-lg bg-transparent border-2 border-white outline-none mt-16"
          type="text"
          name="search"
          id="search"
          placeholder="Search for a movie..."
        />
      </div>
    </UserLayout>
  );
};

export default Search;
