import React from "react";
import { Link } from "react-router-dom";
import { Search } from "./Search";

export const Navbar = ({ darkTheme, setDarkTheme }) => {
  return (
    <div className="p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-200">
      <div className="flex justify-between items-center space-x-5 w-screen md:justify-center">
        <Link to="/">
          <p className="text-2xl font-bold text-blue-600 py-1 px-2 rounded-xl dark:text-white">
            Soterica Search 🔍
          </p>
        </Link>
        <button
          type="button"
          onClick={() => setDarkTheme(!darkTheme)}
          className="text-lg dark:bg-gray-50 dark:text-gray-900 dark:bg-gradient-to-r from-blue-700 rounded-full px-2 py-1 hover:shadow-lg"
        >
          {darkTheme ? "Light 💡" : "Dark 🌙"}
        </button>
      </div>
      <Search />
    </div>
  );
};
