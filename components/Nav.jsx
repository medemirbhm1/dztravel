import { Avatar, Button, Dropdown, Navbar } from "flowbite-react";
import React, { useContext } from "react";
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
  const handleSignout = () => {
    Cookies.remove("refresh");
    localStorage.removeItem("access");
    setAccess(null);
    router.push("/");
  };
  return (
    <div className="shadow-md">
      <div className="container py-2">
        <Navbar fluid={true} rounded={true}>
          <span className="font-medium text-lg ">Logo</span>
          <ul className="ml-auto mr-6 flex items-center gap-6">
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
          </ul>
          <div className="flex md:order-2">
            <Dropdown
            className=""
              arrowIcon={false}
              inline={true}
              label={
                <Avatar
                  alt="User settings"
                  img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                  rounded={true}
                />
              }
            >
              <Dropdown.Header>
                <span className="block text-sm">
                  {user.first_name} {user.last_name}
                </span>
                <span className="block truncate text-sm font-medium">
                  {user.email}
                </span>
              </Dropdown.Header>
              <Dropdown.Item
                className="flex justify-between"
                onClick={handleSignout}
              >
                Signout <ArrowLeftOnRectangleIcon className="w-6 h-6" />
              </Dropdown.Item>
            </Dropdown>
          </div>
        </Navbar>
      </div>
    </div>
  );
}

export default Nav;
