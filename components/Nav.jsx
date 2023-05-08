import { Avatar, Button, Dropdown, Navbar } from "flowbite-react";
import React, { useCallback, useContext } from "react";
import {
  MagnifyingGlassIcon,
  InboxIcon,
  ArrowLeftOnRectangleIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import Cookies from "js-cookie";
import { authContext } from "@/context/authContext";
import { useRouter } from "next/router";

function Nav() {
  const { setAccess, user } = useContext(authContext);
  const router = useRouter();
  const handleSignout = useCallback(() => {
    Cookies.remove("refresh");
    localStorage.removeItem("access");
    setAccess(null);
    router.push("/");
  }, []);
  return (
    <div className="shadow-md">
      <div className="container py-1">
        <Navbar className="relative" fluid={true} rounded={true}>
          <span className="font-medium text-lg ">Logo</span>
          <ul className="ml-auto flex items-center gap-6">
            <li>
              <Link href={"/search"}>
                <MagnifyingGlassIcon className="w-6 h-6" />
              </Link>
            </li>
            <li>
              <Link href={"/inbox"}>
                <InboxIcon className="w-6 h-6" />
              </Link>
            </li>
            <li>
              <Button onClick={handleSignout}>
                <ArrowLeftOnRectangleIcon className="h-6 w-6 mr-2" />
                <span>Logout</span>
              </Button>
            </li>
          </ul>
          <ul className="w-20 h-20 bg-black absolute top-full z-50"></ul>
        </Navbar>
      </div>
    </div>
  );
}

export default Nav;
