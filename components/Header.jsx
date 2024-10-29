import "@/app/globals.css";
import srcLogo from "@/public/logo.png";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import DropdownApple from "./dropdownList/DropdownApple";
import DropdownSmartphone from "./dropdownList/DropdownSmartphone";
import DropdownTecnologia from "./dropdownList/DropdownTecnologia";
import NavbarIcon from "./ui/svg/NavbarIcon";
export const Header = () => {
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
        ></button>
        <Link
          href="/AllProducts"
          className="text-sm text-white font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          iPhone
        </Link>
        <div className="relative ">
          <button
            onClick={() => handleDropdownToggle("apple")}
            className="text-sm text-white font-medium hover:underline underline-offset-4 flex flex-row items-center gap-1"
          >
            Apple
            <NavbarIcon />
          </button>
          {openDropdown === "apple" && <DropdownApple />}
        </div>
        <div className="relative">
          <button
            onClick={() => handleDropdownToggle("smartphones")}
            className="text-sm text-white font-medium hover:underline underline-offset-4 flex flex-row items-center gap-1"
          >
            Smartphone
            <NavbarIcon />
          </button>
          {openDropdown === "smartphones" && <DropdownSmartphone />}
        </div>
        <div className="relative">
          <button
            onClick={() => handleDropdownToggle("Tecnologia")}
            className="text-sm text-white font-medium hover:underline underline-offset-4 flex flex-row items-center gap-1"
          >
            Tecnologia
            <NavbarIcon />
          </button>
          {openDropdown === "Tecnologia" && <DropdownTecnologia />}
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
        {/* <SearchBar products={products} /> */}
      </div>
    </header>
  );
};
