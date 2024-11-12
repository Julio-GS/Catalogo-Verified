import Link from "next/link";
const DropdownApple = () => {
  return (
    <>
      <Link href="/MacBook" className="block px-4 py-2 hover:bg-gray-800">
        MacBook
      </Link>
      <Link href="/AppleWatch" className="block px-4 py-2 hover:bg-gray-800">
        Apple Watch
      </Link>
      <Link href="/iPad" className="block px-4 py-2 hover:bg-gray-800">
        iPad
      </Link>
      <Link href="/iMac" className="block px-4 py-2 hover:bg-gray-800">
        iMac
      </Link>
      <Link href="/Mac" className="block px-4 py-2 hover:bg-gray-800">
        Mac Studio & Mac Mini
      </Link>
      <Link href="/Accesorios" className="block px-4 py-2 hover:bg-gray-800">
        Accesorios
      </Link>
      <Link
        href="/Apple"
        className="block px-4 py-2 hover:bg-gray-800 text-blue-500"
      >
        Todos los productos
      </Link>
    </>
  );
};

export default DropdownApple;
