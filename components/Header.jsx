import "@/app/globals.css";
import logo from "@/public/logo.webp";
import { Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import DropdownApple from "./DropdownLinks/DropdownApple";
import DropdownSmartphone from "./DropdownLinks/DropdownSmartphone";
import MobileCategoriesApple from "./DropdownLinks/MobileCategoriesApple";
import MobileCategoriesSmart from "./DropdownLinks/MobileCategoriesSmart";
import MobileIconNav from "./svg/MobileIconNav";
import MobileNav from "./svg/MobileNav";
import NavbarIcon from "./svg/NavbarIcon";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [timeoutId, setTimeoutId] = useState(null);

  const toggleSubmenu = (category) => {
    if (activeSubmenu === category) {
      setActiveSubmenu(null);
    } else {
      setActiveSubmenu(category);
    }
  };

  const handleMouseEnter = (category) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    setActiveSubmenu(category);
  };

  const handleMouseLeave = () => {
    const newTimeoutId = setTimeout(() => {
      setActiveSubmenu(null);
    }, 500);
    setTimeoutId(newTimeoutId);
  };

  const handleMouseEnterSubmenu = (category) => {
    handleMouseEnter(category);
  };

  const handleMouseLeaveSubmenu = () => {
    handleMouseLeave();
  };

  return (
    <nav className="bg-black text-white fixed w-full z-20 top-0 start-0 border-b border-gray-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo y botón del menú en mobile */}
          <div className="flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white md:hidden focus:outline-none"
            >
              <MobileIconNav />
            </button>
            <div className="md:ml-0">
              <Link href="/">
                <Image
                  src={logo}
                  alt="Verified logo"
                  width={150}
                  height={150}
                />
              </Link>
            </div>
          </div>
          {/* Opciones del menú en desktop */}
          <div className="hidden md:flex md:items-center md:justify-center md:flex-grow">
            <div className="flex space-x-4">
              <Link
                href="/iPhone"
                className="hover:text-gray-400 transition duration-200"
              >
                iPhone
              </Link>

              <div
                className="relative"
                onMouseEnter={() => handleMouseEnterSubmenu("apple")}
                onMouseLeave={handleMouseLeaveSubmenu}
              >
                <button className="flex items-center hover:text-gray-400 transition duration-200">
                  Apple
                  <NavbarIcon />
                </button>
                <Transition
                  show={activeSubmenu === "apple"}
                  enter="transition ease-out duration-300 transform"
                  enterFrom="opacity-0 -translate-y-4"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-200 transform"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 -translate-y-4"
                >
                  <div className="absolute left-0 mt-2 w-48 bg-black shadow-lg z-10">
                    <DropdownApple />
                  </div>
                </Transition>
              </div>

              <div
                className="relative"
                onMouseEnter={() => handleMouseEnterSubmenu("smartphones")}
                onMouseLeave={handleMouseLeaveSubmenu}
              >
                <button className="flex items-center hover:text-gray-400 transition duration-200">
                  Smartphones
                  <NavbarIcon />
                </button>
                <Transition
                  show={activeSubmenu === "smartphones"}
                  enter="transition ease-out duration-300 transform"
                  enterFrom="opacity-0 -translate-y-4"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-200 transform"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 -translate-y-4"
                >
                  <div className="absolute left-0 mt-2 w-48 bg-black shadow-lg z-10">
                    <DropdownSmartphone />
                  </div>
                </Transition>
              </div>

              <Link
                href="/Consolas"
                className="hover:text-gray-400 transition duration-200"
              >
                Tecnologia
              </Link>
              <Link
                href="/"
                className="hover:text-gray-400 transition duration-200"
              >
                Outlet
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Menú en mobile */}
      <Transition
        show={isOpen}
        enter="transition ease-out duration-300 transform"
        enterFrom="opacity-0 -translate-y-4"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-200 transform"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 -translate-y-4"
      >
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/iPhone"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
            >
              iPhone
            </Link>
            <button
              onClick={() => toggleSubmenu("ApplemobileCategories")}
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
            >
              Apple
              <MobileNav />
            </button>
            {activeSubmenu === "ApplemobileCategories" && (
              <div className="pl-4 space-y-2">
                <MobileCategoriesApple />
              </div>
            )}
            <button
              onClick={() => toggleSubmenu("SmartmobileCategories")}
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
            >
              Smartphones
              <MobileNav />
            </button>
            {activeSubmenu === "SmartmobileCategories" && (
              <div className="pl-4 space-y-2">
                <MobileCategoriesSmart />
              </div>
            )}
          </div>
        </div>
      </Transition>
    </nav>
  );
};
