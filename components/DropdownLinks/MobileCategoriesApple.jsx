import Link from "next/link";
const MobileCategoriesApple = () => {
  return (
    <>
      <Link
        href="/MacBook"
        className="block px-3 py-2 text-sm font-medium hover:bg-gray-700"
      >
        MacBook
      </Link>
      <Link
        href="/AppleWatch"
        className="block px-3 py-2 text-sm font-medium hover:bg-gray-700"
      >
        Apple Watch
      </Link>
      <Link
        href="/iPad"
        className="block px-3 py-2 text-sm font-medium hover:bg-gray-700"
      >
        iPad
      </Link>
      <Link
        href="/iMac"
        className="block px-3 py-2 text-sm font-medium hover:bg-gray-700"
      >
        iMac
      </Link>
      <Link
        href="/Mac"
        className="block px-3 py-2 text-sm font-medium hover:bg-gray-700"
      >
        Mac Studio & Mac Mini
      </Link>
      <Link
        href="/Accesorios"
        className="block px-3 py-2 text-sm font-medium hover:bg-gray-700"
      >
        Accesorios
      </Link>
      <Link
        href=" /Apple"
        className="block px-3 py-2 text-sm font-medium text-blue-500 hover:bg-gray-700"
      >
        Todos los productos
      </Link>
    </>
  );
};

export default MobileCategoriesApple;