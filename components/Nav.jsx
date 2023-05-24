import { Avatar, Button, Dropdown, Navbar } from "flowbite-react";
import React, { useCallback, useContext, useState } from "react";
import { ArrowLeftOnRectangleIcon } from "@heroicons/react/24/outline";
import Cookies from "js-cookie";
import { authContext } from "@/context/authContext";
import { useRouter } from "next/router";
import Search from "./Search";

function Nav() {
  const { setAccess } = useContext(authContext);
  const router = useRouter();
  const handleSignout = useCallback(() => {
    Cookies.remove("refresh");
    localStorage.removeItem("access");
    setAccess(null);
    router.push("/");
  }, []);
  return (
    <nav className="absolute right-2 sm:right-8 top-0  py-3 w-[calc(100%-0.75rem)] sm:w-auto  z-50  bg-transparent  flex justify-end items-center gap-2 ">
      <Search />
      <form></form>
      <button
        className="flex items-center text-white gap-2 p-3  bg-gray-800 rounded-full transition"
        onClick={handleSignout}
      >
        <ArrowLeftOnRectangleIcon className="h-6 w-6" />
        <span className="hidden sm:inline">Logout</span>
      </button>
    </nav>
  );
}

export default Nav;
