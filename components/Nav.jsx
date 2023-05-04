import { Avatar, Dropdown, Navbar } from "flowbite-react";
import React from "react";
import { MagnifyingGlassIcon, InboxIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
function Nav() {
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
                <span className="block text-sm">Bonnie Green</span>
                <span className="block truncate text-sm font-medium">
                  name@flowbite.com
                </span>
              </Dropdown.Header>
              <Dropdown.Item>Sign out</Dropdown.Item>
            </Dropdown>
            <Navbar.Toggle />
          </div>
        </Navbar>
      </div>
    </div>
  );
}

export default Nav;
