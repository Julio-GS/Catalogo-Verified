import Link from "next/link";

const DropdownTecnologia = () => {
  return (
    <div className="nav-dropdown absolute top-full left-0 mt-2 w-48 bg-black text-white shadow-lg">
      <Link href="/Consolas" className="block px-4 py-2 hover:bg-gray-800">
        Consolas
      </Link>
      <Link
        href="/Apple"
        className="block px-4 py-2 font-bold text-[#1CA0F3] hover:bg-gray-800"
      >
        Toda la tecnologia
      </Link>
    </div>
  );
};

export default DropdownTecnologia;
