import { Button } from "@/components/ui/button";
import { SearchIcon } from "@/icons/SearchIcon";
import srcLogo from "@/public/logo.png";
import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="bg-[#DADADA] border-b px-4 md:px-6 py-3 flex items-center justify-between fixed top-0 left-0 w-full z-50 mb-1">
      <Link href="/" className="flex items-center gap-2" prefetch={false}>
        <Image
          src={srcLogo}
          alt="Logo Verified"
          width={150}
          height={150}
          className=""
        />
      </Link>
      <nav className="hidden md:flex items-center gap-4">
        <Link
          href="/AllProducts"
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          Iphone
        </Link>
        <Link
          href="/Smartphone"
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          Smartphone
        </Link>
        <Link
          href="https://wa.me/5491164061265"
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          Contacto
        </Link>
        {/* <Link
          href="#"
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          Accessories
        </Link> */}
        <Link
          href="#"
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          Sale
        </Link>
      </nav>
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" className="rounded-full">
          <SearchIcon className="h-5 w-5" />
          <span className="sr-only">Search</span>
        </Button>

        {/* <Button variant="ghost" size="icon" className="rounded-full">
          <ShoppingCartIcon className="h-5 w-5" />
          <span className="sr-only">Cart</span>
        </Button>
        <Button variant="ghost" size="icon" className="rounded-full">
          <UserIcon className="h-5 w-5" />
          <span className="sr-only">Account</span>
        </Button> */}
      </div>
    </header>
  );
};
