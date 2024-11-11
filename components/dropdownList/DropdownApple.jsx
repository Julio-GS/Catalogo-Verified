import Link from "next/link";
const DropdownApple = () => {
  return (
    <div className="nav-dropdown absolute top-full left-0 mt-2 w-48 bg-black text-white shadow-lg">
      <Link
        href="/MacBook"
        className="block px-4 py-2 hover:bg-gray-800 text-white"
      >
        MacBook
      </Link>
      <Link href="/iPad" className="block px-4 py-2 hover:bg-gray-800">
        iPad
      </Link>
      <Link href="/AppleWatch" className="block px-4 py-2 hover:bg-gray-800">
        Apple Watch
      </Link>
      <Link href="/iMac" className="block px-4 py-2 hover:bg-gray-800">
        iMac
      </Link>
      <Link href="/Mac" className="block px-4 py-2 hover:bg-gray-800">
        Mac
      </Link>
      <Link href="/Accesorios" className="block px-4 py-2 hover:bg-gray-800">
        Accesorios
      </Link>
      <Link
        href="/Apple"
        className="block px-4 py-2 font-bold text-[#1CA0F3] hover:bg-gray-800"
      >
        Encontrá tu iPhone Ideal
      </Link>
    </div>
  );
};

export default DropdownApple;
