import srcLogo from "@/public/logo.png";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import SearchBar from "./SearchBar";
export const Header = ({ products }) => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const navRef = useRef();

  const handleDropdownToggle = (dropdownId) => {
    setOpenDropdown(openDropdown === dropdownId ? null : dropdownId);
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
      <nav className="hidden md:flex items-center gap-4" ref={navRef}>
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
              class="w-2.5 h-2.5 ms-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
          {openDropdown === "apple" && (
            <div className="absolute top-full left-0 mt-2 w-48 bg-black text-white shadow-lg">
              <Link
                href="/MacBook"
                className="block px-4 py-2 hover:bg-gray-800"
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
        <div className="relative ">
          <button
            onClick={() => handleDropdownToggle("smartphones")}
            className="text-sm text-white font-medium hover:underline underline-offset-4 flex flex-row items-center gap-1"
          >
            Smartphone
            <svg
              class="w-2.5 h-2.5 ms-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
          {openDropdown === "smartphones" && (
            <div className="absolute top-full left-0 mt-2 w-48 bg-black text-white shadow-lg">
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
