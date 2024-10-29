import Link from "next/link";

const DropdownSmartphone = () => {
  return (
    <div className="nav-dropdown absolute top-full left-0 mt-2 w-48 bg-black text-white shadow-lg">
      <Link
        href="/Samsung"
        prefetch={false}
        className="block px-4 py-2 hover:bg-gray-800"
      >
        Samsung
      </Link>
      <Link href="/Motorola" className="block px-4 py-2 hover:bg-gray-800">
        Motorola
      </Link>
      <Link href="/Xiaomi" className="block px-4 py-2 hover:bg-gray-800">
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
  );
};

export default DropdownSmartphone;
