import Link from "next/link";
const MobileCategoriesSmart = () => {
  return (
    <>
      <Link
        href="/Samsung"
        className="block px-3 py-2 text-sm font-medium hover:bg-gray-700"
      >
        Samsung
      </Link>
      <Link
        href="/Motorola"
        className="block px-3 py-2 text-sm font-medium hover:bg-gray-700"
      >
        Motorola
      </Link>
      <Link
        href="/Xiaomi"
        className="block px-3 py-2 text-sm font-medium hover:bg-gray-700"
      >
        Xiaomi
      </Link>
      <Link
        href="/Smartphone"
        className="block px-3 py-2 text-sm font-medium text-blue-500 hover:bg-gray-700"
      >
        Todos los smartphones
      </Link>
    </>
  );
};

export default MobileCategoriesSmart;
