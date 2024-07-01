import { Button } from "@/components/ui/button";
import { ShoppingCartIcon } from "@/icons/CartIcon";
import { MountainIcon } from "@/icons/MountainIcon";
import { SearchIcon } from "@/icons/SearchIcon";
import { UserIcon } from "@/icons/UserIcon";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="bg-background border-b px-4 md:px-6 py-3 flex items-center justify-between fixed top-0 left-0 w-full z-50">
      <Link href="/" className="flex items-center gap-2" prefetch={false}>
        <MountainIcon className="h-6 w-6" />
        <span className="text-lg font-semibold">Emprendimiento</span>
      </Link>
      <nav className="hidden md:flex items-center gap-4">
        <Link
          href="#"
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          New Arrivals
        </Link>
        <Link
          href="#"
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          Shoes
        </Link>
        <Link
          href="#"
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          Clothing
        </Link>
        <Link
          href="#"
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          Accessories
        </Link>
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
        <Button variant="ghost" size="icon" className="rounded-full">
          <ShoppingCartIcon className="h-5 w-5" />
          <span className="sr-only">Cart</span>
        </Button>
        <Button variant="ghost" size="icon" className="rounded-full">
          <UserIcon className="h-5 w-5" />
          <span className="sr-only">Account</span>
        </Button>
      </div>
    </header>
  );
};
