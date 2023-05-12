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
    <nav className="absolute right-8 top-0  py-3  z-50  bg-transparent  flex justify-between items-center gap-2">
      <Search />
      <button
        className="flex items-center text-white gap-1 p-3  bg-gray-800 rounded-full transition"
        onClick={handleSignout}
      >
        <ArrowLeftOnRectangleIcon className="h-6 w-6 mr-2" />
        <span>Logout</span>
      </button>
    </nav>
  );
}

export default Nav;
