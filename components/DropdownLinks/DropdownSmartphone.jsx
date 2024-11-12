import Link from "next/link";

const DropdownSmartphone = () => {
  return (
    <>
      <Link href="/Samsung" className="block px-4 py-2 hover:bg-gray-800">
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
        className="block px-4 py-2 text-blue-500 hover:bg-gray-800"
      >
        Todos los smartphones
      </Link>
    </>
  );
};

export default DropdownSmartphone;
