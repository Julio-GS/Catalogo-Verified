import "@/app/globals.css";
import srcLogo from "@/public/logo.png";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import SearchBar from "./SearchBar";
export const Header = ({ products }) => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef();

  const handleDropdownToggle = (dropdownId) => {
    setOpenDropdown(openDropdown === dropdownId ? null : dropdownId);
  };
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setOpenDropdown(null);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-black border-b px-4 md:px-6 py-3 flex items-center mx-auto justify-between fixed top-0 left-0 w-full z-50 mb-1">
      <Link href="/" className="flex items-center gap-2" prefetch={false}>
        <Image
          src={srcLogo}
          alt="Logo Verified"
          width={150}
          height={150}
          className=""
        />
      </Link>

      <button
        class=" md:hidden group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md border  bg-transparent px-6 font-medium text-white transition-all "
        onClick={handleMenuToggle}
      >
        ☰
      </button>
      <nav
        className={`fixed md:relative top-0 left-0 w-full h-full md:h-auto bg-black md:bg-transparent transition-transform transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 z-50 md:z-auto flex flex-col md:flex-row items-center gap-10 my-auto justify-center md:gap-4 mx-auto`}
        ref={navRef}
      >
        <button
          className="  md:hidden self-center p-4"
          onClick={handleMenuToggle}
        >
          <svg
            width="41px"
            height="41px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color="#000000"
            stroke-width="1.3"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M3.6 2.25C2.85442 2.25 2.25 2.85441 2.25 3.6V20.4C2.25 21.1456 2.85441 21.75 3.6 21.75H20.4C21.1456 21.75 21.75 21.1456 21.75 20.4V3.6C21.75 2.85442 21.1456 2.25 20.4 2.25H3.6ZM10.409 9.34835C10.1161 9.05546 9.64121 9.05546 9.34831 9.34835C9.05542 9.64124 9.05542 10.1161 9.34831 10.409L10.9393 12L9.34831 13.591C9.05542 13.8839 9.05542 14.3588 9.34831 14.6517C9.64121 14.9445 10.1161 14.9445 10.409 14.6517L12 13.0607L13.591 14.6517C13.8838 14.9445 14.3587 14.9445 14.6516 14.6517C14.9445 14.3588 14.9445 13.8839 14.6516 13.591L13.0606 12L14.6516 10.409C14.9445 10.1161 14.9445 9.64124 14.6516 9.34835C14.3587 9.05546 13.8838 9.05546 13.591 9.34835L12 10.9393L10.409 9.34835Z"
              fill="white"
            ></path>
          </svg>
        </button>
        <Link
          href="/AllProducts"
          className="text-sm text-white font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          Iphone
        </Link>
        <div className="relative ">
          <button
            onClick={() => handleDropdownToggle("apple")}
            className="text-sm text-white font-medium hover:underline underline-offset-4 flex flex-row items-center gap-1"
          >
            Apple
            <svg
              className="w-2.5 h-2.5 ms-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
          {openDropdown === "apple" && (
            <div className="nav-dropdown absolute top-full left-0 mt-2 w-full  bg-black text-white shadow-lg md:w-50 md:z-10 md:relative md:mt-0">
              <Link
                href="/MacBook"
                className="block px-4 py-2 hover:bg-gray-800 text-white"
              >
                MacBook
              </Link>
              <Link href="/iPad" className="block px-4 py-2 hover:bg-gray-800">
                iPad
              </Link>
              <Link
                href="/AppleWatch"
                className="block px-4 py-2 hover:bg-gray-800"
              >
                Apple Watch
              </Link>
              <Link href="/iMac" className="block px-4 py-2 hover:bg-gray-800">
                iMac
              </Link>
              <Link
                href="/apple/mac"
                className="block px-4 py-2 hover:bg-gray-800"
              >
                Mac
              </Link>
              <Link
                href="/Accesorios"
                className="block px-4 py-2 hover:bg-gray-800"
              >
                Accesorios
              </Link>
              <Link
                href="/Apple"
                className="block px-4 py-2 font-bold text-[#1CA0F3] hover:bg-gray-800"
              >
                Todos los productos de Apple
              </Link>
            </div>
          )}
        </div>
        <div className="relative">
          <button
            onClick={() => handleDropdownToggle("smartphones")}
            className="text-sm text-white font-medium hover:underline underline-offset-4 flex flex-row items-center gap-1"
          >
            Smartphone
            <svg
              className="w-2.5 h-2.5 ms-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
          {openDropdown === "smartphones" && (
            <div className="nav-dropdown absolute top-full left-0 mt-2 w-full bg-black text-white shadow-lg md:w-48 md:relative md:mt-0">
              <Link
                href="/Samsung"
                prefetch={false}
                className="block px-4 py-2 hover:bg-gray-800"
              >
                Samsung
              </Link>
              <Link
                href="/Motorola"
                className="block px-4 py-2 hover:bg-gray-800"
              >
                Motorola
              </Link>
              <Link
                href="/Xiaomi"
                className="block px-4 py-2 hover:bg-gray-800"
              >
                Xiaomi
              </Link>
              <Link
                href="/Smartphone"
                className="block px-4 py-2 font-bold text-[#1CA0F3] hover:bg-gray-800"
                prefetch={false}
              >
                Todos los Smartphones
              </Link>
            </div>
          )}
        </div>
        <div className="relative">
          <button
            onClick={() => handleDropdownToggle("Tecnologia")}
            className="text-sm text-white font-medium hover:underline underline-offset-4 flex flex-row items-center gap-1"
          >
            Tecnologia
            <svg
              className="w-2.5 h-2.5 ms-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
          {openDropdown === "Tecnologia" && (
            <div className="nav-dropdown absolute top-full left-0 mt-2 w-full bg-black text-white shadow-lg md:w-48 md:relative md:mt-0">
              <Link
                href="/MacBook"
                className="block px-4 py-2 hover:bg-gray-800"
              >
                Notebooks
              </Link>
              <Link href="/iPad" className="block px-4 py-2 hover:bg-gray-800">
                Consolas
              </Link>
              <Link
                href="/AppleWatch"
                className="block px-4 py-2 hover:bg-gray-800"
              >
                Drones
              </Link>
              <Link href="/iMac" className="block px-4 py-2 hover:bg-gray-800">
                Electro
              </Link>
              <Link
                href="/apple/mac"
                className="block px-4 py-2 hover:bg-gray-800"
              >
                Kindle
              </Link>
              <Link
                href="/Apple"
                className="block px-4 py-2 font-bold text-[#1CA0F3] hover:bg-gray-800"
              >
                Toda la tecnologia
              </Link>
            </div>
          )}
        </div>
        <Link
          href="https://wa.me/5491164061265"
          className="text-sm text-white font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          Contacto
        </Link>
        <Link
          href="#"
          className="text-sm text-white font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          Sale
        </Link>
      </nav>
      <div className="flex items-center gap-2">
        <SearchBar products={products} />
      </div>
    </header>
  );
};
